import React , { useEffect, useState }  from "react";
import useFetchData from "../../hooks/useFetchData";
import electronics from "../../assets/electronics.png";
import { Link, useParams } from "react-router-dom";
import { instance } from "../../api/instance";
import {AiOutlineHeart} from "react-icons/ai"
import Slider from "react-slick";
import "./CategoryProducts.scss"

function CategoryProducts() {
  const {id} = useParams();
    const [product, setProduct] = useState([]);
  const [data, isLoading] = useFetchData("categories");
  
  useEffect(() => {
    
        instance 
        .get(`/categories/${id}/products`)
        .then((res) =>{
          setProduct(res.data)
          console.log(res.data);
        })
        .catch((err)=> console.log(err));
    
  },[id]);

    if (isLoading) {
        return <p>isloading....</p>;
    }

    const settingsw = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };

  return (
    <>
      <div className="categoryProducts__container">
        <div className="categoryProducts__wrapper">
        <h2 className="categoryProducts__title">Featured Event</h2>
        <img src={electronics} alt="" />
        <p className="categoryProducts__par-up">Up to 60% off Apple tech</p>
        <p className="categoryProducts__par-save">Save on AirPods, iPhones, and more.</p>
        </div>
        <div className="categoryProducts__shop">
          <h3 className="categoryProducts__shop-title">Shop by Category</h3>
          
          <Slider {...settingsw}>
          {data.map(({ id, image, name }) => (
              <Link to={`../../category/${id}`} className="category-item" key={id}>
                <div className="category__item-wrapper">
                  <img src={image} alt="" />
                  <h3>{name}</h3>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
        <div className="smilarProduct__item-wrapper">
        {product.map(({ id, title, images, price, description }) => (
                <Link to={`../../product/${id}`} className="smilar__item" key={id}>
                  <div className="smilarProduct__item">
                    <img width={241} height={241} src={images} alt="" />
                    <p>{title}</p>
                    <h5>${price}</h5>
                    <h3>{description}</h3>
                    <div className="sponsored"><h4>SPONSORED</h4><span><AiOutlineHeart/></span></div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </>
  );
}

export default CategoryProducts;

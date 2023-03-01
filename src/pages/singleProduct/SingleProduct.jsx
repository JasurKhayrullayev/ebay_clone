import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Container } from "../../utils/Components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { instance } from "../../api/instance";
import "./SingleProducts.scss";
import  {useDispatch}  from "react-redux";

function SingleProduct() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [data, isLoading] = useFetchData(`products/${id}`);
  const dispatch = useDispatch();
    const addToBasket = () => {
      dispatch({ product: data, type: "ADD_TO_BASKET" })
    }
  useEffect(() => {
    if (data?.category?.id) {
      instance
        .get(`/categories/${data.category.id}/products`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }
  }, [data]);

  if (isLoading) {
    return <p>isloading....</p>;
  }

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const settingsNew = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  
  

  return (
    <>
      {data && (
        <Container>
          <div className="singleProducts">
            <div className="singleProduct__img">
              <Slider {...settings}>
                {data?.images?.length > 0 &&
                  data.images.map((url) => {
                    return (
                      <div key={url}>
                        <img width={581} height={608} src={url} alt="" />
                      </div>
                    );
                  })}
              </Slider>
            </div>
            <div className="singleProduct__about">
              <div className="singleProduct__title-wrapper">
                <p className="singleProduct__about-title">Title:</p>
                <h3 className="singleProduct__about-titledata">
                  {data?.title}
                </h3>
              </div>
              <div className="singleProduct__desc-wrapper">
                <p className="singleProduct__desc-title">Description:</p>
                <p className="singleProduct__desc-titledata">
                  {data?.description}
                </p>
              </div>
              <div className="singleProduct__cat-wrapper">
                <p className="singleProduct__cat-title">Category:</p>
                <p className="singleProduct__cat-titledata">
                  {data?.category?.name}
                </p>
              </div>
              <div className="singleProduct__col-wrapper">
                <p className="singleProduct__col-title">Color:</p>
                <p className="singleProduct__col-titledata">White</p>
              </div>
              <div className="singleProduct__col-wrapper">
                <p className="singleProduct__col-title">Cosmetic:</p>
                <p className="singleProduct__col-titledata">Heavy Use</p>
              </div>
              <div className="singleProduct__col-wrapper num__border">
                <p className="singleProduct__num-title">Quantity:</p>
                <input className="singleProduct__num" type="number" />
                <p className="singleProduct__num-red">
                  Last One <span>/</span> 86 sold
                </p>
              </div>
              <div className="singleProduct__price-wrapper">
                <p className="singleProduct__price-title">Price:</p>
                <p className="singleProduct__price-titledata">
                  US ${data?.price}{" "}
                  <Link className="singleProduct__noInterest">
                    No Interest if paid in full in 6 mo on $99+*
                  </Link>
                </p>
              </div>

              <Link onClick={addToBasket} className="singleProduct__btn" to={"/basket"}>
                Add to cart
              </Link>
            </div>
          </div>
          <div className="singleProduct__smilar">
            <div className="smilar__wrapper"><h3 className="singleProduct__smilar-title">Sponsored items customers also bought</h3><p className="smilar__feed">Feedback on our suggestions</p></div>
            <Slider {...settingsNew}>
              {products.map(({ id, title, images, price, description }) => (
                <Link to={`../../product/${id}`} className="smilar__item" key={id}>
                  <div className="smilar__item-wrapper">
                    <img src={images} alt="" />
                    <h3>{description}</h3>
                    <h4>New</h4>
                    <h5>${price}</h5>
                    <p>{title}</p>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </Container>
      )}
    </>
  );
}

export default SingleProduct;

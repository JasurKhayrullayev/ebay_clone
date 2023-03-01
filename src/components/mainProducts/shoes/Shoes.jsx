import useFetchData from '../../../hooks/useFetchData';
import { Link } from 'react-router-dom';
import {Container} from "../../../utils/Components";
import {AiOutlineArrowRight} from "react-icons/ai"
import "./Shoes.scss"

const Shoes= () => {
  const [data, isLoading] = useFetchData("categories/4/products");
  console.log(data);
  if(isLoading){
    return <p>isloading....</p>  
  }
  return (<section className='shoes__wrapper'>
      <Container>
        <h2 className='shoes__title'>Today's Deals – All With Free Shipping</h2>
        <Link className="shoes__link">See all<AiOutlineArrowRight/></Link>
        <div className="shoes__list-wrapper">
          {!isLoading ?
            data.map(({id, images, price}) => 
              <Link to={`product/${id}`} className='shoes__item' key={id}>
                <div className='shoes__item-wrapper'>
                  <img src={images} alt="" />
                  <h3>${price}</h3>
                  <p>$89.99 · 81% OFF</p>
                </div>
              </Link>  
            ): <p>Loading...</p>
          }
        </div>
      </Container>
    </section>
    
  )
}

export default Shoes
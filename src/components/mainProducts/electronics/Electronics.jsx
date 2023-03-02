import useFetchData from '../../../hooks/useFetchData';
import { Link } from 'react-router-dom';
import {Container} from "../../../utils/Components";
import {AiOutlineArrowRight} from "react-icons/ai"
import "./Electronics.scss"
import ebay from "../../../assets/ebay.png"

const Electronics= () => {
  const [data, isLoading] = useFetchData("categories/2/products");
  if(isLoading){
    return <p>isloading....</p>  
  }
  return (
    <section className='electronics__wrapper'>
      <Container>
        <h2 className='electronics__title'>Extra 20% off for Presidents' Day</h2>
        <Link className="electronics__link">See all<AiOutlineArrowRight/></Link>
        <div className="electronics__list-wrapper">
          {!isLoading ?
            data.map(({id, images, price}) => 
              <Link to={`product/${id}`} className='electronics__item' key={id}>
                <div className='electronics__item-wrapper'>
                  <img src={images} alt="" />
                  <h3>${price}</h3>
                  <p>$74.99 · 20% OFF</p>
                </div>
              </Link>  
            ): <p>Loading...</p>
          }
        </div>
        
      </Container>
      <img className='electronic__reklama' src={ebay} alt="" />
    </section>
  )
}

export default Electronics
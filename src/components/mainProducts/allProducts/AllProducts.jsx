import "./AllProducts.scss"
import useFetchData from '../../../hooks/useFetchData';
import { Link } from 'react-router-dom';
import {Container} from "../../../utils/Components";
import {AiOutlineArrowRight} from "react-icons/ai"

const AllProducts = () => {
  const [data, isLoading] = useFetchData("products");
  if(isLoading){
    return <p>isloading....</p>  
  }
  return (
    <section className='allProduct__wrapper'>
      <Container>
        <h2 className='allProduct__title'>Score these trending kicks</h2>
        <Link className="allProduct__link">See all<AiOutlineArrowRight/></Link>
        <div className="allProduct__list-wrapper">
          {!isLoading ?
            data.map(({id,title, images}) => 
              <Link to={`product/${id}`} className='allProduct__item' key={id}>
                <div className='allProduct__item-wrapper'>
                  <img src={images} alt="" />
                  <h3>{title}</h3>
                </div>
              </Link>  
            ): <p>Loading...</p>
          }
        </div>
      </Container>
    </section>
  )
}

export default AllProducts
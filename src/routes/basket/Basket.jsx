import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { Container } from '../../utils/Components';
import { Link } from 'react-router-dom';
import './Basket.scss';
import {RiDeleteBin7Line} from "react-icons/ri";
import {AiTwotoneDelete} from "react-icons/ai"

const Basket = () => {
  const dispatch = useDispatch();
  const dataInStore = useSelector(data => data);
  const removeFromBasket = (id) => {
    dispatch({id, type: "REMOVE_FROM_BASKET"})
  }
  return (
    <section>
      <Container>
      <div className="basket__products">
        {
            dataInStore.book.bookedProducts.map(product => 
              <article className='basket__product-item' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img width={500} height={500} src={product.images.at(0)} alt="" />
              </Link>
                <div className='basket__wrapper'>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <h2>${product.price}</h2>
                  <div  className='basket__remove'>{dataInStore.book.bookedProducts.find(p => p?.id === product?.id) ? <AiTwotoneDelete onClick={() => removeFromBasket(product.id)} style={{color:"black",
                width:30,
                height:30}}/> : <RiDeleteBin7Line/>}</div>
                </div>
              </article>  
            )
        }
        </div>
        </Container>
    </section>
  )
}


export default Basket
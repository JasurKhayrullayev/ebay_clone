import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from '../../utils/Components';
import { Link } from 'react-router-dom';
import './Basket.scss'

const Basket = () => {
  const dataInStore = useSelector(data => data);
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
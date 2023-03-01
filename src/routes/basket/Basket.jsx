import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from '../../utils/Components';
import { Link } from 'react-router-dom';

const Basket = () => {
  const dataInStore = useSelector(data => data);
  return (
    <section>
      <Container>
      <div className="products">
        {
            dataInStore.book.bookedProducts.map(product => 
              <article className='product-item' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.images.at(0)} alt="" />
              </Link>
                <div>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <strong>${product.price}</strong>
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
import useFetchData from '../../hooks/useFetchData';
import "./CategoryList.scss"
import { Link } from 'react-router-dom';
import {Container} from "../../utils/Components";

const CategoryList = () => {
  const [data, isLoading] = useFetchData("categories");
  if(isLoading){
    return <p>isloading....</p>  
  }

  return (
    <section className='category-list'>
      <Container>
        <h2 className='category-list-title'>Categories</h2>
        <div className="category-list__wrapper">
          {!isLoading ?
            data.map(({id, image, name}) => 
              {
                console.log(id)
                return <Link to={`/category/${id}`} className='category-item' key={id}>
                <div className='category-item__wrapper'>
                  <img src={image} alt="" />
                  <h3>{name}</h3>
                </div>
              </Link>  
              }
            ): <p>Loading...</p>
          }
        </div>
      </Container>
    </section>
  )
}

export default CategoryList
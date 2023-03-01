import React from 'react'
import Hero from '../../components/hero/Hero'
import CategoryList from '../../components/category-list/CategoryList'
import MainProducts from '../../components/mainProducts/MainProducts'


function Home() {
  return (
    <>
      <Hero/>
      <CategoryList/>
      <MainProducts/>
    </>
  )
}

export default Home
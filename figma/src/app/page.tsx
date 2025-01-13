import React from 'react'
import Hero from "./components/Hero";
import Products from "./components/Products";
import TopCategories from "./components/Categories";
import Explore from "./components/Explore";
import Our from "./components/our";




const page = () => {
  return (
    <section>

    <Hero/>
    <Products/>
    <TopCategories/>
    <Explore/>
    <Our/>

    </section>
  )
}

export default page

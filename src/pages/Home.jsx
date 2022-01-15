import React from 'react'
import Anouncement from '../components/Anouncement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
      <Anouncement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  )
}

export default Home
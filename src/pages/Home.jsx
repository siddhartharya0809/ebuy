import React from 'react'
import Anouncement from '../components/Anouncement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Anouncement />
      <Slider />
    </div>
  )
}

export default Home
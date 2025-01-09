import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Services from '../Components/Services'
import ImageSlider from '../Imgslider'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
    
    <Navbar></Navbar>
    <Banner></Banner>
    <Services></Services>
    <ImageSlider></ImageSlider>
   <Footer></Footer>
    
    
    </>
    
  )
}

export default Home
import React from 'react'

// Components
import Navbar from './Home/Navbar'
import Hero from './Home/Hero'
import Category from './Home/Category'
import Feed from './Home/Feed'
import Animated from './Home/Animated'
import Signup from './Home/Signup'
import Footer from './Reusable/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Feed />
      <Animated />
      <Signup />
      <Footer />
    </>
  )
}

export default Home

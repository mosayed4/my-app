import { Fragment } from 'react'
import React  from 'react'
import Nav from '../components/Navbar/Nav'
import Background from '../components/home/Background/Background.jsx'
import Section1 from '../components/home/Section1/Section1.jsx'
import { Footer } from '../components/footer/Footer.jsx'

const Home = () => {
  return (
    <Fragment>
      <Nav/>
    <Background/>
    <Section1/>
    <Footer/>
    </Fragment>
  )
}

export default Home
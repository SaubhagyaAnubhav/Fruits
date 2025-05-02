import React from 'react'
import Navbar from './components/navbar/navbar'
import Fresh from './components/fresh/fresh'
import Menu from './components/navbar/menu'
import Menu1 from './components/menu1/menu1'
import Banner from './components/banner/banner'
import Banner2 from './components/banner/banner2'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
    <main className='overflow-x-hidden'>
      <Banner2 />
      <Navbar/>
      <Fresh/>
      <Menu />
      <Menu1 />
      <Banner />
      <Footer />
    </main>
    </>
  )
}

export default App

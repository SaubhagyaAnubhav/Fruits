import React from 'react'
import Navbar from './components/navbar/navbar'
import Fresh from './components/Fresh/Fresh'
import Menu from './components/Navbar/Menu'
import Menu1 from './components/Menu1/Menu1'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Footer from './components/Footer/Footer'

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

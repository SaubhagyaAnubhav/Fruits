import React from 'react'
import {FaLeaf} from "react-icons/fa"
import {MdMenu, MdOutlineShoppingCart} from "react-icons/md"
import Menu from "./Menu"
import { useState } from 'react'
import { motion } from "framer-motion/dist/framer-motion"

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Products",
        link: "#",
    },
    {
        id: 3,
        title: "About",
        link: "#",
    },
    {
        id: 4,
        title: "Shop",
        link: "#",
    },
    {
        id: 5,
        title: "Contacts",
        link: "#",
    },
]

const Navbar = () => {
    const[open, setOpen] = useState(false)
    return <>
    <nav className="px-4 py-2 shadow">
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:0.5}} className="container flex justify-between items-center py-4 md:pt-4">
        {/* Logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
            <p className='text-green-800'>Farm</p>
            <p className='text-yellow-600'>Gourmet</p>
            <FaLeaf  className="text-lime-600"/>
        </div>
        {/* Menu section */}
        <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-green-900'>
                {NavbarMenu.map((menu) => (
                    <li key = {menu.id}>
                        <a href= {menu.link}
                        className='inline-block py-1 px-3 hover:text-lime-600 hover:shadow-[0_3px_0_-1px_#f59e0b] font-semibold'
                        >{menu.title}</a>
                    </li>
                ))}
                <button className='text-2xl hover:bg-lime-100 hover:text-lime-700 rounded-full p-2 duration-200'>
                    <MdOutlineShoppingCart/>
                </button>
            </ul>
        </div>
        {/* Mobile HemBurger Menu section */}
        <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl'/>
        </div>
    </motion.div>
  </nav>
  {/* Mobile Menu section */}
   <Menu open={open}/>
   </>
}

export default Navbar

import React from 'react'
import Fruit1 from "../../assets/fruit/orange.png"
import Fruit2 from "../../assets/fruit/green-apple.png"
import Fruit3 from "../../assets/fruit/pomegranate .png"
import Fruit4 from "../../assets/fruit/raspberry.png"
import { motion, AnimatePresence } from "framer-motion";
import { FadeLeft } from "../../utility/animation"




const MenusData = [
    {
        id: 1,
        title:"Oranges",
        link: "/",
        price:"$2.00",
        img:Fruit1,
        delay:0.3
        
    },
    {
        id: 2,
        title:"Green Apples",
        link: "/",
        price:"$1.99",
        img:Fruit2,
        delay:0.6
    },
    {
        id: 3,
        title:"Pomegranates",
        link: "/",
        price:"$4.0",
        img:Fruit3,
        delay:0.9
    },
    {
        id: 4,
        title:"Raspberry",
        link: "/",
        price:"$5.50",
        img:Fruit4,
        delay:1.2
    },
];




const menu1 = () => {
  return <>
    <section>
        <div className='container pt-12 pb-20'>
            <motion.h1 initial={{opacity: 0,x: -200 }} whileInView={{opacity: 1, x:0}} transition={{ duration: 1, delay: 0.3}} className='text-2xl font-bold text-left pb-10 uppercase' >Our Menu</motion.h1>
            <motion.div variants={FadeLeft(menu1.delay)} initial= "hidden" whileInView={"visible"} whileHover={{ scale: 1.1 }} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {MenusData.map((menu) => (
                    <div className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3'>
                        <img src={menu.img} className='w-[60px] mb-4 scale-110 transform-translate-y-6'/>
                        <div>
                            <h1 className='text-lg font-semibold'>{menu.title}</h1>
                            <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
  </>
}

export default menu1

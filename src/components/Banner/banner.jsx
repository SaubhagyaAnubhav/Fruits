import React from 'react'
import BannerImg from "../../assets/fruit.png"
import { motion} from "framer-motion";
import { FadeUp } from "../../utility/animation"

const Banner = () => {
  return (
    <section className='bg-gradient-to-b from-sm/20 to-sm'> 
   <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
    {/* Banner Image */}
    <div className='flex justify-center items-center'>
        <motion.img initial={{ opacity: 0, scale: 0.5}} whileInView={{ opacity: 1, scale: 1}} transition={{ type: "spring", stiffness: 100, delay: 0.2}} viewport={{ once: true }} 
        src={BannerImg} className='w-[300px] md:max-w-[400px] h-full object-cover rounded' />
    </div>
     {/* Brand Info */}
     <div className='flex flex-col justify-center'>
        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1 variants={FadeUp(0.5)} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-3xl lg:text-6xl font-bold uppercase'>
                {" "}
                Brand Info
            </motion.h1>
            <motion.p variants={FadeUp(0.7)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora, magni ab voluptas magnam molestiae adipisci. Culpa, ex quas. Officiis sed dolorem quaerat voluptatem earum tempore quasi recusandae, iure qui!
            </motion.p>
            <motion.p  variants={FadeUp(0.9)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat officia explicabo neque impedit perferendis sed?
            </motion.p>
            <motion.div variants={FadeUp(1.1)} initial="hidden" animate="visible" className='flex justify-center md:justify-start'>
                <button className='bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029] hover:!scale-110 duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'>
                     Learn More
                </button>
            </motion.div>
        </div>
     </div>
   </div>
   </section>
  )
}

export default Banner

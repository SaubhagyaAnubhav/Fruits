import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { IoBagHandleOutline } from "react-icons/io5";
import FreshImg from "../../assets/bowl.png";
import { FadeRight } from "../../utility/animation";

const Fresh = ({ 
  title = "Nutritious Fresh Fruits",
  subtitle = "Get started on your fresh, nourishing lifestyle today!",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit praesentium totam molestias. Exercitationem, iure praesentium. Repellendus",
  buttonText = "Order Now",
  onOrderClick = () => {},
  imageSrc = FreshImg,
  imageAlt = "Fresh fruits bowl"
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    console.log('Image loaded successfully');
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    console.error('Error loading image:', e);
    setImageError(true);
  };

  console.log('Image source:', imageSrc);

  return (
    <section aria-label="Fresh fruits section" role="region">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] w-full">
        {/* Brand Info */}
        <div className='flex flex-col justify-center items-center py-14 md:py-0 relative z-10'>
          <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
            <motion.h1 
              variants={FadeRight(0.6)} 
              initial="hidden" 
              animate="visible" 
              className='text-5xl lg:text-6xl font-bold leading-[1.2] xl:leading-[1.2] font-averia'
            >
              Nutritious
              <br className='leading-none' />
              <span className='text-yellow-600'>Fresh Fruits</span>
            </motion.h1>
            
            <motion.p 
              variants={FadeRight(0.9)} 
              initial="hidden" 
              animate="visible" 
              className='text-2xl tracking-wide'
            >
              {subtitle}
            </motion.p>
            
            <motion.p 
              variants={FadeRight(1.2)} 
              initial="hidden" 
              animate="visible" 
              className='text-gray-700'
            >
              {description}
            </motion.p>
            
            <motion.div 
              variants={FadeRight(1.5)} 
              initial="hidden" 
              animate="visible" 
              className='flex justify-center md:justify-start'
            >
              <button 
                onClick={onOrderClick}
                className='bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029] hover:!scale-110 duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                aria-label="Order fresh fruits"
              >
                <span aria-hidden="true">
                  <IoBagHandleOutline className="w-5 h-5" />
                </span>
                {buttonText}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Fresh Images */}
        <div className='flex flex-col justify-center items-center'>
          <div className="relative">
            {!imageLoaded && !imageError && (
              <div className="w-[350px] md:w-[550px] h-[350px] md:h-[550px] bg-gray-200 animate-pulse rounded-lg" />
            )}
            {imageError ? (
              <div className="w-[350px] md:w-[550px] h-[350px] md:h-[550px] bg-gray-200 flex items-center justify-center rounded-lg">
                <p className="text-gray-500">Image not available</p>
              </div>
            ) : (
              <motion.img 
                initial={{ opacity: 0, x: 200, rotate: 75 }}
                animate={{ opacity: imageLoaded ? 1 : 0, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                src={imageSrc}
                alt={imageAlt}
                className={`w-[350px] md:w-[550px] drop-shadow ${!imageLoaded ? 'hidden' : ''}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="eager"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Fresh.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  onOrderClick: PropTypes.func,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default Fresh;

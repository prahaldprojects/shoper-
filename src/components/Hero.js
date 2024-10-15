import React from 'react';
import WomanImg from '../img/woman_hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container flex items-center justify-around h-full mx-auto'>
        
        {/* Text Section */}
        <div className='flex flex-col justify-center'>
          {/* New Trend Label */}
          <div className='flex items-center mb-6 font-semibold uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
            <span>New trend</span>
          </div>
          {/* Heading */}
          <h1 className='text-[30px] md:text-[70px] leading-[1.1] font-light mb-4'>
            BEST STYLISH CLOTHES 
            <br /> 
            <span className='font-semibold'>Womens & Mens</span>
          </h1>
          {/* Optional: Add a button/link */}
          <Link  to='/Header' className="px-2 py-1 font-semibold tracking-wide text-white uppercase bg-red-500">
            Shop Now
          </Link>
        </div>

        {/* Image Section */}
        <div className='lg:block'>
          <img src={WomanImg} alt='Stylish Woman' />
        </div>

      </div>
    </section>
  );
}

export default Hero;
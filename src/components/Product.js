import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';

import {CartContext} from '../contexts/CartContext'

const Product = ({ product }) => {

const {addToCart} = useContext((CartContext))

  
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        {/* Image container */}
        <div className='flex items-center justify-center w-full h-full'>
          <div className='w-[100px] mx-auto flex justify-center items-center'>
            <img 
              className='max-h-[160px] transition-transform duration-300 group-hover:scale-110' 
              src={image || 'fallback-image-url.jpg'}  // Use a fallback image URL here
              alt={title}  // Better accessibility
            />
          </div>

          {/* Buttons */}
          <div className='absolute flex flex-col items-center justify-center p-0 transition-all duration-300 opacity-0 -right-11 group-hover:right-4 top-5 gap-y-2 group-hover:opacity-100'>
            <button onClick={() => addToCart(product, id)}>
              <div className='flex items-center justify-center w-12 h-12 text-white transition-transform bg-red-500 hover:scale-110'>
                <BsPlus className='text-3xl' />
              </div>
            </button>
            <Link to={`/product/${id}`} className='flex items-center justify-center w-12 h-12 transition-transform bg-white text-primary drop-shadow-xl hover:scale-110'>
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>

      <div className='mb-1 text-sm capitalize text-grey-500'>{category}</div>
      <Link to={`/product/${id}`}>
        <h2 className='mb-1 font-semibold'>{title}</h2>
      </Link>
      <h2 className='font-semibold'>${price.toFixed(2)}</h2> {/* Format price to two decimal places */}
    </div>
  );
};

export default Product;
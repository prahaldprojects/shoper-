import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import {CartContext} from '../contexts/CartContext'

const CartItem = ({ item }) => {

  const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext)
  const { id, title, image, price, amount } = item;

  return (
    <div className='flex py-4 border-b'>
      {/* Image Section */}
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt={title} />
        </Link>

        {/* Details Section */}
        <div className='flex flex-col w-full'>
          {/* Title and Remove Icon */}
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`} className='text-sm font-medium uppercase max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            {/* Remove Icon */}
            <div onClick={()=> removeFromCart(id)} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 transition hover:text-red-500' />
            </div>
          </div>

          {/* Quantity and Price Details */}
          <div className='flex items-center justify-between'>
            {/* Quantity Controls */}
            <div className='flex items-center border w-[100px] h-full'>
              <div onClick={()=> decreaseAmount(id)} className='flex items-center justify-center flex-1 cursor-pointer'>
                <IoMdRemove />
              </div>
              <div className='flex items-center justify-center px-2'>
                {amount}
              </div>
              <div onClick={()=>increaseAmount(id)} className='flex items-center justify-center flex-1 cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>

            {/* Price Details */}
            <div className='text-sm'>
              <div className='text-primary'>$ ITEM Price {price}</div>
              <div className='text-gray-500'>{`$ TOTAL=[ ${parseFloat(price*amount).toFixed(2)} ]`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import CartItem from '../components/CartItem';
import { IoMdArrowForward } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';
import { FiTrash2 } from 'react-icons/fi';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div
      className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 w-full h-full bg-white shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-between py-6 border-b">
        <div className="text-sm font-semibold uppercase">
          Shopping Bag ({cart.length})
        </div>
        <div
          onClick={handleClose}
          className="flex items-center justify-center w-8 h-8 cursor-pointer"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* Cart Items Section with scroll */}
      <div className="h-[80vh] overflow-y-auto">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      {/* Sidebar Footer: Total and Clear Cart */}
      <div className="flex flex-col py-3 mt-3 bg-pink-200 gap-y-3">
        <div className="flex items-center justify-between w-full">
          <div className="font-bold uppercase">
            <span className="mr-2">Total:</span>${parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="flex items-center justify-center w-12 h-12 py-1 text-xl text-white bg-red-500 cursor-pointer"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const { products } = useContext(ProductContext); // Get the list of products from context
  const { addToCart } = useContext(CartContext); // Get the addToCart function from cart context

  // Find the specific product based on the ID from the URL
  const product = products.find((item) => item.id === parseInt(id));

  // Handle case when product is not found (e.g., data is still loading)
  if (!product) {
    return <section className="flex items-center justify-center h-screen">Loading...</section>;
  }

  // Destructure product details
  const { title, price, description, image } = product;

  return (
    <section className="flex items-center h-screen pt-24 pb-12 lg:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Product Image */}
          <div className="flex items-center justify-center flex-1 mb-8 lg:mb-0">
            <img className="max-w-[250px] lg:max-w-[400px] w-full object-contain" src={image} alt={title} />
          </div>
          
          {/* Product Details */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h1 className="text-[28px] lg:text-[32px] font-semibold mb-2">{title}</h1>
            <p className="text-xl font-medium text-red-500">${price}</p>
            <p className="mb-8">{description}</p>
            
            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product, product.id)}
              className="px-6 py-3 mt-6 text-white transition-colors duration-300 bg-[black] rounded-md hover:bg-[#e69797]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
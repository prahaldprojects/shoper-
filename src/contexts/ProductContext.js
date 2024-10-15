import React, { createContext, useState, useEffect } from 'react';

// 1. Create the context
export const ProductContext = createContext();

// 2. Define the ProductProvider component
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

useEffect(() =>{
    const fetchProducts = async () =>{
        const response =await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }
    fetchProducts()
},[])
  return (
    <ProductContext.Provider value={{products}} >
      {children}
    </ProductContext.Provider>
  );
};

// 4. Export the ProductProvider to be used in other components
export default ProductProvider;

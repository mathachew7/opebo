import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../core/components/Navbar";
import Footer from "../modules/components/Footer";
import AppFeature from "../modules/components/AppFeature";
import NewFeature from "../modules/components/NewFeature";

import { getCart } from "../core/cartHelpers";
import CartCard from "../core/components/Cart/CartCard";
import CartCard2 from "../core/components/Cart/CartCard2";

import CheckOut from "../core/components/Cart/CheckOut";

const cartImage = require("../assets/images/cart.png");

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const showItems = (items) => {
    return (
      <div className='m-1 w-full mt-0 md:m-2 px-2'>
        {items.map((subService, i) => (
          <CartCard2
            key={i}
            subService={subService}
            cartUpdate={true}
            showAddToCartButton={false}
            showRemoveSubButton={true}
          />
        ))}
        <hr className='text-gray-300' />
      </div>
    );
  };

  const noItemsMessage = () => (
    <>
      <div className='mt-10 p-5 flex flex-col justify-center items-center'>
        <img className='w-1/2 md:w-1/6' src={cartImage}></img>
        {/* <i className='fas fa-shopping-cart text-red-400 text-6xl text-center' /> */}
        <h2 className='mt-4 text-gray-700 text-3xl md:text-4xl font-semibold text-center'>
          Your cart is empty!
          <br />
          <span className='text-gray-700 text-sm text-center'>
            Add something to your cart to checkout.
          </span>
          <br />
        </h2>
        <Link
          to='/'
          className='bg-gray-800 px-3 py-1 text-white hover:text-black hover:bg-gray-300 hover:shadow-md font-semibold rounded-lg align-middle'
        >
          Continue shopping
        </Link>
      </div>
    </>
  );

  return (
    <>
      {items.length > 0 ? (
        <>
          <Navbar />
          <div className='flex flex-col md:flex-row antialiased'>
            <div className='md:px-10 md:w-2/3 md:max-h-screen overflow-hidden md:overflow-y-scroll'>
              <div className='py-2 pt-5 px-5'>
                <h1 className='text-md text-gray-600 font-semibold'>
                  Opebo Cart
                </h1>
                <span className='text-xs text-gray-500 font-semibold'>
                  You have {items.length} items in your cart.
                </span>
              </div>
              <div className='flex flex-col items-center md:items-start '>
                {showItems(items)}
              </div>
            </div>
            <CheckOut subServices={items} />
          </div>
          <AppFeature />
          <NewFeature />
          <Footer />
        </>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          {noItemsMessage()}
        </div>
      )}
    </>
  );
};

export default Cart;

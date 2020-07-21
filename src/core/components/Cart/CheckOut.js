import React, { useState } from "react";
import { isAuthenticated } from "../../../auth";
import { Link } from "react-router-dom";

const Checkout = ({ subServices }) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
  });
  const { loading, success, error } = data;

  let gst = 18;

  const getTotal = () => {
    return subServices.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const getWithTax = (currentValue, gst) => {
    return (gst * currentValue) / 100 + currentValue;
  };

  const showCheckout = () => {
    return isAuthenticated() ? (
      <Link
        to='/checkout-address'
        className='mt-5 w-full flex flex-col justify-center items-center nowrap'
      >
        <button
          onClick={buy}
          className='w-full py-4 bg-black hover:bg-gray-900 text-white rounded-lg text-md font-bold uppercase'
        >
          Continue
        </button>
      </Link>
    ) : (
      <Link
        to='/signin'
        className='mt-5 w-full flex flex-col justify-center items-center nowrap'
      >
        <button className='w-full py-4 bg-black hover:bg-gray-900 text-white rounded-lg text-md font-bold uppercase'>
          Sign in to checkout
        </button>
      </Link>
    );
  };

  const buy = () => {
    setData({ ...data, loading: true });
    // send the nonce to your server
    // nonce = data.instance.requestPaymentMethod()
    setData({ ...data, success: true, error: false });
  };

  const showError = (error) => (
    <div
      className='flex alert alert-danger justify-center items-center bg-red-500 text-white py-1'
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = (success) => (
    <div
      className='flex alert alert-danger justify-center items-center bg-green-500 text-white py-1'
      style={{ display: success ? "" : "none" }}
    >
      Thanks! Your payment was successful!
    </div>
  );

  const showLoading = (loading) =>
    loading && (
      <div className='flex alert alert-info justify-center items-center bg-orange-500 text-white py-4'>
        <h2 className='text-white'>Loading...</h2>
      </div>
    );

  return (
    <div className='md:w-1/3 p-5 md:p-10 bg-white md:h-screen flex flex-col nowrap justify-start items-center'>
      <div className='border border-gray-400 bg-red-500 rounded p-5 py-2 w-full'>
        <h1 className='text-lg md:text-xl text-white font-semibold uppercase'>
          Your cart summary
        </h1>
      </div>
      <div className='mt-2 border border-gray-400 p-5 w-full rounded'>
        <div className='flex flex-row justify-between items-center md:text-lg'>
          <h1 className='text-md text-gray-500 font-medium'>
            {subServices.length} x Items
          </h1>
          <h1 className='text-md font-medium text-gray-500'>
            &#8377; {getTotal()}.00
          </h1>
        </div>
        <div className='pb-10 flex flex-row justify-between items-center md:text-lg'>
          <h1 className='text-md text-gray-500 font-medium'>GST ({gst}%)</h1>
          <h1 className='text-md font-medium text-gray-500'>
            &#8377; {(gst * getTotal()) / 100}.00
          </h1>
        </div>
        <hr className='text-gray-400' />
        <div className='pt-5 pb-2 flex flex-row justify-between items-center md:text-xl'>
          <h1 className='text-lg text-gray-800 font-semibold'>Total</h1>
          <h1 className='text-lg font-semibold text-gray-800'>
            &#8377; {getWithTax(getTotal(), gst)}.00
          </h1>
        </div>
      </div>
      <div className='mt-5 w-full flex flex-col justify-center items-center nowrap'>
        {showCheckout()}
        <p className='p-4 text-gray-500 text-xs md:text-md font-semibold'>
          Other charges will be calculated at checkout
        </p>
      </div>
      {showLoading(loading)}
      {showSuccess(success)}
      {showError(error)}
    </div>
  );
};

export default Checkout;

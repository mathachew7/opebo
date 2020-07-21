import React from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Footer from "../modules/components/Footer";
import Navbar from "../core/components/Navbar";
import Spinner from "../core/components/Spinner";

const Order = ({ history }) => {
  const orderCard = (orderData) => {
    return (
      <div>
        <div className='text-xs text-gray-900 flex flex-row justify-start'>
          <p>Ordered on 23 June 2020</p>
          <p className='text-gray-300 mx-2'>|</p>
          <p>Order# 456681331649336</p>
        </div>
        <div className='my-3 p-3 text-xs border border-gray-300 flex flex-col md:flex-row justify-between items-start rounded'>
          <div className='flex flex-col justify-start text-left'>
            <p className='font-semibold text-gray-900'>Order Address</p>
            <p>Johnbas</p>
            <p>Uripok Tourangbam Leikai</p>
            <p>Near IRYCImphal, Manipur 795001</p>
            <p>India</p>
          </div>
          <div className='flex flex-col justify-start text-left'>
            <p className='font-semibold text-gray-900'>Payment</p>
            <p>Done</p>
          </div>
          <div className='xs:w-full md:w-auto flex flex-col justify-start text-left'>
            <p className='font-semibold text-gray-900'>Order Summary</p>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col mr-16 text-left'>
                <p>Subtotal: </p>
                <p>Taxes: </p>
                <p className='font-semibold text-gray-900'>Grand Total: </p>
              </div>
              <div className='flex flex-col justify-end items-end text-right'>
                <p>&#8377; 590.00</p>
                <p>&#8377; 0.00</p>
                <p className='font-semibold text-gray-900'>&#8377; 590.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className='my-3 p-3 text-xs border border-gray-300 flex flex-col md:flex-row justify-between items-start rounded'>
          Order data
        </div>
      </div>
    );
  };

  const orderInfo = (orderData) => {
    return (
      <>
        {Navbar(history)}
        <div className='justify-center items-center md:px-40 mb-10 '>
          <div className='bg-white flex flex-col rounded overflow-hidden px-3 -pt-16'>
            <h1 className='text-2xl text-left font-semibold'>Order Details</h1>
            {orderCard()}
            {/* {fetched ? orderCard(orderData) : <Spinner />} */}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {orderInfo()}

      <Footer />
    </>
  );
};

export default withRouter(Order);

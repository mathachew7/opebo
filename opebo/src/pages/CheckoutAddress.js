import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../core/components/Navbar";
import Footer from "../modules/components/Footer";
import AppFeature from "../modules/components/AppFeature";
import NewFeature from "../modules/components/NewFeature";

import { getCart } from "../core/cartHelpers";
import { getUserAddress } from "../user/apiUser";
import { isAuthenticated } from "../auth";
import CheckOutAddr from "../core/components/Cart/CheckoutAddr";
import AddAddress from "../core/components/Address/AddAddress";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";

const cartImage = require("../assets/images/cart.png");

const Address = [
  {
    id: 1001,
    name: "Johnbas",
    phone: "9953366748",
    pin: "795001",
    address: "Keishmpat Leimajam Leikai, near IRYC",
    area: "Imphal",
    type: "Home",
  },
  {
    id: 1002,
    name: "John",
    phone: "9953366748",
    pin: "201310",
    address: "1402, Tower-1, Whitehouse Apartments",
    locality: "Greater Noida",
    type: "Work",
  },
  {
    id: 1003,
    name: "Yaiphabi Chanam",
    phone: "8131804259",
    pin: "795001",
    address: "Uripok Achom Leikai, opp. Royal Bank of Manipur",
    locality: "Imphal",
    type: "Home",
  },
];

const CheckoutAddress = () => {
  const [items, setItems] = useState([]);
  //const [Address, setAddress] = useState([]);
  const [selected, setSelected] = useState({});
  const [finalAddress, setFinalAddress] = useState({});
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;
  // const init = (userId, token) => {
  //   getUserAddress(userId, token).then((data) => {
  //     setAddress(data.address);
  //   });
  // };
  useEffect(() => {
    //init(_id, token);
    setItems(getCart());
  }, [_id, token]);

  const selectAddress = (key, address) => {
    setSelected(key);
    setFinalAddress(address);
  };
  const notSelectedAddress = (i, address) => {
    return (
      <button
        className='mb-3 w-full flex flex-col border border-gray-200 hover:border-red-400 rounded p-4 focus:outline-none'
        onClick={() => selectAddress(i, address)}
        key={i}
      >
        <div className='flex flex-row'>
          <div className='pr-3'>
            <FaRegCircle className='text-red-500 h-5 w-5' />
          </div>
          <div className='flex flex-col justify-start text-left'>
            <h1 className='font-semibold text-base text-black'>
              {address.name}
              <span className='ml-3 px-2 rounded-full text-xs text-green-600 border-2 border-green-600 uppercase font-medium'>
                {address.type}
              </span>
            </h1>
            <p className='text-xs text-gray-600'>
              {address.address} - {address.pin}
            </p>
            <p className='text-sm'>
              Mobile: <strong>{address.phone}</strong>
            </p>
          </div>
        </div>
      </button>
    );
  };

  const selectedAddress = (i, address) => {
    return (
      <button
        className='mb-3 w-full flex flex-col border-2 border-red-400 rounded p-4 focus:outline-none'
        onClick={() => selectAddress(i, address)}
        key={i}
      >
        <div className='flex flex-row'>
          <div className='pr-3'>
            <FaCheckCircle className='text-red-500 h-5 w-5' />
          </div>
          <div className='flex flex-col justify-start text-left'>
            <h1 className='font-semibold text-base text-black'>
              {address.name}
              <span className='ml-3 px-2 rounded-full text-xs text-green-600 border-2 border-green-600 uppercase font-medium'>
                {address.type}
              </span>
            </h1>
            <p className='text-xs text-gray-600'>
              {address.address} - {address.pin}
            </p>
            <p className='text-sm'>
              Mobile: <strong>{address.phone}</strong>
            </p>
          </div>
        </div>
      </button>
    );
  };

  const showItems = (addr) => {
    return (
      <div className='m-1 w-full flex flex-col justify-center mt-0 md:m-2 px-5'>
        {addr.map((address, i) =>
          selected !== i
            ? notSelectedAddress(i, address)
            : selectedAddress(i, address)
        )}
        <hr className='text-gray-300' />
      </div>
    );
  };

  const noItemsMessage = () => (
    <div className='mt-10 p-5 flex flex-col justify-center items-center'>
      <img className='w-1/2 md:w-1/6' src={cartImage} alt='cart'></img>
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
  );

  return (
    <>
      {Address.length > 0 ? (
        <>
          <Navbar />
          <div className='flex flex-col md:flex-row antialiased'>
            <div className='md:px-10 md:w-2/3 md:border-r border-gray-400'>
              <div className='py-2 pt-5 px-5 flex flex-row justify-between items-center'>
                <h1 className='text-md text-gray-600 font-semibold'>
                  Select your Address
                </h1>
                {/* <button className='px-3 py-1 text-xs font-semibold uppercase border-2 border-gray-900 rounded text-gray-900 hover:bg-gray-900 hover:text-gray-100'>
                  Add new address
                </button> */}
                {AddAddress()}
              </div>
              <div className='flex flex-col items-center md:items-start '>
                {showItems(Address)}
              </div>
            </div>
            <CheckOutAddr subServices={items} finalAddress={finalAddress} />
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

export default CheckoutAddress;

import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link, withRouter } from "react-router-dom";
import { getUserAddress } from "../user/apiUser";
//import moment from "moment";
import Footer from "../modules/components/Footer";
import UserNavbar from "./UserNavbar";
import Spinner from "../core/components/Spinner";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";

const CartCard2 = React.lazy(() => import("../core/components/Cart/CartCard2"));

const UserAddresses = ({ history }) => {
  const [addresses, setAddresses] = useState([]);
  const [selected, setSelected] = useState({});
  const [fetched, setFetched] = useState(false);
  const [cardFetched, setCardFetched] = useState(false);

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;

  const init = (userId, token) => {
    setFetched(false);
    getUserAddress(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setAddresses(data.address);

        setFetched(true);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, [_id, token]);

  const selectAddress = (key, address) => {
    setSelected(key);
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
              {address.full_name}
              <span className='ml-3 px-2 rounded-full text-xs text-green-600 border-2 border-green-600 uppercase font-medium'>
                {address.type}
              </span>
            </h1>
            <p className='text-xs text-gray-600'>
              {address.street}
              <br />
              {address.city}
              <br />
              {address.pin}
            </p>
            <p className='text-sm'>
              Mobile: <strong>{address.mobile}</strong>
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
              {address.full_name}
              <span className='ml-3 px-2 rounded-full text-xs text-green-600 border-2 border-green-600 uppercase font-medium'>
                {address.type}
              </span>
            </h1>
            <p className='text-xs text-gray-600'>
              {address.street}
              <br />
              {address.city}
              <br />
              {address.pin}
            </p>
            <p className='text-sm'>
              Mobile: <strong>{address.mobile}</strong>
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

  const breadLinks = () => {
    return (
      <div className='flex flex-row mb-2'>
        <Link className='text-xs text-gray-500 hover:text-gray-800'>
          Your account >{" "}
        </Link>
        <Link className='ml-2 text-xs text-orange-600 hover:text-orange-500'>
          Your address
        </Link>
      </div>
    );
  };

  const addressInfo = (add) => {
    return (
      <>
        {UserNavbar(history)}
        <div className='justify-center items-center md:px-40 mb-10'>
          <div className='bg-white flex flex-col rounded overflow-hidden px-3 -pt-16'>
            {breadLinks()}

            <h1 className='text-2xl text-left font-semibold'>Your Addresses</h1>

            {fetched ? (
              add.length >= 0 ? (
                <div className='flex flex-col items-center md:items-start '>
                  {showItems(add)}
                </div>
              ) : (
                // <div className='flex flex-col justify-center items-center'>
                //   {noItemsMessage()}
                // </div>
                <p>No address found</p>
              )
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {addressInfo(addresses)}

      <Footer />
    </>
  );
};

export default withRouter(UserAddresses);

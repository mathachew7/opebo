import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link, withRouter, Redirect } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";
import moment from "moment";
import Footer from "../modules/components/Footer";
import UserNavbar from "./UserNavbar";
import Spinner from "../core/components/Spinner";
import { getSubServiceByServiceId, getServices } from "../core/apiCore";

const CartCard2 = React.lazy(() => import("../core/components/Cart/CartCard2"));

const UserOrder = ({ history }) => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [cardFetched, setCardFetched] = useState(false);
  const [subServices, setSubServices] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;

  // const init = (userId, token) => {
  //   setLoading(true);
  //   setFetched(false);
  //   getPurchaseHistory(userId, token).then((data) => {
  //     if (data.error) {
  //       console.log(data.error);
  //       setToggleOrder(false);
  //     } else {
  //       setBookingHistory(data);
  //       setFetched(true);
  //       setLoading(false);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   init(_id, token);
  // }, [_id, token]);

  const breadLinks = () => {
    return (
      <div className='flex flex-row mb-2'>
        <Link
          className='text-xs text-gray-500 hover:text-gray-800'
          to={`/user/dashboard/${isAuthenticated().user._id}`}
        >
          Your account >{" "}
        </Link>
        <Link
          className='ml-2 text-xs text-orange-600 hover:text-orange-500'
          to={`/user/bookings/${isAuthenticated().user._id}`}
        >
          Your Bookings >{" "}
        </Link>
        <Link
          className='ml-2 text-xs text-orange-600 hover:text-orange-500'
          to={`/user/bookings/${isAuthenticated().user._id}`}
        >
          Order Details >{" "}
        </Link>
      </div>
    );
  };

  let Id;

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
        {UserNavbar(history)}
        <div className='justify-center items-center md:px-40 mb-10 '>
          <div className='bg-white flex flex-col rounded overflow-hidden px-3 -pt-16'>
            {breadLinks()}

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

export default withRouter(UserOrder);

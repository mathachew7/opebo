import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "./adminAuth";
import { Link } from "react-router-dom";
import { getUsersOrders } from "./apiAdmin";
import AdminNavbar from "./AdminNavbar";

import Spinner from "../core/components/Spinner";

const ViewOrders = ({ history }) => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [fetched, setFetched] = useState(false);

  const { admin, token } = isAuthenticated();

  const init = (adminId, token) => {
    setFetched(false);
    getUsersOrders(adminId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBookingHistory(data);
        setFetched(true);
      }
    });
  };

  useEffect(() => {
    init(admin._id, token);
  }, [admin._id, token]);
  console.log(bookingHistory);
  const breadLinks = () => {
    return (
      <div className='flex flex-row mb-2'>
        <Link className='text-xs text-gray-500 hover:text-gray-800'>
          Your account >{" "}
        </Link>
        <Link className='ml-2 text-xs text-orange-600 hover:text-orange-500'>
          Your bookings
        </Link>
      </div>
    );
  };

  const bookingsCard = (bookingsData) =>
    bookingsData.map((booking, i) => (
      <div className='mt-2 w-full border border-gray-300 rounded overflow-hidden hover:border-orange-500'>
        <div
          className='bg-gray-300 font-semibold border-b border-gray-400
         flex flex-row justify-between uppercase items-baseline px-3 pt-2'
        >
          <p className='text-xs'>BOOKING ID #{booking._id}</p>
          <p className='text-xs'>TOTAL : &#8377; {booking.amount}</p>
        </div>
        <div className='px-3 py-2'>
          {booking.orders.map((order, index) => (
            <div>{order.name}</div>
          ))}

          {/* <div>
                Address:
                <p>{booking.address.address}</p>
                <p>{booking.address.pin}</p>
              </div> */}
        </div>
      </div>
    ));
  const bookingsInfo = (bookings) => {
    return (
      <>
        {AdminNavbar(history)}
        <div className='justify-center items-center md:px-40 mb-10'>
          <div className='bg-white flex flex-col rounded overflow-hidden px-3 -pt-16'>
            {breadLinks()}

            <h1 className='text-2xl text-left font-semibold'>Your Bookings</h1>
            {fetched ? bookingsCard(bookings) : <Spinner />}
          </div>
        </div>
      </>
    );
  };

  return <>{bookingsInfo(bookingHistory)}</>;
};

export default ViewOrders;

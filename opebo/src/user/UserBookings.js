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

const UserBookings = ({ history }) => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [cardFetched, setCardFetched] = useState(false);
  const [subServices, setSubServices] = useState([]);
  const [services, setservices] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;

  const init = (userId, token) => {
    setLoading(true);
    setFetched(false);
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBookingHistory(data);
        setFetched(true);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, [_id, token]);

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
      </div>
    );
  };

  let Id;

  const bookingsCard = (bookingsData) =>
    bookingsData.map((booking, i) => (
      <div
        className='my-2 w-full border border-gray-300 rounded overflow-hidden hover:border-orange-500'
        key={i}
      >
        <div
          className='bg-gray-100 font-semibold border-b border-gray-400
         flex flex-row justify-between uppercase items-baseline px-3 pt-2'
        >
          <p className='text-xsm font-normal'>
            <span className='text-gray-600'>#{booking._id}</span>
          </p>

          <p className='text-xs font-normal'>
            TOTAL : &#8377;{" "}
            <span className='font-semibold'>{booking.amount}</span>
          </p>
          {/* <p className='text-xs font-normal'>
            Booking for:{" "}
            <span className='font-semibold'>{booking.user.name}</span>
          </p> */}
        </div>
        <div className='px-5 py-3'>
          {booking.orders.map((order, index) => (
            <>
              <div key={index} className='flex flex-row justify-between'>
                <div>
                  <p className='text-base font-semibold text-gray-800'>
                    {order.name}
                  </p>
                  <p className='-mt-3 text-xs text-orange-600'>
                    {order.service}
                  </p>
                  <p className='text-xs font-normal'>
                    <span className='font-semibold'>
                      {moment(order.createdAt).format("llll")}
                    </span>
                  </p>
                </div>
                <p className='text-base font-semibold'>Price: {order.price}</p>
              </div>
              <div className=' py-2 flex flex-row justify-end'>
                <Link
                  className='bg-orange-500 font-semibold hover:bg-orange-600 border border-gray-200 text-xsm px-5 py-2 text-white rounded'
                  key={index}
                  to={`/user/bookings/${isAuthenticated().user._id}/${
                    order._id
                  }`}
                >
                  Order details
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    ));

  const bookingsInfo = (bookings) => {
    return (
      <>
        {UserNavbar(history)}
        <div className='justify-center items-center md:px-40 mb-10 '>
          <div className='bg-white flex flex-col rounded overflow-hidden px-3 -pt-16'>
            {breadLinks()}

            <h1 className='text-2xl text-left font-semibold'>Your Bookings</h1>
            {fetched ? bookingsCard(bookings) : <Spinner />}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {bookingsInfo(bookingHistory)}

      <Footer />
    </>
  );
};

export default withRouter(UserBookings);

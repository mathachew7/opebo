import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link, withRouter } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";
//import moment from "moment";
import Footer from "../modules/components/Footer";
import UserNavbar from "./UserNavbar";
import Spinner from "../core/components/Spinner";
const CartCard2 = React.lazy(() => import("../core/components/Cart/CartCard2"));

const UserBookings = ({ history }) => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [cardFetched, setCardFetched] = useState(false);

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;

  const init = (userId, token) => {
    setFetched(false);
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBookingHistory(data);
        setFetched(true);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, [_id, token]);

  const breadLinks = () => {
    return (
      <div className='flex flex-row mb-2'>
        <Link className='text-xs text-gray-500 hover:text-gray-800' to='/'>
          Your account >{" "}
        </Link>
        <Link
          className='ml-2 text-xs text-orange-600 hover:text-orange-500'
          to='/user/bookings'
        >
          Your bookings
        </Link>
      </div>
    );
  };

  const bookingsCard = (bookingsData) =>
    bookingsData.map((booking, i) => (
      <div
        className='mt-2 w-full border border-gray-300 rounded overflow-hidden hover:border-orange-500'
        key={i}
      >
        <div
          className='bg-gray-300 font-semibold border-b border-gray-400
         flex flex-row justify-between uppercase items-baseline px-3 pt-2'
        >
          <p className='text-xs font-normal'>
            BOOKING ID <span className='font-semibold'>#{booking._id}</span>
          </p>
          <p className='text-xs font-normal'>
            TOTAL : &#8377;{" "}
            <span className='font-semibold'>{booking.amount}</span>
          </p>
          <p className='text-xs font-normal'>
            Booking for:{" "}
            <span className='font-semibold'>{booking.user.name}</span>
          </p>
        </div>
        <div className='px-3 py-2'>
          {booking.orders.map((order, index) => (
            <div key={index} className='flex flex-row justify-between'>
              <div>
                <p className='text-base font-semibold text-gray-800'>
                  {order.name}
                </p>
                <p className='-mt-3 text-xs text-orange-600'>{order.service}</p>
              </div>
              <p className='text-base font-semibold'>Price: {order.price}</p>
            </div>
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
        {UserNavbar(history)}
        <div className='justify-center items-center md:px-40 mb-10 h-screen'>
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

import React, { useState, useEffect, lazy, Suspense } from "react";
import { isAuthenticated, signout } from "../auth";
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
          <p className='text-xs'>Booking for: {booking.user.name}</p>
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
        {UserNavbar(history)}
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
  return (
    <>
      {bookingsInfo(bookingHistory)}

      <Footer />
    </>
  );
};

export default withRouter(UserBookings);

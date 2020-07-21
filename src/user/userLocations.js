import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link, withRouter } from "react-router-dom";
import { getPurchaseHistory, getUserAddress } from "./apiUser";

import Footer from "../modules/components/Footer";
import UserNavbar from "./UserNavbar";
import Spinner from "../core/components/Spinner";
const CartCard2 = React.lazy(() => import("../core/components/Cart/CartCard2"));

const UserLocations = ({ history }) => {
  const [Address, setAddress] = useState([]);

  const [fetched, setFetched] = useState(false);

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
        setAddress(data.address);
        setFetched(true);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
    // UserAddress(_id, token);
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

  const AddressCard = (addressData) => {
    addressData.map((address, i) => <div>{address._id}</div>);
  };

  const addressInfo = (address) => {
    return (
      <>
        {UserNavbar(history)}
        <div className='justify-center items-center md:px-40 mb-10'>
          <div className='bg-white flex flex-col rounded overflow-hidden px-3 -pt-16'>
            {breadLinks()}

            <h1 className='text-2xl text-left font-semibold'>Your Bookings</h1>
            {fetched ? AddressCard(address) : <Spinner />}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {addressInfo(Address)}

      <Footer />
    </>
  );
};

export default withRouter(UserLocations);

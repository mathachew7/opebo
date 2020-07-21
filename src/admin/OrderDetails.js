import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
import Footer from "../modules/components/Footer";
import AdminNavbar from "./AdminNavbar";
import Spinner from "../core/components/Spinner";
import { getSingleOrder } from "../core/apiCore";

const FetchSingleOrder = (props) => {
  const [bookingData, setBookingData] = useState([]);
  const [fetched, setFetched] = useState(false);

  const orderId = props.match.params.orderId;

  const init = (orderId) => {
    setFetched(false);
    getSingleOrder(orderId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBookingData(data);
        setFetched(true);
      }
    });
  };
  useEffect(() => {
    init(orderId);
  }, [orderId]);

  const breadLinks = () => {
    return (
      <div className='flex flex-row mb-2'>
        <Link
          className='text-xs text-gray-500 hover:text-gray-800'
          to={`/admin/dashboard`}
        >
          Your account >{" "}
        </Link>
        <Link
          className='ml-2 text-xs text-orange-600 hover:text-orange-500'
          to={`/admin/viewOrders`}
        >
          All Orders >{" "}
        </Link>
        <Link className='ml-2 text-xs text-orange-600 hover:text-orange-500'>
          Order Details >{" "}
        </Link>
      </div>
    );
  };

  const orderCard = (orderData) => {
    return (
      <div>
        <div className='text-xs text-gray-900 flex flex-row justify-start'>
          <p>Ordered on {moment(orderData.createdAt).format("llll")}</p>
          <p className='text-gray-300 mx-2'>|</p>
          <p>Order# {orderData._id}</p>
        </div>
        <div className='my-3 p-3 text-xs border border-gray-300 flex flex-col md:flex-row justify-between items-start rounded'>
          <div className='flex flex-col justify-start text-left'>
            <p className='font-semibold text-gray-900'>Order Address</p>
            <p>{orderData.address.full_name}</p>
            <p>{orderData.address.mobile}</p>
            <p>{orderData.address.street}</p>
            <p>
              {orderData.address.city}, {orderData.address.state}{" "}
              {orderData.address.pin}
            </p>
            <p>India</p>
          </div>
          <div className='flex flex-col justify-start text-left'>
            <p className='font-semibold text-gray-900'>Payment</p>
            <p>Done</p>
            <p className='font-semibold text-gray-900'>Payment Id</p>
            <p>{orderData.transaction_id}</p>
          </div>
          <div className='xs:w-full md:w-auto flex flex-col justify-start text-left'>
            <p className='font-semibold text-gray-900'>Order Summary</p>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col mr-16 text-left'>
                <p className='font-semibold text-gray-900'>Grand Total </p>
                <p>(including 18% GST)</p>
              </div>
              <div className='flex flex-col justify-end items-end text-right'>
                <p className='font-semibold text-gray-900'>
                  &#8377; {orderData.amount}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='my-3 p-3 text-xs border border-gray-300 flex flex-col md:flex justify-between items-start rounded'>
          <p className='font-semibold text-gray-900'>Order Data</p>
          <div>
            {orderData.orders.map((order, index) => (
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
                  <p className='text-base font-semibold'>
                    Price: {order.price}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const orderInfo = (orderData) => {
    return (
      <>
        {AdminNavbar(props)}
        <div className='justify-center items-center md:px-40 mb-10 '>
          <div className='bg-white flex flex-col rounded overflow-hidden px-3 -pt-16'>
            {breadLinks()}

            <h1 className='text-2xl text-left font-semibold'>Order Details</h1>

            {fetched ? orderCard(orderData) : <Spinner />}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {orderInfo(bookingData)}

      <Footer />
    </>
  );
};

export default withRouter(FetchSingleOrder);

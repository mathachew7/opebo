import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../../auth";
import { Link, Redirect } from "react-router-dom";
import CheckoutCard from "./CheckoutCard";
//import Payment from "./Payment";
import { processPayment, createOrder } from "../../apiCore";
import { emptyCart } from "../../cartHelpers";
import Loading from "../Loading";
import Toast from "light-toast";

const CheckoutAddr = ({ subServices, finalAddress }) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    total: 0,
    tax: 0,
    totalWithTax: 0,
    address: {},
  });
  const { loading, success, error, total, tax, totalWithTax, address } = data;
  const [redirect, setRedirect] = useState(false);

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  let GST = 18;

  const finalValues = (subServices, address) => {
    const getTotal = () => {
      return subServices.reduce((currentValue, nextValue) => {
        return currentValue + nextValue.count * nextValue.price;
      }, 0);
    };

    const TOTAL = getTotal();

    const TAX = (GST * TOTAL) / 100;
    const TotalWithTAX = TAX + TOTAL;

    setData({
      ...data,
      total: TOTAL,
      tax: TAX,
      totalWithTax: TotalWithTAX,
      address: address,
    });
  };

  useEffect(() => {
    finalValues(subServices, finalAddress);
  }, [subServices, finalAddress]);

  const showCheckout = () => {
    return isAuthenticated() ? (
      <Link
        to='/checkout-address'
        className='mt-5 w-full flex flex-col justify-center items-center nowrap'
      >
        {loading ? (
          <button className='w-full py-4 bg-black hover:bg-gray-900 text-white rounded-lg text-md font-bold uppercase'>
            <Loading />
          </button>
        ) : (
          <button
            onClick={pay}
            className='w-full py-4 bg-black hover:bg-gray-900 text-white rounded-lg text-md font-bold uppercase'
          >
            Proceed to payment
          </button>
        )}
      </Link>
    ) : (
      <Link
        to='/signin'
        className='mt-5 w-full flex flex-col justify-center items-center nowrap'
      >
        <button className='w-full py-4 bg-black hover:bg-gray-900 text-white rounded-lg text-md font-bold uppercase'>
          Sign in to continue
        </button>
      </Link>
    );
  };

  function isEmpty(obj) {
    return !Object.keys(obj).length;
  }

  let singleOrders = [];

  const storeData = (items) => {
    items.map((item, i) => {
      if (!isEmpty(item)) {
        singleOrders.push({
          name: item.name,
          subService: item._id,
          service: item.service.name,
          count: item.count,
          price: item.price,
        });
      }
    });
  };

  const pay = (event) => {
    event.preventDefault();
    if (isEmpty(data.address)) {
      Toast.info("Please enter or select address ", 1000, () => {
        // do something after the toast disappears
      });
    } else {
      setData({ ...data, error: false });

      storeData(subServices);

      setData({ ...data, error: false, loading: true });
      const options = {
        key: "rzp_test_9vbBlpgYxp2OO8",
        amount: data.totalWithTax * 100,
        name: data.address.name,
        currency: "INR",
        receipt: "order_rcptid_11",
        contact: data.address.phone,
        description: "Payment",
        handler(response) {
          const payment_id = response.razorpay_payment_id;

          const createOrderData = {
            orders: singleOrders,
            transaction_id: payment_id,
            amount: data.totalWithTax,
            address: data.address,
          };

          processPayment(payment_id, data.totalWithTax)
            .then((resp) => {
              createOrder(userId, token, createOrderData)
                .then((res) => {
                  emptyCart(() => {
                    Toast.info(
                      "Payment success and empty cart",
                      1000,
                      () => {}
                    );
                  });

                  setData({
                    loading: false,
                    success: true,
                  });
                  setRedirect(true);
                })
                .catch((err) => {
                  console.log(err);
                  setData({
                    loading: false,
                  });
                });
            })
            .catch(function (error) {
              console.log("Request failed", error);
              setData({
                loading: false,
              });
            });
        },
        prefill: {
          name: data.address.name,
          email: isAuthenticated().user.email,
        },
        notes: {
          address: data.address,
        },
        theme: {
          color: "#9D50BB",
        },
      };
      const rzp1 = new window.Razorpay(options);

      rzp1.open();
    }
  };

  const shouldRedirect = (order) => {
    if (order) {
      return <Redirect to={`/user/bookings/${userId}`} />;
    }
  };

  const showError = (error) => (
    <div
      className='flex alert alert-danger justify-center items-center bg-red-500 text-white py-1'
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  // const showSuccess = (success) => (
  //   <div
  //     className='flex alert alert-danger justify-center items-center bg-green-500 text-white py-1'
  //     style={{ display: success ? "" : "none" }}
  //   >
  //     Thanks! Your payment was successful!
  //   </div>
  // );

  // const showLoading = () => loading && <Spinner />;

  return (
    <>
      <div className='md:w-1/3 p-5 md:p-10 bg-white md:h-screen flex flex-col nowrap justify-start items-center'>
        <div className='border border-gray-400 bg-red-500 rounded p-5 py-2 w-full'>
          <h1 className='text-base text-white font-semibold uppercase'>
            Your cart summary
          </h1>
        </div>
        {subServices.map((subService, i) => (
          <CheckoutCard key={i} subService={subService} />
        ))}
        <div className='mt-2 border border-gray-400 p-5 w-full rounded'>
          <div className='flex flex-row justify-between items-center'>
            <h1 className='text-gray-700 font-medium'>
              {subServices.length} x Items
            </h1>
            <h1 className='font-medium text-gray-700'>&#8377; {total}.00</h1>
          </div>
          <div className='pb-10 flex flex-row justify-between items-center'>
            <h1 className='text-gray-700 font-medium'>GST ({GST}%)</h1>
            <h1 className='font-medium text-gray-700'>&#8377; {tax}.00</h1>
          </div>
          <hr className='bg-gray-700' />
          <div className='pt-5 pb-2 flex flex-row justify-between items-center md:text-xl'>
            <h1 className='text-base text-gray-800 font-semibold'>Total</h1>
            <h1 className='text-base font-semibold text-gray-800'>
              &#8377; {totalWithTax}.00
            </h1>
          </div>
        </div>
        {/* {showLoading()} */}
        {/* {showSuccess(success)} */}
        {showError(error)}
        {shouldRedirect(redirect)}
        <div className='mt-5 w-full flex flex-col justify-center items-center nowrap'>
          {showCheckout()}
        </div>
      </div>
    </>
  );
};

export default CheckoutAddr;

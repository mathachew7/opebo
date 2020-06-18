import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { otpVerify, authenticate, isAuthenticated } from "../auth";

const logo = require("../assets/images/logo.png");

const OtpPhone = () => {
  const [values, setValues] = useState({
    otp: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { otp, loading, error, redirectToReferrer } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    otpVerify({ otp }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };
  const OtpForm = () => (
    <div className='min-h-screen flex items-start justify-center font-sans bg-gray-100 py-2 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full'>
        <div>
          <img className='mx-auto h-24 mt-10 w-auto' src={logo} alt='OpeBo' />
          <h2 className='mt-10 text-center text-3xl leading-9 font-sans font-bold text-black'>
            Hi, Welcome back!
          </h2>
        </div>
        <form className='mt-8' action='#' method='POST'>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm'>
            <div>
              <input
                aria-label='OTP'
                name='otp'
                type='tel'
                required
                onChange={handleChange("otp")}
                className='appearance-none rounded-none relative bg-gray-300 block w-full px-3 py-2 border border-gray-100 placeholder-gray-900 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
                placeholder='Enter OTP'
                value={otp}
              />
            </div>
          </div>
          <div className='mt-6'>
            <button
              onClick={clickSubmit}
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
            >
              <span className='absolute left-0 inset-y pl-3'>
                <svg
                  className='h-5 w-5 text-white group-hover:text-indigo-400 transition ease-in-out duration-150'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              Sign In
            </button>
            <div className='text-sm leading-5 mt-4 text-center'>
              <Link
                to='/'
                className='font-medium text-orange-500 hover:text-gray-900 focus:outline-none focus:underline transition ease-in-out duration-150'
              >
                Go Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  const showError = () => (
    <div
      className='flex alert alert-danger justify-center items-center bg-red-500 text-white py-1'
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className='flex alert alert-info justify-center items-center bg-orange-500 text-white py-4'>
        <h2 className='text-white'>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to={`/user/dashboard/${user._id}`} />;
    }
    if (isAuthenticated()) {
      return <Redirect to='/' />;
    }
  };
  return (
    <div>
      {showLoading()}
      {showError()}
      {OtpForm()}
      {redirectUser()}
    </div>
  );
};

export default OtpPhone;

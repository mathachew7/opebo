import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { adminSignin, authenticate, isAuthenticated } from "./adminAuth";

const logo = require("../assets/images/logo.png");

const AdminSignin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { admin } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    adminSignin({ email, password }).then((data) => {
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
  const signUpForm = () => (
    <div className='min-h-screen flex items-start justify-center font-sans bg-gray-100 py-2 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full'>
        <div>
          <img className='mx-auto h-24 mt-10 w-auto' src={logo} alt='OpeBo' />
          <h2 className='mt-10 text-center text-3xl leading-9 font-sans font-bold text-black'>
            Hi, Admin!
          </h2>
          <p className='mt-0 text-center text-sm font-sans leading-5 text-gray-600 max-w'>
            <Link
              to='/admin/signup'
              className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
            >
              Oops! New admin? Go to Sign up
            </Link>
          </p>
        </div>
        <form className='mt-8' action='#' method='POST'>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm'>
            <div>
              <input
                aria-label='Email address'
                name='email'
                type='email'
                required
                onChange={handleChange("email")}
                className='appearance-none relative bg-gray-300 block w-full px-3 py-3 border border-gray-400 placeholder-gray-900 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
                placeholder='Email address'
                value={email}
              />
            </div>
            <div className='mt-4'>
              <input
                aria-label='Password'
                name='password'
                type='password'
                required
                onChange={handleChange("password")}
                className='appearance-none relative block w-full px-3 py-3 bg-gray-300 border border-gray-400 placeholder-gray-900 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
                placeholder='Password'
                value={password}
              />
            </div>
          </div>

          <div className='mt-6 flex items-center justify-between'>
            <div className='text-sm leading-5'>
              <Link
                to='/admin/forgot-password'
                className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div className='mt-6'>
            <button
              onClick={clickSubmit}
              type='submit'
              className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-md font-bold rounded-lg text-white bg-red-600 hover:bg-black focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo ease-in-out uppercase'
            >
              <span className='absolute left-0 inset-y pl-3'>
                <svg
                  className='h-5 w-5 text-white group-hover:text-gray-400 transition ease-in-out duration-150'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clip-rule='evenodd'
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
                <i className='fas fa-arrow-left px-2' />
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
      if (admin && admin.role === 1) {
        return <Redirect to='/admin/dashboard' />;
      } else {
        return <Redirect to='/' />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to='/' />;
    }
  };
  return (
    <div>
      {showLoading()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </div>
  );
};

export default AdminSignin;

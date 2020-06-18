import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { adminSignup, isAuthenticated } from "./adminAuth";

const logo = require("../assets/images/logo.png");

const AdminSignup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, success, error } = values;
  //const { admin } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    adminSignup({ name, email, password }).then((data) => {
      if (data.error) {
        if (data.error.includes("email")) {
          setValues({
            ...values,
            error: "Admin already exists. Please try another email",
            success: false,
          });
        } else {
          setValues({
            ...values,
            error: data.error,
            success: false,
          });
        }
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signUpForm = () => (
    <div>
      <div className='min-h-screen flex items-start justify-center font-sans bg-gray-100 py-2 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full'>
          <div>
            <img className='mx-auto h-24 mt-8 w-auto' src={logo} alt='OpeBo' />
            <h2 className='mt-10 text-center text-3xl leading-9 font-sans font-bold text-black'>
              Create admin account
            </h2>
            <p className='mt-0 text-center text-sm font-sans leading-5 text-gray-600 max-w'>
              <a
                href='/admin/signin'
                className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
              >
                Already have an admin account? Login Instead
              </a>
            </p>
          </div>
          <form className='mt-8'>
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm'>
              <div>
                <input
                  aria-label='Name'
                  name='name'
                  type='name'
                  required
                  onChange={handleChange("name")}
                  className='appearance-none relative bg-gray-300 block w-full px-3 py-3 border border-gray-400 placeholder-gray-900 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
                  placeholder='Full Name'
                  value={name}
                />
              </div>
              <div className='mt-4'>
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
                Sign up
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

  const showSuccess = () => (
    <div
      className='flex alert alert-info justify-center items-center bg-green-500 text-white py-1'
      style={{ display: success ? "" : "none" }}
    >
      New admin account is created. Please{" "}
      <Link
        to='/admin/signin'
        className='ml-3 bg-green-600 hove:bg-green-700 rounded px-4 py-1 text-green-200 hover:text-yellow-200'
      >
        Signin
      </Link>
    </div>
  );

  const redirectUser = () => {
    if (isAuthenticated()) {
      return (
        <>
          <div
            className='flex alert alert-info justify-center items-center bg-green-500 text-white py-1'
            style={{ display: success ? "" : "none" }}
          >
            Your account is already logged in!
          </div>
          <Redirect to='/admin/dashboard' />; ;
        </>
      );
    }
  };

  return (
    <div>
      {showSuccess()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </div>
  );
};

export default AdminSignup;

import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Footer from "../modules/components/Footer";
import { isAuthenticated } from "../auth";
import { read, update, updateUser } from "./apiUser";

const ProfileUpdate = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    success: false,
  });

  const { user, token } = isAuthenticated();
  const { name, email, password, loading, error, success } = values;

  const init = (userId) => {
    //console.log(userId);
    read(userId, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({ ...values, name: data.name, email: data.email });
      }
    });
  };

  useEffect(() => {
    init(match.params.userId);
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    update(match.params.userId, token, { name, email, password }).then(
      (data) => {
        if (data.error) {
          console.log(data.error);
          setValues({ ...values, error: data.error, loading: false });
        } else {
          updateUser(data, () => {
            setValues({
              ...values,
              name: data.name,
              email: data.email,
              success: true,
            });
          });
        }
      }
    );
  };

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

  const redirectUser = (success) => {
    if (success) {
      return <Redirect to={`/user/dashboard/${user._id}`} />;
    }
  };

  const updateProfile = (name, email, password) => (
    <div>
      <div className='min-h-screen flex items-start justify-center font-sans bg-gray-100 py-2 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full'>
          <h1 className='mt-5 text-4xl'>Profile Update</h1>
          <form className='mt-8'>
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm'>
              <div>
                <input
                  aria-label='Name'
                  name='name'
                  type='text'
                  onChange={handleChange("name")}
                  required
                  className='appearance-none rounded-none relative bg-gray-300 block w-full px-3 py-2 border border-gray-100 placeholder-gray-900 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
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
                  className='appearance-none rounded-none relative bg-gray-300 block w-full px-3 py-2 border border-gray-100 placeholder-gray-900 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
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
                  className='appearance-none rounded-none relative block w-full px-3 py-2 bg-gray-300 border border-gray-300 placeholder-gray-900 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
                  placeholder='Password'
                  value={password}
                />
              </div>
            </div>

            <div className='mt-6'>
              <button
                onClick={clickSubmit}
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out'
              >
                Submit
              </button>
              <div className='text-sm leading-5 mt-4 text-center'>
                <a
                  href='/user/dashboard'
                  className='font-medium text-orange-500 hover:text-gray-900 focus:outline-none focus:underline transition ease-in-out duration-150'
                >
                  Cancel
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      iv>
      {showLoading()}
      {showError()}
      {updateProfile(name, email, password)}
      {redirectUser(success)}
      <Footer />
    </>
  );
};

export default ProfileUpdate;

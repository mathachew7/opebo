import React, { useState } from "react";
import { createSubscribeUs } from "../../auth";

const Subscribe = () => {
  const [values, setValues] = useState({
    email: "",
    error: "",
    success: false,
  });

  const { email, success, error } = values;

  const handleChange = (props) => (event) => {
    setValues({ ...values, error: false, [props]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    createSubscribeUs({ email }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          email: "",
          error: "",
          success: true,
        });
      }
    });
  };

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
      Thank You for subscribing us!
    </div>
  );

  return (
    <section>
      {showSuccess()}
      {showError()}
      <div className='w-full bg-orange-500 bg-no-repeat font-sans'>
        <div className=' p-10 py-20 flex flex-col flex-wrap justify-center content-center'>
          <div className='m-0 p-0 text-3xl  text-white  antialiased  text-center'>
            Get Our Updates
          </div>
          <div className=' m-0 p-0 text-xl text-white antialiased text-center'>
            Find out about updates and other news
          </div>
          <div className='mt-3 flex flex-row flex-wrap'>
            <input
              type='text'
              onChange={handleChange("email")}
              value={email}
              className=' text-black text-base rounded-l rounded-r-none w-4/6 md:w-2/3 p-3 px-4 placeholder-gray-700'
              placeholder='example@mail.com'
            />
            <button
              onClick={clickSubmit}
              className='p-3 w-2/6 md:w-1/3 rounded-r rounded-r-none bg-black font-semibold text-base text-white hover:bg-gray-900'
              type='button'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

import React, { useState } from "react";
import Navbar from "../core/components/Navbar";
import Footer from "../modules/components/Footer";
import AppFeature from "../modules/components/AppFeature";
import NewFeature from "../modules/components/NewFeature";
import { FaTelegramPlane } from "react-icons/fa";
import { createContactUs } from "../auth";

const logo = require("../assets/images/logo.png");

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    error: "",
    success: false,
  });
  const { name, email, phone, message, success, error } = values;
  const handleChange = (props) => (event) => {
    setValues({ ...values, error: false, [props]: event.target.value });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    createContactUs({ name, phone, email, message }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          phone: "",
          email: "",
          message: "",
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
      Thank You for contacting us Our members will reach you soon.
    </div>
  );

  const contactForm = () => (
    <>
      <Navbar />
      <section>
        <div className='min-h-screen flex items-start justify-center bg-white font-sans py-2 px-4 sm:px-6 lg:px-8'>
          <div className='w-full md:w-2/3'>
            <div>
              <img
                className='mx-auto h-12 my-10 w-auto'
                src={logo}
                alt='OpeBo'
              />
            </div>
            <div className='flex justify-center items-center'>
              <form className='w-full p-3 md:p-8 md:border border-gray-200 bg-gray-200 shadow-xl rounded-lg'>
                <h2 className='text-center text-3xl md:text-4xl leading-9 font-sans font-bold text-black'>
                  Contact us
                </h2>
                <p className='mt-0 text-center text-sm font-sans leading-5 text-gray-600 max-w'>
                  <a
                    href='/'
                    className='font-medium text-white hover:text-black hover:font-semibold hover:bg-white bg-black rounded px-3 py-1 text-xs focus:outline-none focus:underline transition ease-in-out duration-150'
                  >
                    Go back home
                  </a>
                </p>
                <div className='flex flex-wrap -mx-3 mb-6'>
                  <div className='w-full px-3'>
                    <label
                      className='block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2'
                      for='grid-first-name'
                    >
                      Enter Full Name
                    </label>
                    <input
                      className='appearance-none block w-full bg-white text-gray-900 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400 border border-gray-400'
                      id='name'
                      name='name'
                      type='text'
                      placeholder='Enter full name'
                      onChange={handleChange("name")}
                      value={name}
                    />
                  </div>
                  <div className='w-full px-3 mt-5'>
                    <label
                      className='block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2'
                      for='grid-last-name'
                    >
                      Enter Phone number
                    </label>
                    <input
                      className='appearance-none block w-full bg-white text-gray-900 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400 border border-gray-400'
                      id='phone'
                      type='text'
                      placeholder='+91-9999 900 000'
                      name='phone'
                      onChange={handleChange("phone")}
                      value={phone}
                    />
                  </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                  <div className='w-full px-3'>
                    <label
                      className='block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2'
                      for='grid-email'
                    >
                      Enter e-mail
                    </label>
                    <input
                      className='appearance-none block w-full bg-white text-gray-900 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400 border border-gray-400'
                      id='email'
                      type='email'
                      name='email'
                      placeholder='john@email.com'
                      onChange={handleChange("email")}
                      value={email}
                    />
                    <p className='text-gray-900 text-xs italic'>
                      Some tips - as long as needed
                    </p>
                  </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                  <div className='w-full px-3'>
                    <label
                      className='block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2'
                      for='grid-password'
                    >
                      Enter your Message for Opebo
                    </label>
                    <textarea
                      className=' no-resize appearance-none block w-full bg-white text-gray-900 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400 border border-gray-400 h-48 resize-none'
                      id='message'
                      name='message'
                      placeholder='Type your message here...'
                      onChange={handleChange("message")}
                      value={message}
                    ></textarea>
                    <p className='text-gray-800 text-xs italic'>
                      What do you want to tell us?
                    </p>
                  </div>
                </div>
                <div className='mt-6'>
                  <button
                    className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-black hover:bg-gray-900 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray active:bg-green-600 transition duration-150 ease-in-out'
                    type='submit'
                    onClick={clickSubmit}
                  >
                    <span className='absolute left-0 inset-y pl-3'>
                      <FaTelegramPlane className='h-5 w-5 text-white group-hover:text-indigo-400 transition ease-in-out duration-150' />
                    </span>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div>
      {showSuccess()}
      {showError()}
      {contactForm()}
      <AppFeature />
      <NewFeature />
      <Footer />
    </div>
  );
};

export default Contact;

import React from "react";
import Navbar from "../core/components/Navbar";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className='w-full h-screen antialiased bg-teal-700 flex flex-col justify-center items-center text-center px-5 font-sans'>
        <i className='fas fa-times-circle text-teal-900 text-6xl'></i>
        <h1 className='text-gray-100 text-6xl font-bold'>404</h1>
        <p className='text-white'>
          <span className='text-5xl font-bold'>Oops!</span> Sorry we can't find
          the page you are looking for.
        </p>
        <p className='text-2xl text-orange-400'>
          Maybe it's out there somewhere...
        </p>
        <div className='px-5 py-5'>
          <p className='mb-10 text-gray-200'>
            Don't worry, you can always find useful stuffs from our{" "}
          </p>
          <Link
            to='/'
            className='md:m-0 md:ml-4 px-4 py-2 rounded text-white border border-white hover:text-teal-700 active:text-white hover:bg-white font-bold'
          >
            Go back to homepage
          </Link>
        </div>

        <hr className='h-1 w-full md:w-1/3 bg-orange-400 border-transparent' />
        <p className=' mt-5 bg-teal-800 px-5 py-1 rounded rounded-lg text-gray-400 text-lg font-bold'>
          Error code:404
        </p>
      </div>
    </>
  );
};

export default ErrorPage;

import React from "react";
import { Link } from "react-router-dom";

const logo = require("../../assets/images/logo-w.png");

const footer = (props) => {
  return (
    <div>
      <footer className='font-sans bg-black text-white pt-8 px-4 hover:text-orange-600'>
        <div className='mx-auto container overflow-hidden flex flex-col lg:flex-row justify-between'>
          <a href='/' className='block mr-4 w-1/3'>
            <img src={logo} className='w-48 ' alt='logo' />
          </a>

          <div className='w-2/3 flex text-sm mt-6 lg:mt-0'>
            <ul className='text-gray-700 list-none p-0 font-thin flex flex-col text-left'>
              <div className='inline-block py-2 px-3 text-white uppercase no-underline font-bold tracking-wide'>
                Product
              </div>
              <Link
                key='Popular'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Popular
              </Link>
              <Link
                to='/privacypolicy'
                key='PrivacyPolicy'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Privacy Policy
              </Link>
              <Link
                to='/disclaimer'
                key='Disclaimer'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Disclaimer
              </Link>
              <Link
                to='/cookiespolicy'
                key='CookiesPolicy'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Cookies policy
              </Link>
            </ul>
            <ul className='text-gray-700 list-none p-0 font-thin flex flex-col text-left'>
              <div className='inline-block py-2 px-3 text-white uppercase no-underline font-bold tracking-wide'>
                Company
              </div>
              <Link
                to='/termsandconditions'
                key='TermsAndConditions'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Terms &amp; Condition
              </Link>
              <Link
                to='/enduserlicense'
                key='EndUserLicense'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                EULA
              </Link>
              <Link
                to='/returnrefundpolicy'
                key='ReturnRefundPolicy'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Return, Refund policy
              </Link>
              <div>
                <a className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'>
                  Works
                </a>
              </div>
            </ul>
            <ul className='text-gray-700 list-none p-0 font-thin flex flex-col text-left'>
              <div className='inline-block py-2 px-3 text-white uppercase no-underline font-bold tracking-wide'>
                Vendors
              </div>
              <div>
                <a
                  href='/contact'
                  className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
                >
                  Contact
                </a>
              </div>
              <div>
                <a className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'>
                  Vendor Login
                </a>
              </div>
              <div>
                <a
                  href='/'
                  className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
                >
                  Services
                </a>
              </div>
              <div>
                <Link
                  to='/about'
                  className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
                >
                  Info
                </Link>
              </div>
            </ul>
          </div>
          <div className='px-5 text-gray-700 flex justify-center'>
            <div className='inline-block text-center justify-center py-2 px-3 text-white uppercase font-bold tracking-wide'>
              Find Us ON
              <div className='flex pt-4'>
                <a
                  className='block flex items-center text-white hover:text-orange-500 mr-6 no-underline'
                  href='https://wa.me/917042161702'
                >
                  <i className='fab fa-whatsapp text-2xl'></i>
                </a>
                <a
                  className='block flex items-center text-white hover:text-orange-500 mr-6 no-underline'
                  href='https://www.facebook.com/opeboindustries/'
                >
                  <i className='fab fa-facebook text-2xl'></i>
                </a>
                <a
                  className='block flex items-center text-white hover:text-orange-500 no-underline'
                  href='https://www.instagram.com/opeboindustries/'
                >
                  <i className='fab fa-instagram text-2xl'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-5 mt-4 flex flex-col text-gray-700 border-t border-gray-900 text-center'>
          <div>
            <Link to='/' className='font-bold text-white hover:text-orange-500'>
              {" "}
              OpeBo Industries
            </Link>
            . All rights reserved.
          </div>
          <p>©Copyright {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default footer;

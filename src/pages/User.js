import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Footer from "../modules/components/Footer";

const logo = require("../assets/images/logo.png");

const avatar = require("../assets/images/avatar.jpg");

const links = [
  {
    route: `/`,
    title: `Home`,
  },

  {
    route: `/bookings`,
    title: `Bookings`,
  },
  {
    route: `/transactions`,
    title: `Transactions`,
  },
  {
    route: `/myLocations`,
    title: `My Locations`,
  },
  {
    route: `/notifications`,
    title: `Notifications`,
  },
  {
    route: `/services`,
    title: `Services`,
  },
  {
    route: `/about`,
    title: `About`,
  },
  {
    route: `/contact`,
    title: `Contact`,
  },
  {
    route: `/opebospecials`,
    title: `Opebo Specials`,
  },
];

const User = () => {
  const [profileDropdown, toggleProfileDropdown] = useState(false);

  const dropMenu = () => {
    return (
      <div className='rounded shadow-md bg-white absolute pin-t mt-2 -ml-16'>
        <ul className='list-reset'>
          <li>
            <Link
              to='/admin/profile'
              className='no-underline px-4 py-2 block text-black hover:text-orange-500 hover:bg-grey-300'
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to='/admin/dashboard'
              className='no-underline px-4 py-2 block text-black hover:text-orange-500 hover:bg-grey-300'
            >
              Dashboard
            </Link>
          </li>
          <li>
            <hr className='border-t mx-2 border-grey-800' />
          </li>
          <li>
            <Link
              to='/'
              className='no-underline px-4 py-2 block text-red-500 font-bold hover:text-orange-500 hover:bg-grey-300'
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userNavbar = () => {
    return (
      <div className='overflow-hidden overflow-x-hidden flex items-center justify-center pt-2'>
        <div className='scrolling-touch bg-transparent w-screen overflow-auto whitespace-no-wrap py-3 pb-10 px-2 text-center'>
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.route}
              className='no-underline mr-2 mb-2 p-3 rounded active:text-black hover:bg-gray-100 hover:text-gray-800 bg-gray-300 active:bg-orange-400 text-black'
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <>
        <header className='antialiased bg-white pb-2 font-sans'>
          <div className='container mx-auto font-sans'>
            <div className='flex justify-between items-center px-5 pt-4 pb-4 border-b-2 border-gray-200'>
              <button className='flex flex-wrap items-center text-xl font-semibold'>
                <Link to='/' key='Home'>
                  <img className='h-10 mr-2 w-auto' src={logo} alt='logo'></img>
                </Link>
              </button>
              <div className='z-10'>
                <button onClick={() => toggleProfileDropdown(!profileDropdown)}>
                  <img
                    className='inline-block h-8 w-8 rounded-full'
                    src='https://avatars0.githubusercontent.com/u/4323180?s=460&v=4'
                    alt=''
                  />
                </button>
                <div className={`${profileDropdown ? `block` : `hidden`}`}>
                  {dropMenu()}
                </div>
              </div>
            </div>
            {userNavbar()}
          </div>
        </header>

        <div className='bg-white sm:max-w-full max-w-md rounded overflow-hidden px-5 -pt-16'>
          <div className='rounded'>
            <div className='text-center p-6  border-b'>
              <img
                className='h-24 w-24 rounded-full mx-auto'
                src={avatar}
                alt='avatar'
              />
              <p className='pt-2 text-lg font-semibold'>Johnbas</p>
              <p className='text-sm text-gray-600'>john@test.com</p>
              <div className='mt-5'>
                <a
                  href='/'
                  className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-700 hover:text-white hover:bg-orange-400'
                >
                  <i className='fas fa-heart' aria-hidden='true'></i> Registered
                  User
                </a>
              </div>
            </div>
            <div>
              <div className='px-6 py-4 text-center'>
                <button
                  type='button'
                  className='border rounded py-2 px-4 text-xs font-semibold hover:border-gray-400'
                >
                  <Link
                    className='text-sm font-semibold text-gray-600 hover:text-gray-800'
                    to={`/profileupdate/id}`}
                  >
                    Change profile details
                    <i className='fas fa-pen ml-4' />
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className='border-b'>
            <div className='px-6 py-4 text-center'>
              <button
                type='button'
                className='border bg-red-500 rounded py-2 px-6 text-xs font-semibold text-white'
              >
                <i className='fas fa-arrow-left mr-2' />
                Sign out
              </button>
            </div>
            <p className='text-gray-500 text-center italic text-xs'>
              Opebo Industries Ltd.
            </p>

            <div className='px-6 py-4'>
              <span className='inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2'>
                Privacy Policy
              </span>
              <span className='inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2'>
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {userInfo()}
      <Footer />
    </>
  );
};

export default withRouter(User);

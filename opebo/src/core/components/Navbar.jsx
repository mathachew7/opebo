import React, { useState, useEffect, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../../auth";
import { isAuthenticated as adminAuthenticated } from "../../admin/adminAuth";
import { FaBars, FaTimes, FaSearch, FaShoppingBag } from "react-icons/fa";
import { itemTotal, getCart } from "../cartHelpers";

const cartImage = require("../../assets/images/cart.svg");

const logo = require("../../assets/images/logo.png");

const links = [
  {
    route: `/`,
    title: `Home`,
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
    route: `/opebo-rewards`,
    title: `Opebo Rewards`,
  },
];

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ed8936" };
  } else {
    return { color: "#000000" };
  }
};

const Navbar = ({ history }) => {
  const [isExpanded, toggleExpansion] = useState(false);
  //const [searchExpanded, setSearchExpanded] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const customCheck = () => {
    if (
      (!isAuthenticated() && adminAuthenticated()) ||
      (!adminAuthenticated() && isAuthenticated()) ||
      (isAuthenticated() && adminAuthenticated())
    ) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    customCheck();
    setCartItems(getCart());
  }, []);

  const cartButton = () => {
    return (
      <button
        className='block items-center px-3 py-2 rounded text-black'
        onClick={() => toggleExpansion(false)}
      >
        <Link
          to='/cart'
          className='text-black active:text-black hover:text-orange-500'
        >
          <div className='flex flex-row justify-center items-center block relative'>
            {/* <FaShoppingBag className='h-4 w-4 hover:text-orange-500' /> */}
            <img src={cartImage} className='h-6 w-6' />
            {cartItems.length === 0 ? (
              <></>
            ) : (
              <span className='-ml-1 -mt-3 w-4 h-4 text-center align-middle font-semibold text-white bg-orange-500 rounded-full text-xs'>
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
      </button>
    );
  };

  return (
    <header className='bg-gray-300 font-sans items-center'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-3 md:p-4 md:pt-0'>
        <Link
          className='flex items-center md:mt-3 md:ml-12 no-underline text-white'
          style={isActive(history, "/")}
          to='/'
        >
          <img className='h-8 mr-2 w-auto' src={logo} alt='logo'></img>
          <span className='font-bold text-gray-800 text-xs tracking-tight'>
            Opebo Industries Ltd.
          </span>
        </Link>

        <div className='flex items-center'>
          <div className='md:hidden'>{cartButton()}</div>

          <button
            className='block md:hidden flex items-center px-3 py-2 rounded text-black'
            onClick={() => toggleExpansion(!isExpanded)}
          >
            {isExpanded ? (
              <FaTimes className='h-4 w-4' />
            ) : (
              <FaBars className='h4 w-4' />
            )}
          </button>
        </div>
        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center mt-3 text-sm w-full md:w-auto`}
        >
          <div className='block relative'>
            <span className='h-full absolute inset-y-0 left-0 flex items-center pl-2'>
              <svg
                viewBox='0 0 24 24'
                className='h-4 w-4 fill-current text-gray-500'
              >
                <path d='M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z'></path>
              </svg>
            </span>
            <div className='gcse-search'></div>
            <input
              placeholder='Search'
              className=' appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-gray-400 text-sm text-gray-700 focus:bg-gray-300 placeholder-gray-700 focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
            />
          </div>
          {links.map((link) => (
            <Link
              onClick={() => toggleExpansion(!isExpanded)}
              className='block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-black active:text-orange-600 hover:text-orange-600'
              key={link.title}
              style={isActive(history, `${link.route}`)}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}

          <div className='mt-3 sm:m-0 md:block md:flex md:items-center text-sm w-full md:w-auto'>
            <div className='md:ml-4 hidden md:block'>{cartButton()}</div>
            {customCheck() ? (
              <Fragment>
                <button className='sm:ml-10 sm:block h-10 text-md font-sans'>
                  <Link
                    to='/signup'
                    className='text-white active:text-white hover:text-white font-bold px-5 py-2 rounded bg-orange-600 hover:bg-orange-700'
                    onClick={() => toggleExpansion(!isExpanded)}
                  >
                    Signup
                  </Link>
                </button>
                <button className='ml-6 sm:block h-10 text-white active:text-white text-md font-sans  font-medium '>
                  <Link
                    to='/signin'
                    className='text-white active:text-white hover:text-white font-bold px-5 py-2 rounded hover:bg-gray-900 bg-black'
                    onClick={() => toggleExpansion(!isExpanded)}
                  >
                    Login
                  </Link>
                </button>
              </Fragment>
            ) : (
              <></>
            )}

            {isAuthenticated() && (
              <button className='sm:ml-10 md:ml-2 sm:block h-10 text-md font-sans rounded font-medium hover:text-gray-600'>
                <Link
                  className='text-green-500 font-bold active:text-gray-900 hover:text-gray-900'
                  onClick={() => toggleExpansion(!isExpanded)}
                  to={`/user/dashboard/${isAuthenticated().user._id}`}
                >
                  User Profile
                  <i className='fas fa-user-circle px-2 text-lg' />
                </Link>
              </button>
            )}
            {adminAuthenticated() && (
              <button className='sm:ml-10 md:ml-2 sm:block h-10 text-md font-sans rounded font-medium hover:text-gray-600'>
                <Link
                  className='text-green-500 font-bold active:text-gray-900 hover:text-gray-900'
                  onClick={() => toggleExpansion(!isExpanded)}
                  to='/admin/dashboard'
                >
                  Admin Profile
                  <i className='fas fa-user-circle px-2 text-lg' />
                </Link>
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Navbar);

/*<div className='w-full sm:w-full'>
  <input
    className='w-full text-left bg-gray-300 text-black rounded-lg px-3 py-2'
    placeholder='Search by your demand'
  ></input>
</div>;*/

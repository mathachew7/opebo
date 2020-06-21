import React, { useState, useEffect } from "react";
import { isAuthenticated, signout } from "../auth";
import { Link, withRouter } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return {
      color: "#fff",
      backgroundColor: "#000000",
    };
  } else {
    return { color: "#111111" };
  }
};

const UserNavbar = ({ history }) => {
  const [profileDropdown, toggleProfileDropdown] = useState(false);
  //const [purhistory, setHistory] = useState([]);
  const logo = require("../assets/images/logo.png");

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      }
      // else {
      //   setHistory(data);
      // }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, [_id, token]);

  const links = [
    {
      route: `/`,
      title: `Home`,
    },

    {
      route: `/user/bookings/${_id}`,
      title: `My Bookings`,
    },
    {
      route: `/user/locations/${_id}`,
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

  const dropMenu = (history) => {
    return (
      <div className='rounded shadow-md bg-white absolute pin-t mt-2 -ml-16'>
        <ul className='list-reset'>
          <li>
            <Link
              to='/cart'
              className='no-underline px-4 py-2 block text-black hover:text-orange-500 hover:bg-grey-300'
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to={`/user/dashboard/${_id}`}
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
              onClick={() =>
                signout(() => {
                  history.push("/");
                })
              }
              className='no-underline px-4 py-2 block text-red-500 font-bold hover:text-orange-500 hover:bg-grey-300'
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userNavLinks = (history) => {
    return (
      <div className='overflow-hidden overflow-x-hidden flex items-center justify-center pt-2'>
        <div className='scrolling-touch bg-transparent w-screen overflow-auto whitespace-no-wrap py-3 pb-10 px-2 text-center'>
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.route}
              style={isActive(history, `${link.route}`)}
              className='no-underline mr-2 mb-2 p-3 rounded active:text-black hover:bg-gray-100 hover:text-white bg-gray-300 active:bg-orange-400 text-black'
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const mainNavbar = (history) => {
    return (
      <>
        <header className='antialiased bg-gray-200 pb-2 font-sans'>
          <div className='container mx-auto font-sans'>
            <div className='flex justify-between items-center px-5 py-2 border-b-2 border-gray-200'>
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
                  {dropMenu(history)}
                </div>
              </div>
            </div>
          </div>
        </header>
        {userNavLinks(history)}
      </>
    );
  };

  return <>{mainNavbar(history)}</>;
};

export default withRouter(UserNavbar);

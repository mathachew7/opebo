import React, { useState } from "react";
import { isAuthenticated } from "./adminAuth";
import { Link, withRouter } from "react-router-dom";

const logo = require("../assets/images/logo-w.png");

const links = [
  {
    route: `/`,
    title: `Home`,
  },

  {
    route: `/create/category`,
    title: `Create Category`,
  },
  {
    route: `/create/service`,
    title: `Create Service`,
  },
  {
    route: `/create/sub-service`,
    title: `Create Sub-Service`,
  },
  {
    route: `/view-Orders`,
    title: `View Orders`,
  },
  {
    route: `/manage-services`,
    title: `Manage Services`,
  },
  {
    route: `/vendors`,
    title: `Vendors`,
  },
  {
    route: `/payments`,
    title: `Payments`,
  },
  {
    route: `/messages`,
    title: `Messages`,
  },
];

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return {
      color: "#fff",
      backgroundColor: "#f6ad55",
    };
  } else {
    return { color: "#111111" };
  }
};

const AdminNavbar = ({ history }) => {
  const [profileDropdown, toggleProfileDropdown] = useState(false);

  const adminLinks = () => {
    return (
      <div className='overflow-hidden overflow-x-hidden flex items-center justify-center pt-2'>
        <div className='scrolling-touch bg-transparent w-screen overflow-auto whitespace-no-wrap py-3 px-2 text-center'>
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.route}
              style={isActive(history, `${link.route}`)}
              className='no-underline mr-2 mb-2 px-2 py-1 rounded active:text-black hover:bg-gray-300 hover:text-white bg-gray-300 active:bg-orange-400 text-black'
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    );
  };

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

  const adminInfo = () => {
    return (
      <header className='antialiased bg-gray-800 pb-2 font-sans'>
        <div className='container mx-auto px-4 font-sans'>
          <div className='flex justify-between items-center pt-4 pb-4 border-b-2 border-gray-600'>
            <button className='flex flex-wrap items-center text-xl font-semibold'>
              <Link to='/' key='Home'>
                <img className='h-10 mr-2 w-auto' src={logo} alt='logo'></img>
              </Link>
            </button>
            <div className='p-2 flex flex-row items-center'>
              <Link to='/admin/dashboard' key='Admin dashboard'>
                <span className='tracking-wide text-white bg-red-600 px-4 py-1 text-xs rounded leading-loose mx-2 font-bold'>
                  <i className='fas fa-user-lock mr-1' aria-hidden='true'></i>{" "}
                  Admin
                </span>
              </Link>
              <div>
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
          </div>

          {adminLinks()}
        </div>
      </header>
    );
  };
  return <>{adminInfo()}</>;
};

export default withRouter(AdminNavbar);

import React, { useEffect } from "react";
import { isAuthenticated, signout } from "../auth";
import { Link, withRouter } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";
//import moment from "moment";
import Footer from "../modules/components/Footer";

const avatar = require("../assets/images/avatar.jpg");

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

const UserDashboard = ({ history }) => {
  //const [purhistory, setHistory] = useState([]);
  const logo = require("../assets/images/logo-w.png");

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

  const userNavbar = () => {
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

  const userInfo = () => {
    return (
      <>
        <header className='antialiased bg-gray-900 pb-2 font-sans'>
          <div className='container mx-auto font-sans'>
            <div className='flex items-center px-5 pt-4 pb-4 border-b-2 border-gray-500'>
              <button className='flex flex-wrap items-center text-xl font-semibold'>
                <Link to='/' key='Home'>
                  <img className='h-10 mr-2 w-auto' src={logo} alt='logo'></img>
                </Link>
              </button>
            </div>
            {userNavbar()}
          </div>
        </header>

        <div className='bg-white sm:max-w-full max-w-md rounded overflow-hidden px-5 -pt-16'>
          <div className='bg-gray-100 rounded'>
            <div className='text-center p-6  border-b'>
              <img
                className='h-24 w-24 rounded-full mx-auto'
                src={avatar}
                alt='avatar'
              />
              <p className='pt-2 text-lg font-semibold'>{name}</p>
              <p className='text-sm text-gray-600'>{email}</p>
              <div className='mt-5'>
                <a
                  href='/'
                  className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-700 hover:text-white hover:bg-orange-400'
                >
                  <i className='fas fa-heart' aria-hidden='true'></i>{" "}
                  {role === 1 ? "Admin" : "Registered User"}
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
                    to={`/profileupdate/${_id}`}
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
                onClick={() =>
                  signout(() => {
                    history.push("/");
                  })
                }
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

export default withRouter(UserDashboard);

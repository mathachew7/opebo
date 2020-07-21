import React, { useEffect } from "react";
import { isAuthenticated, signout } from "../auth";
import { Link, withRouter } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";
//import moment from "moment";
import UserNavbar from "./UserNavbar";
import Spinner from "../core/components/Spinner";
import Footer from "../modules/components/Footer";

const avatar = require("../assets/images/avatar.jpg");

const UserDashboard = ({ history }) => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, [_id, token]);

  const breadLinks = () => {
    return (
      <div className='flex flex-row mb-2'>
        <Link
          className='text-xs text-gray-500 hover:text-gray-800'
          to={`/user/dashboard/${isAuthenticated().user._id}`}
        >
          Your account{" "}
        </Link>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <>
        {UserNavbar(history)}

        <div className='bg-white sm:max-w-full max-w-md rounded overflow-hidden px-5 -pt-16'>
          <div className=''>
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

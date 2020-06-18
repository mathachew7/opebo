import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated, signout } from "./adminAuth";
import { withRouter } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminDashboard = ({ history }) => {
  const {
    admin: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;

  return (
    <>
      <AdminNavbar />
      <Layout
        title='Admin Dashboard'
        description={`Hello ${name}!`}
        className='px-5'
      ></Layout>
      <div>
        <div className='mb-12'>
          <div className='rounded-lg p-6 mb-6'>
            <button
              type='button'
              className='md:ml-10 bg-red-500 px-8 py-2 font-medium text-white rounded'
              onClick={() =>
                signout(() => {
                  history.push("/");
                })
              }
            >
              logout
              <svg
                className='inline-block h-3 w-3 ml-3'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <polygon points='16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(AdminDashboard);

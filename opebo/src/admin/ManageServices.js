import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "./adminAuth";
import { Link } from "react-router-dom";
import { getServices, deleteService } from "./apiAdmin";
import AdminNavbar from "./AdminNavbar";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  const { admin, token } = isAuthenticated();

  const loadServices = () => {
    getServices().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setServices(data);
      }
    });
  };

  const destroy = (serviceId) => {
    deleteService(serviceId, admin._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadServices();
      }
    });
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <>
      <AdminNavbar />
      <Layout
        title='Manage Services'
        description='Perform CRUD on Services'
        className='container-fluid'
      >
        <div className='w-full flex justify-center'>
          <div className='w-full md:w-4/5 px-5'>
            <h2 className='text-center font-bold text-xl'>
              Total {services.length} services
            </h2>
            <hr />

            <div className='py-4'>
              {services.map((s, i) => (
                <div
                  key={i}
                  className='flex flex-row m-2 mb-4 px-2 py-3 bg-gray-200 rounded border border:gray-500 '
                >
                  <strong className='col-sm w-full'>{s.name}</strong>
                  <Link
                    to={`/admin/service/update/${s._id}`}
                    className='col-sm justify-end'
                  >
                    <span className='align-right bg-gray-800 rounded-lg px-4 py-2 text-white hover:bg-gray-700 hover:text-white'>
                      Update
                    </span>
                  </Link>

                  <div className='col-sm'>
                    <span
                      onClick={() => destroy(s._id)}
                      className='align-right bg-orange-400 rounded-lg ml-2 md:ml-5 px-4 py-2 text-white hover:bg-gray-900 hover:text-white cursor-pointer'
                    >
                      Delete
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <br />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ManageServices;

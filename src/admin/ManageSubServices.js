import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "./adminAuth";
import { Link } from "react-router-dom";
import { getSubServices, deleteSubService } from "./apiAdmin";
import AdminNavbar from "./AdminNavbar";

const ManageSubServices = () => {
  const [subServices, setSubServices] = useState([]);

  const { admin, token } = isAuthenticated();

  const loadSubServices = () => {
    getSubServices().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setSubServices(data);
      }
    });
  };

  const destroy = (subServiceId) => {
    deleteSubService(subServiceId, admin._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadSubServices();
      }
    });
  };

  useEffect(() => {
    loadSubServices();
  }, []);

  return (
    <>
      <AdminNavbar />
      <Layout
        title='Manage Sub-Services'
        description='Perform CRUD on Sub-Services'
        className='container-fluid'
      >
        <div className='w-full flex justify-center'>
          <div className='w-full md:w-4/5 px-5'>
            <h2 className='text-center font-bold text-xl'>
              Total {subServices.length} sub-services
            </h2>
            <hr />

            <div className='py-4'>
              {subServices.map((ss, i) => (
                <div
                  key={i}
                  className='flex flex-row m-2 mb-4 px-2 py-3 bg-gray-200 rounded border border:gray-500 '
                >
                  <strong className='col-sm w-full'>{ss.name}</strong>
                  <Link
                    to={`/admin/subService/update/${ss._id}`}
                    className='col-sm justify-end'
                  >
                    <span className='align-right bg-gray-800 rounded-lg px-4 py-2 text-white hover:bg-gray-700 hover:text-white'>
                      Update
                    </span>
                  </Link>

                  <div className='col-sm'>
                    <span
                      onClick={() => destroy(ss._id)}
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

export default ManageSubServices;

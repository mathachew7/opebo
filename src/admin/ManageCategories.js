import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "./adminAuth";
import { Link } from "react-router-dom";
import { getCategories, deleteCategory } from "./apiAdmin";
import AdminNavbar from "./AdminNavbar";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { admin, token } = isAuthenticated();

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const destroy = (categoryId) => {
    deleteCategory(categoryId, admin._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadCategories();
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <AdminNavbar />
      <Layout
        title='Manage Categories'
        description='Perform CRUD on categories'
        className='container-fluid'
      >
        <div className='w-full flex justify-center'>
          <div className='w-full md:w-4/5 px-5'>
            <h2 className='text-center font-bold text-xl'>
              Total {categories.length} categories
            </h2>
            <hr />

            <div className='py-4'>
              {categories.map((c, i) => (
                <div
                  key={i}
                  className='flex flex-row m-2 mb-4 px-2 py-3 bg-gray-200 rounded border border:gray-500 '
                >
                  <strong className='col-sm w-full'>{c.name}</strong>
                  <Link
                    to={`/admin/category/update/${c._id}`}
                    className='col-sm justify-end'
                  >
                    <span className='align-right bg-gray-800 rounded-lg px-4 py-2 text-white hover:bg-gray-700 hover:text-white'>
                      Update
                    </span>
                  </Link>

                  <div className='col-sm'>
                    <span
                      onClick={() => destroy(c._id)}
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

export default ManageCategories;

import React, { useState, useEffect } from "react";
import { isAuthenticated } from "./adminAuth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";
import AdminNavbar from "./AdminNavbar";
import Layout from "../core/Layout";
import { FaPlus } from "react-icons/fa";

const AddCategory = () => {
  const [values, setValues] = useState({
    name: "",
    photo: "",
    loading: false,
    error: "",
    formData: "",
    createdCategory: "",
  });

  const [success, setSuccess] = useState(false);

  // destructure admin and token from local storage
  const { admin, token } = isAuthenticated();

  const { name, loading, error, createdCategory, formData } = values;

  useEffect(() => {
    setValues({
      ...values,
      formData: new FormData(),
    });
  }, []);

  const handleChange = (name) => (e) => {
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setValues({ ...values, error: "", loading: true });
    // make request to api to create category
    createCategory(admin._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          photo: "",
          loading: false,
          createdCategory: data.name,
        });
        setSuccess(true);
      }
    });
  };

  const newCategoryFom = () => (
    <form onSubmit={clickSubmit} className='flex justify-center items-center'>
      <div className='w-full max-w-lg px-5'>
        <div>
          <div className='w-full max-w-lg px-5'>
            <label className='block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Category Photo
            </label>
            <input
              onChange={handleChange("photo")}
              type='file'
              name='photo'
              accept='image/*'
              className='w-full px-4 py-3 bg-gray-200 rounded border border-gray-400'
            />
          </div>
        </div>
        <div className='w-full max-w-lg px-5'>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label className='mt-5 block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Enter Category Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='name'
                name='name'
                type='text'
                placeholder='Category Name'
                onChange={handleChange("name")}
                value={name}
                autoFocus
                required
              />
            </div>
          </div>
          <div className='mt-6'>
            <button
              className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray active:bg-green-600 transition duration-550 ease-in-out uppercase font-bold'
              type='submit'
            >
              <span className='absolute left-0 inset-y pl-3'>
                <FaPlus className='h-5 w-5 text-white group-hover:text-indigo-400 duration-150' />
              </span>
              CREATE CATEGORY
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return (
        <div
          className='my-3 alert alert-info bg-green-400 py-2'
          style={{ display: createdCategory ? "" : "none" }}
        >
          <h3 className='text-white'>{`${createdCategory}`} is created!</h3>{" "}
        </div>
      );
    }
  };

  const showError = () => {
    if (error) {
      return (
        <h3 className='my-3 text-danger bg-red-600 text-white py-2'>
          Category should be unique
        </h3>
      );
    }
  };

  const showLoading = () =>
    loading && (
      <div className='my-3 alert alert-success bg-orange-400 text-white py-2'>
        <h2 className='text-white'>Loading...</h2>
      </div>
    );

  const goNext = () => (
    <div className='my-10'>
      <Link
        to='/create/service'
        className='text-warning bg-gray-200 text-gray-800 active:text-800 hover:text-white hover:bg-orange-400 px-3 py-2 ease-in-out rounded font-bold border border-gray-600 hover:border-transparent uppercase'
      >
        Next create service
        <i className='fas fa-arrow-right ml-3' aria-hidden='true'></i>
      </Link>
    </div>
  );

  const goBack = () => (
    <div className='mt-5 mb-10'>
      <Link
        to='/admin/dashboard'
        className='text-warning bg-gray-400 text-gray-800 active:text-800 hover:text-gray-800 hover:bg-gray-500 px-3 py-2 ease-in-out rounded'
      >
        Back to Dashboard
      </Link>
    </div>
  );

  return (
    <>
      <AdminNavbar />
      <Layout
        title='Add a new category'
        description={`Hey ${admin.name}, ready to add a new category?`}
      >
        <div className='flex flex-col row justify-center text-center'>
          <div>
            {newCategoryFom()}
            {showSuccess()}
            {showError()}
            {showLoading()}
            {goNext()}
            {goBack()}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddCategory;

import React, { useState, useEffect } from "react";
import { isAuthenticated } from "./adminAuth";
import { Link } from "react-router-dom";
import { createService, getCategories } from "./apiAdmin";
import AdminNavbar from "./AdminNavbar";
import Layout from "../core/Layout";
import { FaPlus } from "react-icons/fa";

const AddService = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdService: "",
    formData: "",
  });

  // de-structure admin and token from local storage
  const { admin, token } = isAuthenticated();

  const {
    name,
    description,
    categories,
    category,
    loading,
    error,
    createdService,
    formData,
  } = values;

  // load categories and set form data
  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    createService(admin._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          photo: "",
          loading: false,
          createdService: data.name,
        });
      }
    });
  };

  const newServiceForm = () => (
    <form
      onSubmit={clickSubmit}
      className='mb-3 flex justify-center items-center'
    >
      <div className='w-full max-w-lg px-5'>
        <div className='flex flex-wrap mb-6'>
          <div className='w-full max-w-lg px-5'>
            <label className='block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Category
            </label>
            <div className='relative'>
              <select
                className='appearance-none h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                onChange={handleChange("category")}
              >
                <option>Select Category</option>
                {categories &&
                  categories.map((c, i) => (
                    <option key={i} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='w-full max-w-lg px-5'>
            <label className='block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Service Photo
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
                Service Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                placeholder='Enter Service Name'
                onChange={handleChange("name")}
                value={name}
                autoFocus
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label className='block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Description
              </label>
              <textarea
                className='appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-400 rounded no-resize py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
                type='text'
                placeholder='Enter some description'
                onChange={handleChange("description")}
                value={description}
                autoFocus
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
              CREATE SERVICE
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  const showSuccess = () => (
    <div
      className='my-1 alert alert-info bg-green-400 py-2'
      style={{ display: createdService ? "" : "none" }}
    >
      <h3 className='text-white'>{`${createdService}`} is created!</h3>{" "}
    </div>
  );

  const showError = () => (
    <div>
      <h3
        className='my-3 text-danger bg-red-600 text-white py-2'
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </h3>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className='my-3 alert alert-success bg-orange-400 text-white py-2'>
        <h2 className='text-white'>Loading...</h2>
      </div>
    );

  const goNext = () => (
    <div className='my-10'>
      <Link
        to='/create/sub-service'
        className='text-warning bg-gray-200 text-gray-800 active:text-800 hover:text-white hover:bg-orange-400 px-3 py-2 ease-in-out rounded font-bold border border-gray-600 hover:border-transparent uppercase'
      >
        Next create sub-service
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
        title='Add a new service'
        description={`Hey ${admin.name}, ready to add a new service?`}
      >
        <div className='flex flex-col row justify-center text-center'>
          <div>
            {newServiceForm()}
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

export default AddService;

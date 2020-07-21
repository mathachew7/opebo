import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "./adminAuth";
import { Redirect } from "react-router-dom";
import { getService, getCategories, updateService } from "./apiAdmin";
import AdminNavbar from "./AdminNavbar";

const UpdateService = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    updatedService: "",
    redirectToProfile: false,
    formData: "",
  });

  const { admin, token } = isAuthenticated();

  const {
    name,
    description,
    categories,
    category,
    loading,
    error,
    updatedService,
    redirectToProfile,
    formData,
  } = values;

  const init = (serviceId) => {
    getService(serviceId, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        // populate the state
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          category: data.category._id,
          formData: new FormData(),
        });
        //load categories
        initCategories();
      }
    });
  };

  // load categories and set form data
  const initCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    init(match.params.serviceId);
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateService(match.params.serviceId, admin._id, token, formData).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            photo: "",
            description: "",
            loading: false,
            error: false,
            redirectToProfile: true,
            updatedService: data.name,
          });
        }
      }
    );
  };

  //form to update the service
  const updateServiceForm = () => (
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
                value={name || ""}
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
                <i className='fas fa-pen h-5 w-5 text-white group-hover:text-indigo-400 duration-150' />
              </span>
              UPDATE SERVICE
            </button>
          </div>
          <div className='m-5 mb-10 text-xs text-gray-500'>
            This will update the current service.
          </div>
        </div>
      </div>
    </form>
  );

  const showSuccess = () => (
    <div
      className='my-1 alert alert-info bg-green-400 py-2'
      style={{ display: updatedService ? "" : "none" }}
    >
      <h3 className='text-white'>{`${updatedService}`} is updated!</h3>{" "}
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

  const redirectUser = () => {
    if (redirectToProfile) {
      if (!error) {
        return <Redirect to='/admin/dashboard' />;
      }
    }
  };

  return (
    <>
      <AdminNavbar />
      <Layout
        title='Update service'
        description={`Hey ${admin.name}, this page is to update a service.`}
      >
        <div className='flex flex-col row justify-center text-center'>
          <div>
            {updateServiceForm()}
            {showSuccess()}
            {showError()}
            {showLoading()}
            {redirectUser()}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UpdateService;

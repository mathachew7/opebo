import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "./adminAuth";
import { Link, Redirect } from "react-router-dom";
import { getCategory, getCategories, updateCategory } from "./apiAdmin";
import AdminNavbar from "./AdminNavbar";

const UpdateCategory = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    photo: "",
    loading: false,
    error: false,
    createdCategory: "",
    redirectToProfile: false,
    formData: "",
  });

  const { admin, token } = isAuthenticated();

  const {
    name,
    loading,
    error,
    createdCategory,
    redirectToProfile,
    formData,
  } = values;

  const init = (categoryId) => {
    getCategory(categoryId, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        // populate the state
        setValues({
          ...values,
          name: data.name,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    init(match.params.categoryId);
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateCategory(match.params.categoryId, admin._id, token, formData).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            photo: "",
            loading: false,
            error: false,
            redirectToProfile: true,
            createdCategory: data.name,
          });
        }
      }
    );
  };

  const newPostForm = () => (
    <form onSubmit={clickSubmit} className='flex justify-center items-center'>
      <div className='w-full max-w-lg px-5'>
        <div>
          <div className='w-full max-w-lg px-5'>
            <label className='block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Upload new category Photo
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
                Enter new category name
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
                <i className='fas fa-pen h-5 w-5 text-white group-hover:text-indigo-400 duration-150' />
              </span>
              UPDATE CATEGORY
            </button>
          </div>
          <div className='m-5 mb-10 text-xs text-gray-500'>
            This will update the current category.
          </div>
        </div>
      </div>
    </form>
  );

  const showSuccess = () => (
    <div
      className='my-1 alert alert-info bg-green-400 py-2'
      style={{ display: createdCategory ? "" : "none" }}
    >
      <h3 className='text-white font-bold'>
        {`${createdCategory}`} is updated!
      </h3>{" "}
    </div>
  );

  const showError = () => (
    <div>
      <h3
        className='my-3 font-bold bg-red-600 text-white py-2'
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </h3>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className='my-3 alert alert-success font-bold bg-orange-400 text-white py-2'>
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

  const goBack = () => (
    <div className='mt-5 mb-10'>
      <Link
        to='/admin/dashboard'
        className='text-warning bg-gray-400 text-gray-800 active:text-800 hover:text-gray-800 hover:bg-gray-500 px-5 py-2 ease-in-out rounded'
      >
        Cancel
      </Link>
    </div>
  );

  return (
    <>
      <AdminNavbar />
      <Layout
        title='Update Category'
        description={`Hey ${admin.name}, ready to update category?`}
      >
        <div className='flex flex-col row justify-center text-center'>
          <div className='mb-5 col-md-8 offset-md-2'>
            {newPostForm()}
            {showLoading()}
            {showSuccess()}
            {showError()}
            {redirectUser()}
          </div>
          {goBack()}
        </div>
      </Layout>
    </>
  );
};

export default UpdateCategory;

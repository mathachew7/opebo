import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../../auth";
import { addUserAddress } from "../../../user/apiUser";

import Modal from "../Modal/AddressModal";
import { FaTimes } from "react-icons/fa";

const AddAddress = (props) => {
  const [toggleModal, setToggleModal] = useState(false);

  function modalHandler() {
    setToggleModal(!toggleModal);
  }

  const [values, setValues] = useState({
    full_name: "",
    mobile: "",
    type: "",
    pin: "",
    street: "",
    town: "",
    state: "",
    loading: false,
    error: "",
  });

  const { user, token } = isAuthenticated();

  const {
    full_name,
    mobile,
    type,
    pin,
    street,
    town,
    state,
    loading,
    error,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    addUserAddress(user._id, token, values).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          full_name: "",
          mobile: "",
          type: "",
          pin: "",
          street: "",
          town: "",
          state: "",
          loading: false,
        });
      }
    });
  };

  const modal = () => {
    return (
      <form
        className='w-full flex justify-center items-center'
        onSubmit={clickSubmit}
      >
        <Modal
          show={toggleModal}
          modalClosed={modalHandler}
          message={"Add address modal"}
          classAdd={"-mt-20 bg-white"}
        >
          <div className='m-2 mb-6 items-center text-left border-b border-gray-500 flex justify-between items-baseline'>
            <h1 className='text-gray-700 font-semibold'>ADD NEW ADDRESS</h1>
            <button onClick={modalHandler}>
              <FaTimes className='text-gray-700' />
            </button>
          </div>

          <div className='mt-3 flex flex-wrap mb-6'>
            <div className='w-full px-2'>
              <input
                className='appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-600'
                type='text'
                placeholder='Full Name'
                onChange={handleChange("full_name")}
                // value={name}
                autoFocus
              />
            </div>
          </div>
          <div className='flex flex-wrap mb-4'>
            <div className='w-full px-2'>
              <input
                className='appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-600'
                type='text'
                placeholder='Mobile Number'
                onChange={handleChange("mobile")}
                // value={name}
                autoFocus
              />
            </div>
          </div>

          <hr className='bg-gray-500 mb-4'></hr>

          <div className='w-full px-2 mb-6'>
            <div className='relative'>
              <select
                className='appearance-none h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                onChange={handleChange("type")}
              >
                <option>Select address type</option>
                <option>Home</option>
                <option>Work</option>
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

          <div className='flex flex-wrap mb-6'>
            <div className='w-full px-2'>
              <input
                className='appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-600'
                type='text'
                placeholder='Pincode'
                onChange={handleChange("pin")}
                // value={name}
                autoFocus
              />
            </div>
          </div>

          <div className='flex flex-wrap mb-6'>
            <div className='w-full px-2'>
              <input
                className='appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-600'
                type='text'
                placeholder='Street'
                onChange={handleChange("street")}
                // value={name}
                autoFocus
              />
            </div>
          </div>

          <div className='flex flex-wrap mb-6'>
            <div className='w-full px-2'>
              <input
                className='appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-600'
                type='text'
                placeholder='Town/City'
                onChange={handleChange("city")}
                // value={name}
                autoFocus
              />
            </div>
          </div>
          <div className='flex flex-wrap mb-6'>
            <div className='w-full px-2'>
              <input
                className='appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-600'
                type='text'
                placeholder='State'
                onChange={handleChange("state")}
                // value={name}
                autoFocus
              />
            </div>
          </div>

          <div className='mt-6 mb-2 mx-2'>
            <button
              className='group relative w-full flex justify-center py-3 border border-transparent text-sm rounded text-white bg-red-500 hover:border-gray-800 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray active:bg-green-600 transition duration-550 ease-in-out uppercase font-semibold'
              type='submit'
            >
              <span className='absolute left-0 inset-y pl-3'></span>
              Add this address
            </button>
          </div>
        </Modal>
      </form>
    );
  };

  return (
    <>
      <div className='md:w-full md:absolute justify-center items-center'>
        {modal()}
      </div>
      <button
        className='px-3 py-1 text-xs font-semibold uppercase border-2 border-gray-900 rounded text-gray-900 hover:bg-gray-900 hover:text-gray-100'
        onClick={modalHandler}
      >
        Add new address
      </button>
    </>
  );
};

export default AddAddress;

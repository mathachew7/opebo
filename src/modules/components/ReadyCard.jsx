import React, { useState } from "react";
import { Link } from "react-router-dom";

// import Modal from "../../core/components/Modal/Modal";
import Modal from "../../core/components/Modal/Modal";

const ReadyCard = (props) => {
  const [toggleModal, setToggleModal] = useState(false);

  function modalHandler() {
    setToggleModal(!toggleModal);
  }

  const modal = () => {
    return (
      <div className='flex justify-center items-center'>
        <Modal
          show={toggleModal}
          modalClosed={modalHandler}
          message={"This modal is active"}
          classAdd={"bg-white"}
        >
          <div>
            <p className='text-lg font-medium text-black'>
              Do you want your tasks done by professionals?
            </p>
            <Link
              to='/about'
              className='bg-gray-900 rounded hover:text-white text-white px-3 py-1 hover:bg-gray-800'
              onClick={modalHandler}
            >
              Then click here!
            </Link>
          </div>
        </Modal>
      </div>
    );
  };

  return (
    <>
      {modal()}

      <section className='font-sans text-center py-8 lg:px-0'>
        <div className='container md:rounded flex flex-col sm:flex-row bg-orange-600 max-w-xl m-auto shadow'>
          <div className='w-full sm:w-3/4 px-10 pt-6 text-left flex flex-col justify-center'>
            <h2 className='text-white text-2xl'>Ready to get started?</h2>
            <p className='text-white mt-2 mb-6'>
              Get your desired services from our handful of services just for
              you
            </p>
          </div>
          <div className='w-full sm:w-1/2 flex justify-start sm:justify-center items-center pl-10 pb-6 sm:pl-0 sm:pb-0'>
            <button
              className=' bg-black hover:bg-gray-900 text-white hover:text-white rounded py-3 px-6 uppercase text-xs tracking-wide'
              onClick={modalHandler}
            >
              Find service
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadyCard;

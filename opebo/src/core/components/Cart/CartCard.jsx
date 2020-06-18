import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import CartImage from "./CartImage";
import { addItem, updateItem, removeItem } from "../../cartHelpers";

const CartCard = ({
  subService,
  cartUpdate = false,
  showRemoveSubButton = false,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(subService.count);

  let locationArr = [];
  locationArr = subService.location;
  const locations = locationArr.split("," || ", ");

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to='/cart' />;
    }
  };

  const showRemoveButton = (showRemoveSubButton) => {
    return (
      showRemoveSubButton && (
        <button
          onClick={() => removeItem(subService._id)}
          className='py-2 md:p-4 px-4 rounded text-red-500 hover:text-gray-800 font-bold'
        >
          <i className='fas fa-trash text-lg md:text-xl' />
        </button>
      )
    );
  };

  const handleChange = (subServiceId) => (event) => {
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(subServiceId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className='input-group mb-2'>
            <div className='flex flex-wrap'>
              <div className='flex flex-col w-3/12'>
                <div className='text-white text-center text-md font-semibold rounded-tr-md px-1 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600'>
                  ADD
                </div>
              </div>

              <div className='flex w-3/12'>
                <input
                  type='number'
                  value={count}
                  onChange={handleChange(subService._id)}
                  className='bg-white text-sm text-gray-900 text-center focus:outline-none border border-gray-800 focus:border-gray-600 rounded-l-md w-full'
                />
              </div>
            </div>
          </div>
        </div>
      )
    );
  };

  return (
    <>
      <div>
        {shouldRedirect(redirect)}
        <div className='p-1 md:p-2'>
          <div className='flex flex-row justify-between items-start'>
            <div className='flex flex-col pl-2 pt-1 md:pt-0'>
              <Link to={`/sub-services/details/${subService._id}`}>
                <h1 className=' text-black font-bold text-lg md:text-2xl'>
                  {subService.name}
                </h1>
              </Link>
              <span className='text-gray-600 text-md font-semibold -mt-1 md:-mt-2'>
                {subService.service.name}
              </span>
              <span className='text-gray-500 text-xs'>
                {subService.description.substring(0, 50)}
              </span>
              <div className='flex flex-row justify-evenly mt-1'>
                {locations.map((location, i) => (
                  <span
                    key={i}
                    className='text-gray-100 bg-orange-400 rounded-full text-xs px-2 mr-1'
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
            <div className='pl-5 md:pl-2'>
              <button className='px-3 py-1'>
                <CartImage item={subService} url='subService' />
              </button>
            </div>
          </div>
          {/* <div className='flex justify-center items-center'>
            <ShowSubServiceImage item={subService} url='subService' />
          </div> */}
        </div>
        <div className='mt-1 m-0 flex items-center justify-between px-6 py-3'>
          {showCartUpdateOptions(cartUpdate)}
          <div className='flex flex-row nowrap justify-between items-start'>
            <h1 className='ml-2 py-1 px-6 md:px-4 bg-black rounded text-gray-100 font-bold text-md md:text-xl'>
              &#8377;{subService.price}
            </h1>
            {showRemoveButton(showRemoveSubButton)}
            {/* <button className='px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded'>
            Add to card
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;

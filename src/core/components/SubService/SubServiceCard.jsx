import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowSubServiceImage from "./ShowSubServiceImage";
import { addItem, updateItem, removeItem } from "../../cartHelpers";

const SubServiceCard = ({
  subService,
  showViewButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveSubButton = false,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(subService.count);

  let locationArr = [];
  locationArr = subService.location;
  const locations = locationArr.split("," || ", ");

  const addToCart = () => {
    addItem(subService, () => {
      setRedirect(true);
    });
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to='/cart' />;
    }
  };

  const showAddToCart = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button
          onClick={addToCart}
          className='px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded'
        >
          Add to card
        </button>
      )
    );
  };

  const showRemoveButton = (showRemoveSubButton) => {
    return (
      showRemoveSubButton && (
        <button
          onClick={() => removeItem(subService._id)}
          className='px-3 py-1 bg-red-400 text-sm text-gray-100 font-semibold rounded'
        >
          Remove Product
        </button>
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
                <ShowSubServiceImage item={subService} url='subService' />
              </button>
            </div>
          </div>
          {/* <div className='flex justify-center items-center'>
            <ShowSubServiceImage item={subService} url='subService' />
          </div> */}
        </div>
        <div className='mt-1 m-0 flex items-center justify-between px-4 py-2 bg-black'>
          <h1 className='py-2 text-gray-200 font-bold text-md md:text-xl'>
            &#8377; {subService.price}
          </h1>
          {showRemoveButton(showRemoveSubButton)}
          {showAddToCart(showAddToCartButton)}
          {/* <button className='px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded'>
            Add to card
          </button> */}
        </div>
      </div>
    </>
  );
};

export default SubServiceCard;

import React from "react";
import CartImage from "./CartImage";

const CheckoutCard = ({ subService }) => {
  return (
    <>
      <div className='mt-1 py-1 border border-gray-400 rounded'>
        <div className='flex bg-white mb-2 rounded-lg overflow-hidden'>
          <CartImage item={subService} url='subService' />

          <div className='w-2/3 md:w-3/4 p-4 flex flex-row justify-between items-start'>
            <div className='flex flex-col'>
              <p className='text-black font-semibold text-sm'>
                {subService.name}
              </p>
              <p className='-mt-3 text-green-600 text-xs'>
                {subService.service.name}
              </p>
            </div>

            <h1 className='text-gray-700 font-semibold text-sm'>
              &#8377;{subService.price}
            </h1>
          </div>
        </div>
      </div>
      <hr className='text-gray-300' />
    </>
  );
};

export default CheckoutCard;

import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import CartImage from "./CartImage";
import { addItem, updateItem, removeItem } from "../../cartHelpers";
import SubService from "../../../pages/SubService";
import "../css/inputStyle.css";
import Toast from "light-toast";

const CartCard2 = ({
  subService,
  cartUpdate = false,
  showAddToCartButton = true,
  showRemoveSubButton = false,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(subService.count);

  // const shouldRedirect = (redirect) => {
  //   if (redirect) {
  //     window.location.reload();
  //     return <Redirect to='/cart' />;
  //   }
  // };
  let locations = "";

  useEffect(() => {
    locations = subService.location.split("," || ", ");
  }, [subService]);

  const addToCart = () => {
    addItem(subService, () => {
      setRedirect(true);
      window.location.reload();
      Toast.success(subService.name + " added to cart!", 1000, () => {
        // do something after the toast disappears
      });
    });
  };

  const removeFromCart = () => {
    removeItem(subService._id, () => {
      setRedirect(true);
      window.location.reload();
      Toast.success(subService.name + " removed from cart!", 1000, () => {
        // do something after the toast disappears
      });
    });
  };

  const showAddToCart = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button
          onClick={addToCart}
          className='px-4 py-2 bg-orange-500 shadow-sm text-white hover:bg-orange-600 hover:text-white text-sm font-bold uppercase rounded'
        >
          {/* <i className='fas fa-trash mr-1 md:mr-5' /> */}
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveButton = (showRemoveSubButton) => {
    return (
      showRemoveSubButton && (
        <button
          onClick={removeFromCart}
          className='px-4 py-2 bg-gray-300 shadow-sm text-gray-800 hover:bg-red-400 hover:text-white text-sm font-bold uppercase rounded'
        >
          <i className='fas fa-trash text-base mr-1' />
          Remove
        </button>
      )
    );
  };

  const handleChange = (subServiceId) => (event) => {
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(subServiceId, event.target.value);
      window.location.reload();
      Toast.info(event.target.value + " items added!", 1000, () => {
        // do something after the toast disappears
      });
    }
  };

  const add = (c, id) => {
    setCount(c < 1 ? 1 : c + 1);
    if (c + 1 >= 1) {
      updateItem(id, c + 1);
      window.location.reload();
      Toast.info("1 item added!", 1000, () => {
        // do something after the toast disappears
      });
    }
  };

  const minus = (c, id) => {
    setCount(c < 1 ? 1 : c - 1);
    if (c - 1 >= 1) {
      updateItem(id, c - 1);
      window.location.reload();
      Toast.info("1 item removed!", 1000, () => {
        // do something after the toast disappears
      });
    }
    if (c - 1 === 0) {
      removeItem(id);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div className='flex flex-row'>
          <div className='flex flex-col w-10'>
            <button
              className='text-white text-center text-lg font-semibold rounded-l p-1 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600'
              onClick={() => add(count, subService._id)}
            >
              +
            </button>
          </div>

          <div className='flex w-10 md:w-16'>
            <input
              type='number'
              value={count}
              onChange={handleChange(subService._id)}
              className='bg-white text-xs text-gray-900 text-center focus:outline-none border border-gray-800 focus:border-gray-600 font-bold w-full rounded-none'
            />
          </div>
          <div className='flex flex-col w-10'>
            <button
              className='text-white text-center text-lg font-semibold rounded-r p-1 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600'
              onClick={() => minus(count, subService._id)}
            >
              -
            </button>
          </div>
        </div>
      )
    );
  };

  return (
    <>
      {/* {shouldRedirect(redirect)} */}

      <div className='mb-2 py-1 border border-gray-200'>
        <div className='flex bg-white mb-2 rounded-lg overflow-hidden'>
          <CartImage item={subService} url='subService' />
          <div className='w-2/3 md:w-3/4 p-4'>
            <div className='flex flex-col'>
              <Link
                to={`/sub-services/details/${subService._id}`}
                className='text-black hover:text-black font-bold text-md md:text-2xl'
              >
                {subService.name}
              </Link>
              <span className='text-green-600 text-xs font-semibold -mt-1 md:-mt-2'>
                {subService.service.name}
              </span>
            </div>
            <div className='flex flex-row justify-start mt-1'>
              {locations &&
                locations.map((location, i) => (
                  <span key={i} className='text-orange-400 text-xs pr-2'>
                    {location} &bull;
                  </span>
                ))}
            </div>
            <p className='text-gray-600 text-xs'>
              {subService.description.substring(0, 80)}...
            </p>

            <div className='flex justify-between items-baseline mt-1 md:mt-10'>
              <h1 className='text-gray-700 font-bold md:text-xl'>
                &#8377;{subService.price}
              </h1>
            </div>
          </div>
        </div>
        <hr className='bg-gray-300' />
        <div className='flex flex-row justify-between items-center px-5 py-3'>
          {showCartUpdateOptions(cartUpdate)}
          <div className='text-white text-xs font-bold rounded'>
            {showAddToCart(showAddToCartButton)}
            {showRemoveButton(showRemoveSubButton)}
          </div>
        </div>
      </div>
      <hr className='text-gray-300' />
    </>
  );
};

export default CartCard2;

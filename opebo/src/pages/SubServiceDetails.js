import React, { useState, useEffect } from "react";
import Navbar from "../core/components/Navbar";
import Subscribe from "../modules/components/Subscribe";
import AppFeature from "../modules/components/AppFeature";
import NewFeature from "../modules/components/NewFeature";
import Footer from "../modules/components/Footer";
import {
  getSubServices,
  getSubService,
  getSubServiceByServiceId,
  getServices,
  getService,
  getCategory,
} from "../core/apiCore";
import { withRouter } from "react-router-dom";

import Spinner from "../core/components/Spinner";
import ShowSubServiceImage from "../core/components/SubService/ShowSubServiceImage";
import { addItem } from "../core/cartHelpers";

const SubServiceDetails = (props) => {
  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState({});
  const [subService, setSubService] = useState({});
  const [locationArr, setLocationArr] = useState([]);
  const [serviceId, setServiceId] = useState({});
  const [redirect, setRedirect] = useState(false);

  const init = () => {
    setLoading(true);

    getServices().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setServices(data);
      }
    });
  };

  const singleSubService = (subServiceId) => {
    setLoading(true);

    getSubService(subServiceId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setLoading(false);
        setSubService(data);
        fetchService(data.service._id);
        setLocationArr(data.location.split("," || ", "));
      }
    });

    getService(serviceId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setLoading(false);
        setService(data);
      }
    });
  };

  useEffect(() => {
    init();
    const subServiceId = props.match.params.subServiceId;
    singleSubService(subServiceId);
  }, [props]);

  const showLoading = () => loading && <Spinner />;

  const addToCart = () => {
    addItem(subService, () => {
      setRedirect(true);
      window.location.reload();
    });
  };

  const fetchService = (serviceId) => {
    setLoading(true);

    getService(serviceId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setLoading(false);
        setService(data);
      }
    });
  };

  return (
    <>
      {loading ? (
        showLoading()
      ) : (
        <>
          <Navbar />

          <div className='flex flex-col md:flex-row md:max-h-screen'>
            <div className='lg:w-full p-5 md:px-24 lg:border-l border-gray-400'>
              <p className='-mb-1 text-lg font-normal text-gray-400 uppercase'>
                {service.name}
              </p>
              <div className='flex flex-row justify-start items-center'>
                <div className='flex flex-row'>
                  <h2 className='font-bold text-3xl'>{subService.name}</h2>
                  <ShowSubServiceImage item={subService} url='subService' />
                </div>
              </div>

              <h3 className='text-lg font-semibold'>Locations :</h3>
              <div className='flex flex-row justify-start mt-1'>
                {locationArr.map((location, i) => (
                  <span
                    key={i}
                    className='text-gray-100 bg-orange-400 rounded-full text-xs px-2 mr-2'
                  >
                    {location}
                  </span>
                ))}
              </div>

              <h3 className='mt-5 text-lg font-semibold'>
                About the service :
              </h3>
              <p className='text-xs md:text-base'>{subService.description}</p>

              <div className='flex flex-row justify-between py-2'>
                <h3 className='mt-5 text-lg font-semibold'>
                  Price:
                  <span className='ml-2 px-3 py-1 text-gray-900 text-lg font-semibold bg-gray-300 rounded-lg'>
                    &#8377;{subService.price}
                  </span>
                </h3>
                <button
                  onClick={addToCart}
                  className='px-4 py-1 text-lg font-semibold rounded-lg text-white bg-green-600 hover:bg-black'
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <hr className='bg-gray-600'></hr>

          <AppFeature />
          <NewFeature />
          <Subscribe />
          <Footer />
        </>
      )}
    </>
  );
};

export default withRouter(SubServiceDetails);

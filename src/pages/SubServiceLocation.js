import React, { useState, useEffect } from "react";
import Navbar from "../core/components/Navbar";
import Subscribe from "../modules/components/Subscribe";
import AppFeature from "../modules/components/AppFeature";
import NewFeature from "../modules/components/NewFeature";
import Footer from "../modules/components/Footer";
import {
  getSubServices,
  getSubServiceByServiceId,
  getServices,
  getService,
  getCategory,
} from "../core/apiCore";
import { withRouter } from "react-router-dom";
//import SubServiceCard from "../core/components/SubService/SubServiceCard";

import CartCard2 from "../core/components/Cart/CartCard2";

import Spinner from "../core/components/Spinner";

const SubServiceLocation = (props) => {
  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([]);
  const [subServicesLocation, setSubServicesLocation] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState({});
  const [location, setLocation] = useState("");

  const [res, setRes] = useState([]);

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

  const loadSubServices = (serviceId, location) => {
    setLoading(true);

    getService(serviceId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setLoading(false);
        setService(data);
      }
    });

    getSubServiceByServiceId(serviceId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setLoading(false);

        setSubServices(data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  useEffect(() => {
    init();
    const serviceId = props.match.params.serviceId;
    console.log(serviceId);
    const location = props.match.params.location;
    loadSubServices(serviceId, location);
  }, [props]);
  const showLoading = () => loading && <Spinner />;

  const displayLeft = () => {
    return (
      <div className='p-2 md:px-5 border border-gray-400 '>
        <h1 className='text-3xl font-bold text-black'>How it works?</h1>
        <p className='flex flex-row justify-start items-start text-md text-black font-bold'>
          <i className='fas fa-cart-arrow-down text-lg bg-black text-white rounded-lg p-2' />
          <span className='ml-3'>Choose the type of service you want</span>
        </p>
        <p className='flex flex-row justify-start items-start text-md text-black font-bold'>
          <i className='fas fa-calendar-check p-2 text-lg bg-black rounded-lg text-white ' />
          <span className='ml-3 flex flex-col'>
            Choose your desired date and time slot
            <span className='text-xs font-normal text-gray-600'>
              We service from 9:00 am to 9:00pm
            </span>
          </span>
        </p>

        <p className='flex flex-row justify-start items-start text-md text-black font-bold'>
          <i className='fas fa-glass-cheers text-lg bg-black text-white rounded-lg p-2' />

          <span className='ml-3 flex flex-col'>
            Enjoy hassle-free services with Opebo
            <span className='text-xs font-normal text-gray-600'>
              Our professional with get in touch with you one hour before the
              service.
            </span>
          </span>
        </p>
        <div>
          {subServices.map((subService, i) => (
            <div className='col-md-3' key={i}>
              <h1 className='text-lg font-bold text-gray-900'>
                {subService.name}
              </h1>
              <p className='text-xs font-medium text-orange-500'>
                {subService.service.name}
              </p>

              <p className='text-md font-sans font-normal'>
                {subService.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const countMessage = (items) => {
    if (items && items.length > 0) {
      if (items.length === 1) {
        return `${items.length} service available.`;
      } else {
        return `${items.length} services available`;
      }
    }
    if (items && items.length < 1) {
      return `Sorry, No services available`;
    }
  };

  return (
    <>
      {loading ? (
        showLoading()
      ) : (
        <>
          <Navbar />

          <div className='flex flex-col-reverse md:flex-row md:max-h-screen'>
            <div className='lg:w-1/2 p-3 md:p-5 md:overflow-y-scroll max-h-full bg-gray-200 '>
              {displayLeft()}
            </div>

            <div className='lg:w-2/3 p-3 md:px-5 md:overflow-y-scroll lg:border-l border-gray-400'>
              <h2 className='font-bold text-3xl'>{service.name}</h2>
              <p className='-mt-5 text-xs text-gray-500'>
                Select your choice of services
              </p>
              <p className='text-sm font-bold text-gray-800 mb-5'>
                {countMessage(subServices)}
              </p>

              <div className='flex flex-wrap justify-center items-start px-3 md:px-5'>
                {subServices.map((subService, i) => (
                  // <div
                  //   key={i}
                  //   className='w-full md:w-8/12 m-2 rounded overflow-hidden cursor-pointer bg-gray-300 border hover:border-orange-400 rounded-lg hover:shadow-2xl antialiased'
                  // >
                  //   <SubServiceCard subService={subService} />
                  //   </div>
                  <CartCard2
                    key={i}
                    subService={subService}
                    cartUpdate={false}
                    showAddToCartButton={true}
                    showRemoveSubButton={false}
                  />
                ))}
              </div>
            </div>
          </div>

          <AppFeature />
          <NewFeature />
          <Subscribe />
          <Footer />
        </>
      )}
    </>
  );
};

export default withRouter(SubServiceLocation);

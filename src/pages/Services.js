import React, { useState, useEffect } from "react";
import Subscribe from "../modules/components/Subscribe";
import AppFeature from "../modules/components/AppFeature";
import NewFeature from "../modules/components/NewFeature";
import Navbar from "../core/components/Navbar";
import Footer from "../modules/components/Footer";
import ServiceCard from "../core/components/Service/ServiceCard";
import {
  getServiceByCategoryId,
  getCategoriesLimited,
  getCategory,
} from "../core/apiCore";
import { Link, withRouter } from "react-router-dom";

import Spinner from "../core/components/Spinner";

const Services = (props) => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({});

  const init = () => {
    setLoading(true);

    getCategoriesLimited().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const loadServices = (categoryId) => {
    setLoading(true);

    getCategory(categoryId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setLoading(false);
        setCategory(data);
      }
    });

    getServiceByCategoryId(categoryId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setLoading(false);
        setServices(data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  // const loadMore = () => {
  //   let toSkip = skip + limit;
  //   getServiceByCategoryId(toSkip, limit).then((data) => {
  //     if (data.error) {
  //       setError(data.error);
  //     } else {
  //       setResults([...data.data]);
  //       setSize(data.size);
  //       setSkip(toSkip);
  //     }
  //   });
  // };

  // const loadMoreButton = () => {
  //   return (
  //     size > 0 && (
  //       <button
  //         onClick={loadMore}
  //         className='mb-10 px-4 py-3 bg-gray-400 text-black font-bold'
  //       >
  //         Load more
  //       </button>
  //     )
  //   );
  // };

  useEffect(() => {
    init();
    const categoryId = props.match.params.categoryId;
    loadServices(categoryId);
  }, [props]);

  const displayLeft = () => {
    return (
      <div className='p-2 py-5 md:px-5 border border-gray-400 '>
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
          {services.map((service, i) => (
            <div className='col-md-3' key={i}>
              <h1 className='text-lg font-bold text-gray-900'>
                {service.name}
              </h1>
              <p className='text-xs font-medium text-orange-500'>
                {service.category.name}
              </p>

              <p className='text-md font-sans font-normal'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const displayCategories = () => {
    return (
      <div className='my-2 flex sm:flex-row flex-col'>
        <div className='flex flex-col mb-1 px-5 py-3 sm:mb-0 border border-gray-300'>
          <h1 className='text-2xl text-left font-bold'>
            Other popular categories
          </h1>
          {categories.map((category, i) => (
            <Link to={`/services/${category._id}`} key={i}>
              <button
                className='mt-2 w-full px-4 py-2 bg-white border-2 border-black text-black hover:bg-black hover:text-white active:bg-orange active:text-white rounded font-bold'
                key={i}
              >
                {category.name}
              </button>
            </Link>
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

  const showLoading = () => loading && <Spinner />;

  return (
    <>
      {loading ? (
        showLoading()
      ) : (
        <>
          <Navbar />

          <div className='flex flex-col-reverse md:flex-row '>
            <div className='lg:w-1/2 p-3 md:p-5 md:overflow-y-scroll max-h-full bg-gray-100 '>
              {displayLeft()}
            </div>
            <div className='lg:w-1/4 p-3 md:p-5 bg-white'>
              {displayCategories()}
            </div>
            <div className='lg:w-2/3 p-3 md:px-5 md:overflow-y-scroll lg:border-l border-gray-400'>
              <h2 className='font-bold text-3xl'>{category.name}</h2>
              <p className='-mt-5 text-xs text-gray-500'>
                Select your choice of services
              </p>
              <p className='text-sm font-bold text-gray-800 mb-5'>
                {countMessage(services)}
              </p>

              {services.map((service, i) => (
                <div className='col-md-3' key={i}>
                  <ServiceCard service={service} />
                </div>
              ))}
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

export default withRouter(Services);

import React from "react";
import { Link } from "react-router-dom";
import ShowServiceImage from "./ShowServiceImage";

const ServiceCard = ({ service }) => {
  //const [redirect, setRedirect] = useSate(false);

  return (
    <div className='mt-3 antialiased'>
      <Link
        className='flex max-w-xl items-center bg-white border border-gray-300 hover:border-2 hover:border-orange-400 rounded overflow-hidden shadow-sm'
        to={`/sub-services/${service._id}`}
      >
        <ShowServiceImage item={service} url='service' />
        <div className='w-7/12 p-4'>
          <h1 className='text-black font-bold text-xl'>{service.name}</h1>

          <div className='flex flex-row items-center items-baseline'>
            <p className=' text-gray-600 text-xs'>Category: </p>
            <span className='ml-1 px-3 rounded-full align-middle text-center bg-red-400 text-gray-100 text-xs'>
              {service.category && service.category.name}
            </span>
          </div>
        </div>
        <div className='w-2/12 p-4'>
          <i className='fas fa-chevron-right text-xl md:text-2xl' />
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;

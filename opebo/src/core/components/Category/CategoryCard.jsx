import React from "react";
import { Link } from "react-router-dom";
import ShowCategoryImage from "./ShowCategoryImage";

const CategoryCard = ({ category }) => {
  return (
    <>
      <Link
        to={`/services/${category._id}`}
        className='w-1/6 md:w-1/12 pb-1 m-1 md:m-2 rounded overflow-hidden cursor-pointer'
      >
        <div className='bg-gray-300 border hover:border-orange-400 rounded-lg p-1 md:p-2 hover:shadow-xl'>
          <ShowCategoryImage item={category} url='category' />
        </div>
        <p className='md:mt-2 text-center text-gray-800 active:text:900 hover:text-900 font-semibold text-xs md:text-sm'>
          {category.name}
        </p>
      </Link>
    </>
  );
};

export default CategoryCard;

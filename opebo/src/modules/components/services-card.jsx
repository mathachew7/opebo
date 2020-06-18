import React from "react";
import { Link } from "react-router-dom";

const salon = require("../../assets/services/salon.svg");
const car = require("../../assets/services/car.svg");
const clean = require("../../assets/services/clean.svg");
const electric = require("../../assets/services/electric.svg");
const food = require("../../assets/services/food.svg");
const home = require("../../assets/services/home.svg");
const makeup = require("../../assets/services/makeup.svg");
const massage = require("../../assets/services/massage.svg");
const paint = require("../../assets/services/paint.svg");
const pet = require("../../assets/services/pet.svg");

function ServiceCard() {
  return (
    <section className='antialiased'>
      <div className='mt-4 text-center'>
        <p className='text-2xl font-sans font-bold text-black'>
          <span className='text-orange-600'>O</span>pe
          <span className='text-orange-600'>B</span>o
          <span className='text-sm font-medium'> services on demand</span>
        </p>
      </div>

      <div className='flex flex-wrap justify-center items-start px-2 md:px-5'>
        <Link
          to='/'
          className='w-1/6 md:w-1/12 pb-1 m-1 rounded overflow-hidden cursor-pointer'
        >
          <div className='bg-gray-300 border hover:border-orange-400 rounded-lg p-1 md:p-2'>
            <img src={salon} className='p-2' alt='random' />
          </div>
          <p className='md:mt-2 text-center text-gray-800 active:text:900 hover:text-900 font-medium font-semibold text-xs md:text-lg'>
            Salon
          </p>
        </Link>

        <Link
          to='/'
          className='w-1/6 md:w-1/12 pb-1 m-1 rounded overflow-hidden cursor-pointer'
        >
          <div className='bg-gray-300 border hover:border-orange-400 rounded-lg p-1 md:p-2'>
            <img src={car} className='p-2' alt='random' />
          </div>
          <p className='md:mt-2 text-center text-gray-800 active:text:900 hover:text-900 font-medium font-semibold text-xs md:text-lg'>
            Car Service
          </p>
        </Link>

        <Link
          to='/'
          className='w-1/6 md:w-1/12 pb-1 m-1 rounded overflow-hidden cursor-pointer'
        >
          <div className='bg-gray-300 border hover:border-orange-400 rounded-lg p-1 md:p-2'>
            <img src={clean} className='p-2' alt='random' />
          </div>
          <p className='md:mt-2 text-center text-gray-800 active:text:900 hover:text-900 font-medium font-semibold text-xs md:text-lg'>
            Cleaning
          </p>
        </Link>

        <Link
          to='/'
          className='w-1/6 md:w-1/12 pb-1 m-1 rounded overflow-hidden cursor-pointer'
        >
          <div className='bg-gray-300 border hover:border-orange-400 rounded-lg p-1 md:p-2'>
            <img src={electric} className='p-2' alt='random' />
          </div>
          <p className='md:mt-2 text-center text-gray-800 active:text:900 hover:text-900 font-medium font-semibold text-xs md:text-lg'>
            Electrician
          </p>
        </Link>

        <Link
          to='/'
          className='w-1/6 md:w-1/12 pb-1 m-1 rounded overflow-hidden cursor-pointer'
        >
          <div className='bg-gray-300 border hover:border-orange-400 rounded-lg p-1 md:p-2'>
            <img src={food} className='p-2' alt='random' />
          </div>
          <p className='md:mt-2 text-center text-gray-800 active:text:900 hover:text-900 font-medium font-semibold text-xs md:text-lg'>
            Food
          </p>
        </Link>

        <Link
          to='/'
          className='w-1/6 md:w-1/12 pb-1 m-1 rounded overflow-hidden cursor-pointer'
        >
          <div className='bg-gray-300 border hover:border-orange-400 rounded-lg p-1 md:p-2'>
            <img src={home} className='p-2' alt='random' />
          </div>
          <p className='md:mt-2 text-center text-gray-800 active:text:900 hover:text-900 font-medium font-semibold text-xs md:text-lg'>
            Home
          </p>
        </Link>

        <Link
          to='/'
          className='w-1/6 md:w-1/12 pb-1 m-1 rounded overflow-hidden cursor-pointer'
        >
          <div className='bg-gray-300 border hover:border-orange-400 rounded-lg p-1 md:p-2'>
            <img src={makeup} className='p-2' alt='random' />
          </div>
          <p className='md:mt-2 text-center text-gray-800 active:text:900 hover:text-900 font-medium font-semibold text-xs md:text-lg'>
            Makeup
          </p>
        </Link>

        <Link
          to='/'
          className='w-1/6 md:w-1/12 pb-1 m-1 rounded overflow-hidden cursor-pointer'
        >
          <div className='bg-gray-300 border hover:border-orange-400 rounded-lg p-1 md:p-2'>
            <img src={massage} className='p-2' alt='random' />
          </div>
          <p className='md:mt-2 text-center text-gray-800 active:text:900 hover:text-900 font-medium font-semibold text-xs md:text-lg'>
            Massage
          </p>
        </Link>

        <Link
          to='/'
          className='w-1/6 md:w-1/12 pb-1 m-1 rounded overflow-hidden cursor-pointer'
        >
          <div className='bg-gray-300 border hover:border-orange-400 rounded-lg p-1 md:p-2'>
            <img src={paint} className='p-2' alt='random' />
          </div>
          <p className='md:mt-2 text-center text-gray-800 active:text:900 hover:text-900 font-medium font-semibold text-xs md:text-lg'>
            Paint
          </p>
        </Link>

        <Link
          to='/'
          className='w-1/6 md:w-1/12 pb-1 m-1 rounded overflow-hidden cursor-pointer'
        >
          <div className='bg-gray-300 border hover:border-orange-400 rounded-lg p-1 md:p-2'>
            <img src={pet} className='p-2' alt='random' />
          </div>
          <p className='md:mt-2 text-center text-gray-800 active:text:900 hover:text-900 font-medium font-semibold text-xs md:text-lg'>
            Pet Care
          </p>
        </Link>
      </div>
    </section>
  );
}

export default ServiceCard;

import React from "react";
import {
  FaBell,
  FaBullseye,
  FaCheck,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaLaugh,
  FaRegGrin,
} from "react-icons/fa";
import Navbar from "../core/components/Navbar";
import Footer from "../modules/components/Footer";
import AppFeature from "../modules/components/AppFeature";
import NewFeature from "../modules/components/NewFeature";

const map = require("../assets/images/map.svg");
const phone = require("../assets/images/phone-about.png");

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/investors/", false, /\.(png|jpe?g|svg)$/)
);

const About = () => {
  return (
    <>
      <Navbar />
      <section className='font-sans container m-auto text-center py-8 antialiased'>
        <label className='font-bold text-black text-3xl'>About Us</label>
        <p className='mb-4 font-normal px-5 max-w-md text-gray-700 m-auto'>
          To help to serve better we need to make you know about us better
        </p>
        <hr className='border-b w-1/2 m-auto my-6 border-orange-300' />
        <div>
          <h2 className='font-semibold text-xl md:text-2xl'>Who are we?</h2>
          <p className='mb-4 font-normal px-10 md:px-20 text-gray-700 m-auto text-justify'>
            OpeBo Industries Lmt. is an at-home service provider in India. We
            intend to build a comprehensive network of services to bridge the
            demand-supply gap by providing a platform to all skilled and
            experienced professionals and local service providers to connect
            with those who are in need of their services. From medical, legal
            and carpentry services to security, home tutorial and salon
            services, we provide them all. We are a compact package that helps
            customers to hire the best quality service professionals at minimum
            cost. These professionals are trained and verified before being
            allowed to list their services on our platform.
          </p>
          <p className='mt-10 mb-4 font-medium px-10 md:px-24 text-lg md:text-xl text-gray-900 m-auto'>
            Our Mission is to empower millions of service professionals by
            delivering services at-home in a way that has never been experienced
            before.
          </p>
        </div>
        <section className='mt-10 bg-purple-800 md:bg-white md:px-16 py-10 font-sans'>
          <div className='container m-auto flex flex-wrap justify-center items-start'>
            <h1 className='w-full text-2xl md:text-3xl text-white  md:text-orange-500 md:w-1/4 font-medium tracking-normal md:mb-0'>
              Important
              <br />
              Stats
            </h1>
            <div className='w-1/3 md:w-1/4 flex-col px-5'>
              <h2 className='text-2xl md:text-4xl text-gray-200 md:text-gray-700 font-bold'>
                2000+
              </h2>
              <span className='md:text-xl mr-2 text-gray-500 md:text-gray-600'>
                Trained Professionals
              </span>
            </div>
            <div className='w-1/3 md:w-1/4 flex-col'>
              <h2 className='text-2xl md:text-4xl text-gray-200 md:text-gray-700 font-bold'>
                10K+
              </h2>
              <span className='md:text-xl mr-2 text-gray-500 md:text-gray-600'>
                Happy & satisfied customers
              </span>
            </div>
            <div className='w-1/3 md:w-1/4 flex-col'>
              <h2 className='text-2xl md:text-4xl text-gray-200 md:text-gray-700 font-bold'>
                3
              </h2>
              <span className='md:text-xl mr-2 text-gray-500 md:text-gray-600'>
                Cities across India
              </span>
            </div>
          </div>
        </section>

        <section>
          <div className='mt-10'>
            <h2 className='font-bold text-xl md:text-2xl'>How we do it</h2>
            <p className='mb-4 font-normal px-10 md:px-24 md:text-base text-gray-700 m-auto'>
              Opebo provides a platform that allows skilled and experienced
              professionals to connect with users looking for specific services.
              All the professionals, though experienced and skilled, undergo
              intensive training modules before being allowed to list their
              services on the platform. Once on the platform, our match-making
              algorithm identifies professionals who are closest to the users’
              requirements and available at the requested time and date.
            </p>
            <p className='mt-10 font-semibold md:text-lg px-5 text-orange-600'>
              <i>
                We are trying to provide the best at-home service just for you.
              </i>
            </p>
          </div>
        </section>

        <section className='font-sans container m-auto flex flex-col lg:flex-row justify-center my-8'>
          <div className='order-2 lg:order-1 w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 mt-8'>
            <FaBell className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />

            <h2 className='text-black mb-2 font-medium text-xl'>
              Choose a service
            </h2>
            <p className='text-gray-700 leading-normal mb-8 px-10 md:p-0'>
              Choose your desired service from our handful of services provided
              just for you.
            </p>
            <FaBullseye className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />
            <h2 className='text-black mb-2 font-medium text-xl'>
              Choose your category
            </h2>
            <p className='text-gray-700 leading-normal mb-8 px-10 md:p-0'>
              There are a wide variety of categories available for each services
              to meet the need of the customer.
            </p>
            <FaCheck className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />
            <h2 className='text-black mb-2 font-medium text-xl'>
              Book your choice
            </h2>
            <p className='text-gray-700 leading-normal px-10 md:p-0'>
              Select from the choices we provide and book your service at ease.
            </p>
          </div>
          <div className='order-1 lg:order-2 w-full lg:w-1/2 max-w-sm m-auto mb-6 lg:mb-0'>
            <img src={phone} alt='' />
          </div>
          <div className='order-last w-full lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 mr-8'>
            <FaMapMarkerAlt className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />
            <h2 className='text-black mb-2 font-medium text-xl'>
              Booking assigned
            </h2>
            <p className='text-gray-700 leading-normal mb-8 px-10 md:p-0'>
              Your booking will be assigned to one of the nearest vendors in
              your area upon successful booking.
            </p>
            <FaHandsHelping className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />
            <h2 className='text-black mb-2 font-medium text-xl'>
              Vendor will accept the job.
            </h2>
            <p className='text-gray-700 leading-normal mb-8 px-10 md:p-0'>
              The designated vendor will be provided to you at your doorstep. If
              not we will assign a new one.
            </p>
            <FaLaugh className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />
            <h2 className='text-black mb-2 font-medium text-xl'>
              Customer Satisfaction
            </h2>
            <p className='text-gray-700 leading-normal px-10 md:p-0'>
              We want to provide you the best services at home with ease.
            </p>
          </div>
        </section>

        <section>
          <div className='mt-16'>
            <h2 className='font-bold text-2xl'>Our Story so far</h2>
            <p className='mb-4 font-normal px-10 md:px-24 md:text-xl text-gray-900 m-auto'>
              Opebo is now established in 3 cities all across India in: Delhi,
              Patna and Ludhiana. We are expanding our services across India in
              the coming future.
            </p>
          </div>
          <div className='flex p-10 justify-center items-center'>
            <img src={map} alt='map'></img>
          </div>
        </section>

        <hr className='border-b w-full m-auto my-6 border-orange-300' />
      </section>
      <section className='my-3 font-sans container m-auto'>
        <div className='text-center'>
          <i className='fas fa-fist-raised text-6xl text-green-400' />
          <h1 className='my-4 font-bold text-2xl px-5'>Our Leadership Team</h1>
          <p className='leading-normal mb-4 max-w-sm m-auto text-base'>
            The team which made this possible.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center md:flex-row my-8'>
          <div className='m-2 w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8 border border-transparent hover:border-purple-500 hover:shadow-md bg-white hover:transform-scale-subtle transition-normal hover:show-child'>
            <h3 className='mt-4 mb-1 text-lg font-bold'>
              Abhay Kumar Bharti &#128512;
            </h3>

            <p className='mt-4 text-center text-gray-700 leading-normal px-6 hover:block'>
              Abhay Kumar Bharti is the Director of Opebo Industries Lmt. and is
              responsible for handling the technical and services related work
              in the company and bringing in investors for the company.
            </p>
          </div>
          <div className='m-2 w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8 hover:shadow-md border border-transparent hover:border-purple-500 bg-white hover:transform-scale-subtle transition-normal hover:show-child'>
            <h3 className='mt-4 mb-1 text-lg font-bold'>
              Anmol Bharti &#128521;
            </h3>
            <p className='mt-4 text-center text-gray-700 leading-normal px-6 hover:block'>
              Anmol Bharti is the Founder and Director of Opebo Industries Lmt.
              When not busy at work, Anmol Bharti enjoys immersing himself in
              interesting experiences be it socializing, travelling around the
              world.
            </p>
          </div>
          <div className='m-2 w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8 hover:shadow-md border border-transparent hover:border-purple-500 bg-white hover:transform-scale-subtle transition-normal hover:show-child'>
            <h3 className='mt-4 mb-1 text-lg font-bold'>
              Ramkrishna Kumar &#128526;
            </h3>
            <p className='mt-4 text-center text-gray-700 leading-normal px-6 hover:block'>
              Ramkrishna Kumar is the Director of Opebo Industries Lmt. When not
              busy at work, Ramkrishna Kumar enjoys immersing himself in
              interesting experiences be it socializing and travelling
            </p>
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      {/* <section className='bg-white py-4 font-sans'>
        <div className='text-center'>
          <h1 className='font-bold text-2xl'>
            Our Investors
            <span className='ml-2 text-3xl text-green-400'>&#8377;</span>
          </h1>
          <p className='leading-normal mb-4 max-w-sm m-auto text-base'>
            Here are our Investors.
          </p>
        </div>
        <div className='mt-10 container max-w-xl m-auto flex flex-wrap items-center justify-center'>
          <div className='w-1/2 md:w-1/4 lg:w-1/5 flex flex-col mb-8 px-5'>
            <div className='overflow-hidden bg-white hover:shadow-raised'>
              <img className='w-full' src={images["0.png"]} alt='investor1' />
            </div>
          </div>

          <div className='w-1/3 md:w-1/4 lg:w-1/6 flex flex-col mb-8 px-5'>
            <div className='overflow-hidden bg-white hover:shadow-raised'>
              <img className='w-full' src={images["1.png"]} alt='investor2' />
            </div>
          </div>

          <div className='w-1/3 md:w-1/4 lg:w-1/5 flex flex-col mb-8 px-3'>
            <div className='overflow-hidden bg-white hover:shadow-raised'>
              <img className='w-full' src={images["2.png"]} alt='investor3' />
            </div>
          </div>

          <div className='w-1/2 md:w-1/4 lg:w-1/5 flex flex-col mb-8 px-3'>
            <div className='overflow-hidden bg-white hover:shadow-raised'>
              <img className='w-full' src={images["5.png"]} alt='investor4' />
            </div>
          </div>

          <div className='w-1/2 md:w-1/4 lg:w-1/5 flex flex-col mb-8 px-3'>
            <div className='overflow-hidden bg-white hover:shadow-raised'>
              <img className='w-full' src={images["4.png"]} alt='investor5' />
            </div>
          </div>
          <div className='w-1/3 md:w-1/4 lg:w-1/5 flex flex-col mb-8 px-3'>
            <div className='overflow-hidden bg-white hover:shadow-raised'>
              <img className='w-full' src={images["6.png"]} alt='investor5' />
            </div>
          </div>
        </div>
      </section> */}
      <section className='mt-8 justify-center flex justify-center py-10 items-center px-4 '>
        <div className='w-full md:w-1/2 flex flex-col py-4 bg-gray-100 justify-center items-center shadow-lg'>
          <FaRegGrin className='text-green-400 text-5xl' />
          <h1 className='mt-3 font-medium text-lg text-center'>
            You could be a part of our journey. Interested to join us?
          </h1>
          <button className='mt-4 bg-green-400 font-bold text-white px-16 py-3 rounded hover:bg-green-500'>
            APPLY NOW
          </button>
        </div>
      </section>
      <AppFeature />
      <NewFeature />
      <Footer />
    </>
  );
};

export default About;

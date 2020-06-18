import React from "react";

const appImage = require("../../assets/images/app-opebo.svg");
const playstoreImage = require("../../assets/images/playstore.png");

const AppFeature = () => {
  return (
    <>
      <section className='my-6 font-sans container m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center'>
        <div className='w-full lg:w-1/2'>
          <img className='w-full' src={appImage} alt='app' />
        </div>
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start'>
          <h1 className='my-4 font-bold text-4xl'>App Features</h1>
          <p className='leading-normal mb-4 w-2/3 text-gray-700'>
            <span className='font-bold text-xl text-orange-500'>Download</span>{" "}
            our app from playstore and have a better experience with our
            services with offers and much more functionalities.
          </p>
          <a href='http://raboninco.com/dCbd' className='w-1/2' target='_blank'>
            <img src={playstoreImage} alt='play-store' />
          </a>
        </div>
      </section>
    </>
  );
};

export default AppFeature;

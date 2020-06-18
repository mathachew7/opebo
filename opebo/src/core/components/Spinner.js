import React from "react";
import "./css/spinner.css";

const LoadingSpinner = () => {
  return (
    <div className='h-screen overflow-hidden flex items-center justify-center bg-white'>
      <div className='loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16'></div>
    </div>
  );
};

export default LoadingSpinner;

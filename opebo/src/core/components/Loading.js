import React from "react";
import "./css/spinner.css";

const Loading = () => {
  return (
    <div className='overflow-hidden antialiased flex items-center justify-center bg-transparent'>
      <div className='loader ease-linear rounded-full border-4 border-t-4 border-gray-100 h-5 w-5'></div>
    </div>
  );
};

export default Loading;

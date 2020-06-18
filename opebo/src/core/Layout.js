import React from "react";
import Navbar from "./components/Navbar";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <>
    <div className='px-5 md:px-10 py-4 bg-bray-300'>
      <h1 className='text-2xl font-bold text-black'>{title}</h1>
      <p className='text-lg text-orange-500'>{description}</p>
    </div>
    <div className={className}>{children}</div>
  </>
);

export default Layout;

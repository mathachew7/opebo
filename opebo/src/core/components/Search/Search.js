import React, { useState } from "react";
import { Link } from "react-router-dom";
import { list, SearchApi } from "../../apiCore";
import { FaArrowRight } from "react-icons/fa";

const locations = [
  {
    location: "Delhi",
  },
  {
    location: "Noida",
  },
  {
    location: "Gurugram",
  },
  {
    location: "Ludhiana",
  },
  {
    location: "Patna",
  },
  {
    location: "Greater Noida",
  },
  {
    location: "Other",
  },
];

function Search() {
  const [data, setData] = useState({
    location: "Delhi",
    search: "",
    results: [],
    searched: false,
  });

  const { location, search, results, searched } = data;

  const searchData = () => {
    // console.log(search, category);
    if (search) {
      // list({ search: search || undefined }).then((response) => {
      //   if (response.error) {
      //     console.log(response.error);
      //   } else {
      //     setData({ ...data, results: response, searched: true });
      //   }
      // });
    }
    SearchApi({ search: search || undefined }).then((response) => {
      setData({
        ...data,
        results: response,
        searched: true,
        location: location,
      });
    });
  };

  const handleChange = (name) => (event) => {
    event.preventDefault();
    setData({ ...data, results: [], searched: false });
    setData({ ...data, [name]: event.target.value });
    if (!searched) {
      searchData();
    } else {
      setData({ ...data, results: [], searched: false });
    }
  };

  // const searchMessage = (searched, results) => {
  //   if (searched && results.length > 0) {
  //     return `Found ${results.length} services`;
  //   }
  //   if (searched && results.length < 1) {
  //     return `No services found`;
  //   }
  // };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  const searchResults = (data, loc) => {
    if (data) {
      return (
        <div
          className={`mt-1 bg-white shadow-lg flex flex-col justify-center items-start text-left absolute rounded-sm w-full overflow-hidden`}
        >
          {data.map((d, i) => (
            <Link
              to={`/sub-service/${d._id}/${loc}`}
              key={i}
              className='flex flex-row justify-between items-center px-8 py-3 hover:bg-green-500 text-gray-800
            hover:text-gray-100 font-semibold w-full'
            >
              {d.name}

              <FaArrowRight className='text-white' />
            </Link>
          ))}
        </div>
      );
    }
    if (data === null) {
      return <></>;
    } else return <></>;
  };

  return (
    <>
      <div className='text-center font-sans'>
        <h3 className='mt-2 text-center text-xl font-medium font-sans'>
          Your favorite<span className='text-3xl font-bold'> Services</span> at
          your
          <span className='text-3xl text-orange-500 font-bold'> Doorstep</span>
        </h3>
        <form onSubmit={searchSubmit}>
          {/* <div className='mt-1 text-xs'>
            {searchMessage(search, results)}
          </div> */}
          <div className='flex justify-center px-3'>
            <div className='my-2 flex flex row'>
              <div className='flex flex-row mb-0 sm:mb-0'>
                <div className='relative'>
                  <select
                    className='appearance-none h-full rounded rounded-r-none border border-gray-500 block appearance-none w-full bg-white text-gray-700 py-3 px-3 md:px-5 leading-tight focus:bg-white'
                    onChange={handleChange("location")}
                  >
                    {locations.map((l, i) => (
                      <option key={i} value={l.location}>
                        {l.location}
                      </option>
                    ))}
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800'>
                    <svg
                      className='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='block relative'>
                <span className='h-full absolute inset-y-0 left-0 flex items-center pl-2'>
                  <svg
                    viewBox='0 0 24 24'
                    className='h-5 w-5 fill-current text-gray-500'
                  >
                    <path d='M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z'></path>
                  </svg>
                </span>
                <input
                  type='search'
                  placeholder='Eg: salon, security...  '
                  onChange={handleChange("search")}
                  className=' appearance-none rounded-r rounded-l-none border border-l-0 border-gray-500 block pl-8 pr-6 py-3 w-full bg-white text-sm text-gray-700 focus:bg-white placeholder-gray-700 focus:placeholder-gray-600 focus:text-gray-700'
                />
                {/* <div className='absolute mt-1 text-xs'>
                  {searchMessage(search, results, location)}
                </div> */}
                {searchResults(results, location)}
              </div>
            </div>
          </div>

          <div className='mt-4 flex flex-col px-3 justify-center items-center'>
            <button className='flex justify-center items-center w-full md:w-1/3 py-2 border border-transparent text-xl font-medium rounded text-white bg-black hover:bg-gray-900 focus:outline-none focus:border-orange-400 focus:shadow-outline-gray active:bg-gray-900 transition duration-550 ease-in-out font-bold'>
              <span className='text-orange-500'>O</span>pe
              <span className='text-orange-500'>B</span>o
              {/* <span className='text-sm font-medium'> services on demand</span> */}
              <span className='ml-1 text-sm font-normal'>at your service</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;

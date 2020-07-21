import React, { useState, useEffect } from "react";
import Carousel from "../modules/components/carousel";
import Search from "../core/components/Search/Search";
import Loadable from "react-loadable";

import CardScroll from "../modules/components/card-scroll";
import ReadyCard from "../modules/components/ReadyCard";
import Body from "../modules/components/body";
import Navbar from "../core/components/Navbar";
import Footer from "../modules/components/Footer";

import CategoryCard from "../core/components/Category/CategoryCard";
import { getCategories } from "../core/apiCore";

import Spinner from "../core/components/Spinner";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <Navbar />
      <Carousel />
      <Search />

      <section className='antialiased'>
        <div className='mt-5 flex flex-wrap justify-center items-start px-2 md:px-10'>
          {categories.map((category, i) => (
            <CategoryCard category={category} key={i} />
          ))}
        </div>
      </section>

      <CardScroll />
      <ReadyCard />
      <Body />
      <Footer />
    </>
  );
};

export default Home;

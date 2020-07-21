import React from "react";
import { Carousel } from "antd";
import "./css/carousel.css";

const image1 = require("../../assets/images/1.jpg");
const image2 = require("../../assets/images/2.jpg");
const image3 = require("../../assets/images/3.jpg");
const image4 = require("../../assets/images/4.jpg");

function CarouselOpebo() {
  return (
    <React.Fragment>
      <section>
        <Carousel autoplay>
          <div>
            <img src={image1} alt='1'></img>
          </div>
          <div>
            <img src={image2} alt='2'></img>
          </div>
          <div>
            <img src={image3} alt='3'></img>
          </div>
          <div>
            <img src={image4} alt='4'></img>
          </div>
        </Carousel>
      </section>
    </React.Fragment>
  );
}

export default CarouselOpebo;

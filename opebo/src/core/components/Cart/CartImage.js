import React from "react";
import { API } from "../../../config";
import { Link } from "react-router-dom";

const CartImage = ({ item, url }) => (
  <Link
    className='w-1/3 md:w-1/4 bg-cover'
    to={`/subService/details/${item.name}/${item._id}`}
  >
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className='p-4'
      //style={{ maxHeight: "100%", maxWidth: "100%" }}
    />
  </Link>
);

export default CartImage;

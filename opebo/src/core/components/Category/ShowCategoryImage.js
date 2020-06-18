import React from "react";
import { API } from "../../../config";

const ShowCategoryImage = ({ item, url }) => (
  <img
    src={`${API}/${url}/photo/${item._id}`}
    alt={item.name}
    className='p-2'
  />
);

export default ShowCategoryImage;

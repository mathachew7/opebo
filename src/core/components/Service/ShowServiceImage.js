import React from "react";
import { API } from "../../../config";

const ShowServiceImage = ({ item, url }) => (
  <div className='w-3/12 p-2 bg-cover'>
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className='p-2'
      style={{ maxHeight: "100%", maxWidth: "100%" }}
    />
  </div>
);

export default ShowServiceImage;

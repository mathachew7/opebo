import React from "react";
import { API } from "../../../config";

const ShowSubServiceImage = ({ item, url }) => (
  <div className='h-20 md:h-24 w-auto object-cover'>
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className='p-3'
      style={{ maxHeight: "100%", maxWidth: "100%" }}
    />
  </div>
);

export default ShowSubServiceImage;

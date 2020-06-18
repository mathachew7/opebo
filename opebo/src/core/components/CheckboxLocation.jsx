import React, { useState } from "react";

const CheckboxLocation = ({ locations, handleCheckbox }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (locId) => () => {
    // return the first index or -1
    const currentLocationId = checked.indexOf(locId);
    console.log(checked.indexOf(locId));

    const newCheckedLocationId = [...checked];
    // if currently checked was not already in checked state > push
    // else pull/take off
    if (currentLocationId === -1) {
      newCheckedLocationId.push(locId);
    } else {
      newCheckedLocationId.splice(currentLocationId, 1);
    }
    // console.log(newCheckedCategoryId);
    setChecked(newCheckedLocationId);
    // handleFilters(newCheckedLocationId);
    handleCheckbox(newCheckedLocationId);
  };

  return locations.map((location, i) => (
    <li key={i} className='list-none p-1'>
      <input
        onChange={handleToggle(location.id)}
        value={checked.indexOf(location.id === -1)}
        type='checkbox'
        className='form-check-input cursor-pointer'
      />
      <label className='px-3 py-1 form-check-label md:text-lg'>
        {location.name}
      </label>
    </li>
  ));
};

export default CheckboxLocation;

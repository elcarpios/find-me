import React, { useState } from 'react';

const OpenList = () => {
  const [items, setItems] = useState([]);
  
  return (
    <label htmlFor="start">Proposal 1:
      <input type="date" id="start" name="trip-start" />
    </label> 
  );
};

export default OpenList;
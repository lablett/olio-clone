import React from 'react';
import toggle from '../../../scss/toggle.module.scss';

const ViewToggle = () => {
  return (
    <div className={toggle.container}>
      <button className={toggle.option}>List</button>
      <button className={toggle.option}>Map</button>
    </div>
  );
};

export default ViewToggle;

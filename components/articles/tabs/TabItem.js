import React from 'react';
import PropTypes from 'prop-types';

import tab from '../../../scss/tab.module.scss';

const TabItem = ({ name, active, click }) => {
  return (
    <button
      type="button"
      className={`${tab.option} ${active ? '--active' : ''}`}
      onClick={click}
    >
      { name }
    </button>
  );
};

TabItem.defaultProps = {
  active: false,
};

TabItem.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default TabItem;

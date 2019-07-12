import React from 'react';
import PropTypes from 'prop-types';

const Loading = (props) => {
  if (!props.show) return null;

  return (
    <p className="f1 white b">LOADING...</p>
  )
}

Loading.propTypes = {
  show: PropTypes.bool
};

export default Loading;

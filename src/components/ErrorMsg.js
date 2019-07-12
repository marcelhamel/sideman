import React from 'react';
import PropTypes from 'prop-types';

const ErrorMsg = (props) => {
  if (!props.show) return null;

  return (
    <div className="tc">
      <p className="f1 white b">There has been an error:</p>
      <p className="f2 white b">{props.errorMsg}</p>
      <button
          className="input-reset pa3 br-pill bw3 b bg-black-30 white mt2 no-outline outline-0 button-fx pointer"
          onClick={props.refreshTrack}
        >
          REFRESH TRACK
        </button>
    </div>
  )
}

ErrorMsg.propTypes = {
  show: PropTypes.bool,
  errorMsg: PropTypes.string,
  refreshTrack: PropTypes.func
};

export default ErrorMsg;

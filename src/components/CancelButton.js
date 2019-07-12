// Hides Album Modal
import React from 'react';
import PropTypes from 'prop-types';

const CancelButton = (props) => {
  return (
    <button
      className="input-reset pa3 br-pill bw3 b bg-black-30 white mt2 no-outline outline-0 button-fx pointer w-40 tc"
      onClick={props.hideModal}
    >
      CANCEL
    </button>
  )
}

CancelButton.propTypes = {
  hideModal: PropTypes.func.isRequired
};

export default CancelButton;

// Displays current playing Spotify Track
import React from 'react';
import PropTypes from 'prop-types';

const RecordingDetailItem = (props) => {
  return (
    <div className="tl w-100 bt b--white truncate pt1 pb1 ph1 button-fx pointer">
      {props.children}
    </div>
  )
}

RecordingDetailItem.propTypes = {
  children: PropTypes.object
}

export default RecordingDetailItem;

// Displays current playing Spotify Track
import React from 'react';

const RecordingDetailItem = (props) => {
  return (
    <div className="tl w-100 bt b--white truncate pt1 pb1 ph1 button-fx pointer">
      {props.children}
    </div>
  )
}

export default RecordingDetailItem;

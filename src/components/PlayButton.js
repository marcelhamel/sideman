// Triggers playback from Album Modal
import React from 'react';
import PropTypes from 'prop-types';

const PlayButton = (props) => {
  return (
    <button
      className="input-reset pa3 br-pill bw3 b bg-black-30 white mt2 no-outline outline-0 button-fx pointer w-40 mh1"
      onClick={props.playAlbum.bind(null, props.uri, props._rt)}
    >
      PLAY
    </button>
  )
}

PlayButton.propTypes = {
  playAlbum: PropTypes.func,
  uri: PropTypes.string,
  _rt: PropTypes.string
};

export default PlayButton;

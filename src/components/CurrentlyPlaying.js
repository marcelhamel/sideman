// Displays current playing Spotify Track
import React from 'react';
import PropTypes from 'prop-types';

const CurrentlyPlaying = (props) => {
  return (
    <div
      className="w-50 flex flex-column justify-center items-start relative white cover h-100"
      style={{backgroundImage: `url(${props.image})`}}
    >
      <div className="gradient-shadow w-100 h-100 flex flex-column items-start justify-end tc border-box">
        <div className="tl">
          <h2 className="i">Now Playing</h2>
          <p className="i">Artist: {props.artist}</p>
          <p className="i">Album: {props.album}</p>
          <p className="i">Track: {props.track}</p>
        </div>
        <button
          className="input-reset pa3 br-pill bw3 b bg-black-30 white mt2 no-outline outline-0 button-fx pointer"
          onClick={props.refreshTrack}
        >
          REFRESH TRACK
        </button>
      </div>
    </div>
  )
}

CurrentlyPlaying.propTypes = {
  artist: PropTypes.string,
  album: PropTypes.string,
  track: PropTypes.string,
  image: PropTypes.string,
  refreshTrack: PropTypes.func
};

export default CurrentlyPlaying;

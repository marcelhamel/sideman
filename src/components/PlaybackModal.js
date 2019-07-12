import React from 'react';
import PlayButton from './PlayButton';
import CancelButton from './CancelButton';
import PropTypes from 'prop-types';

const PlaybackModal = (props) => {
  if (!props.show) return null;

  const artists = props.playbackDetail.artists.map(x => x.name).join(', ');

  return (
    <div className="relative h-100 w-100 bg-transparent flex items-center justify-center">
      <div
        className="white f2 absolute right-2 top-1 pointer dim"
        onClick={props.hideModal}
      >
        &#xd7;
      </div>
      <div className="pa2 bg-white-90 tc">
        <img src={props.playbackDetail.images[0].url} style={{ height: 250, width: 250 }}/>
        <h3>{props.playbackDetail.name}</h3>
        <p className="i">{artists}</p>
        <div className="flex justify-around">
          <CancelButton hideModal={props.hideModal} />
          <PlayButton playAlbum={props.playAlbum} uri={props.playbackDetail.uri} _rt={props._rt}/>
        </div>
      </div>
    </div>
  )
}

PlaybackModal.propTypes = {
  playbackDetail: PropTypes.object,
  hideModal: PropTypes.func,
  playAlbum: PropTypes.func
}

export default PlaybackModal;

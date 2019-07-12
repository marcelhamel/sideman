import React from 'react';
import Loading from './Loading';
import ErrorMsg from './ErrorMsg';
import PlaybackModal from './PlaybackModal';
import PropTypes from 'prop-types';

const Modal = (props) => {
  if (!props.showModal) return null;

  return (
    <div className="aspect-ratio--object bg-black-90 z-999 flex justify-center items-center">
      <Loading
        show={props.loading}
      />
      <ErrorMsg
        show={props.error}
        errorMsg={props.errorMsg}
        refreshTrack={props.refreshTrack}
      />
      <PlaybackModal
        show={props.playback}
        playbackDetail={props.playbackDetail}
        hideModal={props.hideModal}
        playAlbum={props.playAlbum}
        _rt={props._rt}
      />
    </div>
  )
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  refreshTrack: PropTypes.func,
  getTrack: PropTypes.func,
  hideModal: PropTypes.func,
  playAlbum: PropTypes.func,
  playback: PropTypes.bool,
  playbackDetail: PropTypes.object,
  _rt: PropTypes.string
};

export default Modal;

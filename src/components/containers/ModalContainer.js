import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideModal, showErrorModal, receiveTrackData, setRefreshToken } from '../../actions/actions';
import { refreshTrack, getTrack, playAlbum } from '../../actions/api';
import PropTypes from 'prop-types';

import Modal from '../Modal';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTrack()
  }


  render() {
    return (
      <div>
        <Modal
          showModal={this.props.showModal}
          loading={this.props.loading}
          error={this.props.error}
          errorMsg={this.props.errorMsg}
          refreshTrack={this.props.refreshTrack.bind(this, this.props._rt)}
          hideModal={this.props.hideModal.bind(this)}
          playAlbum={this.props.playAlbum.bind(this)}
          playback={this.props.playback}
          playbackDetail={this.props.playbackDetail}
          _rt={this.props._rt}
        />
      </div>
    )
   }
}

const mapStateToProps = (data) => {
  return {
    loading: data.state.loading,
    showModal: data.state.showModal,
    error: data.state.error,
    errorMsg: data.state.errorMsg,
    _rt: data.state._rt,
    playback: data.state.playback,
    playbackDetail: data.state.playbackDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    hideModal,
    showErrorModal,
    receiveTrackData,
    refreshTrack,
    setRefreshToken,
    getTrack,
    playAlbum
  }, dispatch)
}

ModalContainer.propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);

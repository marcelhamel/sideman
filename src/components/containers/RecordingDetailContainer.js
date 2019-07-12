import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArtistDiscography, findPlaybackAlbum } from '../../actions/api';
import { hideDiscography } from '../../actions/actions';
import RecordingDetail from '../RecordingDetail';
import PropTypes from 'prop-types';

class RecordingDetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RecordingDetail
        coreMembers={this.props.coreMembers}
        personnel={this.props.personnel}
        detailType={this.props.detailType}
        currentPage={this.props.currentPage}
        artistDetail={this.props.artistDetail}
        getArtistDiscography={this.props.getArtistDiscography.bind(this)}
        hideDiscography={this.props.hideDiscography.bind(this)}
        findPlaybackAlbum={this.props.findPlaybackAlbum.bind(this)}
        _rt={this.props._rt}
      />
    )
   }
}

const mapStateToProps = (data) => {
  return {
    personnel: data.state.personnel,
    coreMembers: data.state.coreMembers,
    detailType: data.state.detailType,
    currentPage: data.state.currentPage,
    artistDetail: data.state.artistDetail,
    _rt: data.state._rt
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getArtistDiscography,
    hideDiscography,
    findPlaybackAlbum
  }, dispatch)
}

RecordingDetailContainer.propTypes = {
  personnel: PropTypes.array,
  coreMembers: PropTypes.array,
  artistDetail: PropTypes.object,
  detailType: PropTypes.string,
  currentPage: PropTypes.number,
  _rt: PropTypes.string,
  getArtistDiscography: PropTypes.func,
  hideDiscography: PropTypes.func,
  findPlaybackAlbum: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordingDetailContainer);

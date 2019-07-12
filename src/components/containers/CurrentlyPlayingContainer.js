import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { refreshTrack } from '../../actions/api';
import CurrentlyPlaying from '../CurrentlyPlaying';
import PropTypes from 'prop-types';

class CurrentlyPlayingContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CurrentlyPlaying
        image={this.props.image}
        artist={this.props.artist}
        album={this.props.album}
        track={this.props.track}
        rt={this.props.token}
        refreshTrack={this.props.refreshTrack.bind(this, this.props.token)}
      />
    )
   }
}

const mapStateToProps = (data) => {
  return {
    image: data.state.image,
    artist: data.state.artist,
    album: data.state.album,
    track: data.state.track,
    token: data.state._rt
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    refreshTrack
  }, dispatch)
}

CurrentlyPlayingContainer.propTypes = {
  image: PropTypes.string,
  artist: PropTypes.string,
  album: PropTypes.string,
  track: PropTypes.string,
  token: PropTypes.string,
  refreshTrack: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentlyPlayingContainer);

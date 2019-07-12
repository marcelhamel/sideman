import React from 'react';
import RecordingDetailItem from './RecordingDetailItem';
import PropTypes from 'prop-types';

const ArtistDetail = (props) => {
  if (!props.show) return null;

  const releases = props.artistDetail.releases.map((release, index) => {
    const year = release.year ? `(${release.year})` : null;
    const format = release.format ? `(${release.format})` : null;

    return(
      <RecordingDetailItem
        key={release.id + index}
      >
        <p
          className="mv2"
          onClick={props.findPlaybackAlbum.bind(null, release.artist, release.title, props._rt)}
        >
          <span className="b">{release.title}</span><span className="i">&nbsp;&nbsp;{year}</span>
          <br/>
          {release.artist} <span className="i">{format}</span>
        </p>
      </RecordingDetailItem>
    )
  })

  const profile = props.artistDetail.profile ? <p>{props.artistDetail.profile}</p> : null;

  return (
    <div className="w-100 ph2 overflow-y-scroll h-100 relative">
      <div
        className="white f2 absolute right-1 pointer dim"
        onClick={props.hideDiscography}
      >
        &#xd7;
      </div>
      <h2>{props.artistDetail.name}</h2>
      {profile}
      {releases}
    </div>
  )
}

ArtistDetail.propTypes = {
  show: PropTypes.bool,
  artistDetail: PropTypes.object,
  findPlaybackAlbum: PropTypes.func,
  hideDiscography: PropTypes.func,
  _rt: PropTypes.string
};

export default ArtistDetail;

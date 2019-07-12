// Displays artist and personnel for currently playing Spotify Track
import React from 'react';
import PersonnelList from './PersonnelList';
import ArtistDetail from './ArtistDetail';

const RecordingDetail = (props) => {
  return (
    <div
      className="w-50 flex flex-column justify-start items-start relative white cover h-100 dark-bg"
    >
      <PersonnelList
        show={props.detailType === 'personnel'}
        coreMembers={props.coreMembers}
        personnel={props.personnel}
        currentPage={props.currentPage}
        getArtistDiscography={props.getArtistDiscography}
      />
      <ArtistDetail
        show={props.detailType === 'discography'}
        hideDiscography={props.hideDiscography}
        artistDetail={props.artistDetail}
        findPlaybackAlbum={props.findPlaybackAlbum}
        _rt={props._rt}
      />
    </div>
  )
}

export default RecordingDetail;

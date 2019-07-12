import React from 'react';
import RecordingDetailItem from './RecordingDetailItem';
import PropTypes from 'prop-types';

const PersonnelList = (props) => {
  if (!props.show) return null;
  if (!props.coreMembers && !props.personnel) return <h3>Unable to find track personnel.</h3>;

  const coreMembers = props.coreMembers.map((artist) => {
    return(
      <RecordingDetailItem
        key={artist.id}
      >
        <p className="b mv2" onClick={props.getArtistDiscography.bind(null, artist.id, props.currentPage)}>{artist.name}</p>
      </RecordingDetailItem>
    )
  })

  const personnel = props.personnel.map((artist) => {
    return(
      <RecordingDetailItem
        key={artist.id}

      >
        <p className="mv2" onClick={props.getArtistDiscography.bind(null, artist.id, props.currentPage)}>
          <span className="b">
            {artist.name}
          </span><br/>
            {artist.role}
        </p>
      </RecordingDetailItem>
    )
  })

  const coreMembersHeading = props.coreMembers.length > 0 ? <h2 className="mb1 pl1">Core Members</h2>
                                               : null;

  const personnelHeading = props.personnel.length > 0  ? <h2 className="mb1 pl1">Additional Personnel</h2>
                                           : null;

  return (
    <div className="w-100 ph2 overflow-y-scroll h-100">
      {coreMembersHeading}
      {coreMembers}
      {personnelHeading}
      {personnel}
    </div>
  )
}

PersonnelList.propTypes = {
  show: PropTypes.bool,
  coreMembers: PropTypes.array,
  personnel: PropTypes.array,
  getArtistDiscography: PropTypes.func,
  currentPage: PropTypes.number
};

export default PersonnelList;

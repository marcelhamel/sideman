import React from 'react';
import ModalContainer from './containers/ModalContainer';
import CurrentlyPlayingContainer from './containers/CurrentlyPlayingContainer';
import RecordingDetailContainer from './containers/RecordingDetailContainer';

const App = () => {
  return (
    <div className="h-100">
      <ModalContainer />
      <div className="h-100 w-100 bg-gold flex flex-row">
        <CurrentlyPlayingContainer />
        <RecordingDetailContainer />
      </div>
    </div>
  )
}

export default App;

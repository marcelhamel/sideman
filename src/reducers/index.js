import initialState from './initialState';

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case 'hideModal':
      return {
        ...state,
        loading: false,
        showModal: false,
        error: false,
        playback: false,
        errorMsg: null
      }
    case 'hideDiscography':
      return {
        ...state,
        detailType: 'personnel'
      }
    case 'receiveDiscography':
      return {
        ...state,
        artistDetail: {
          name: action.payload.name,
          profile: action.payload.profile,
          releases: action.payload.releases
        },
        detailType: 'discography',
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPagess
      }
    case 'receivePlaybackData':
      return {
        ...state,
        playbackDetail: action.payload,
      }
    case 'receiveTrackData':
      return {
        ...state,
        album: action.payload.album,
        artist: action.payload.artist,
        image: action.payload.image,
        track: action.payload.track,
        personnel: action.payload.personnel ? action.payload.personnel : [],
        coreMembers: action.payload.coreMembers ? action.payload.coreMembers : [],
        detailType: 'personnel',
        currentPage: 1,
        totalPages: 1
      }
    case 'setRefreshToken':
      return {
        ...state,
        _rt: action.payload
      }
    case 'showLoadingModal':
      return {
        ...state,
        loading: true,
        showModal: true,
        error: false,
        playback: false,
      }
    case 'showErrorModal': {
      const err = action.payload.response ? action.payload.response.data.error : action.payload;
      return {
        ...state,
        error: true,
        loading: false,
        showModal: true,
        playback: false,
        errorMsg: err
      }
    }
    case 'showPlaybackModal': {
      return {
        ...state,
        error: false,
        loading: false,
        playback: true,
        showModal: true,
        errorMsg: null
      }
    }
    default: return state;
  }
}

export default reducers;

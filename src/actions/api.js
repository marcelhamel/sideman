import axios from 'axios';
import Cookies from 'universal-cookie';
import queryString from 'query-string';
import { receiveTrackData, receiveDiscography, showErrorModal, hideModal, setRefreshToken, receivePlaybackData, showPlaybackModal } from './actions';
import sanitizeTitle from '../utils';


export const getTrack = () => (
  (dispatch) => {
    if (!location.search.includes('code=')) window.location.href = 'http://localhost:8000/login';

    const params = queryString.parse(location.search);
    const cookie = new Cookies();
    const stored_state = cookie.get('state', { doNotParse: true });
    const code = params.code;
    const auth_state = params.state;

    axios.get(`http://localhost:8000/sideman/cb/${auth_state}/${code}/${stored_state}`)
    .then(res => {
      if (res.data.error) {
        if (res.data.redirect === true) window.location.href = 'http://localhost:8000/login';
        dispatch(showErrorModal(res.data.error));
      } else {
        // console.log(res);
        dispatch(receiveTrackData(res.data));
        dispatch(setRefreshToken(res.data.token.refresh_token));
        dispatch(hideModal());
      }
    })
    .catch(err => {
      dispatch(showErrorModal(err));
    })
  }
)

export const refreshTrack = (token) => (
  (dispatch) => {
     return axios.get(`http://localhost:8000/sideman/refresh/${token}`)
    .then(res => {
      if (res.data.redirect) {
        window.location.href = "http://localhost:8000/login";
      } else if (res.data.error) {
        dispatch(showErrorModal(res.data.error))
      } else {
        dispatch(receiveTrackData(res.data))
        dispatch(hideModal())
      }

    })
    .catch(err => dispatch(showErrorModal(err)))
  }
)

export const getArtistDiscography = (id, page) => (
  (dispatch) => {
    return  axios.get(`http://localhost:8000/sideman/artist/${id}/${page}`)
            .then(artist => {
              dispatch(receiveDiscography(artist.data));
              dispatch(hideModal())
            })
            .catch(err => {
              dispatch(showErrorModal(err))
            })
  }
)

export const findPlaybackAlbum = (artist, album, rt) => (
  (dispatch) => {
    album = sanitizeTitle(album);
    artist = sanitizeTitle(artist);

    return axios.get(`http://localhost:8000/sideman/play/${rt}/${album}/${artist}`)
    .then(res => {
      if (res.data.length == 0) throw Error('Unable to retrieve playback data.')
      dispatch(receivePlaybackData(res.data));
      dispatch(showPlaybackModal())
    })
    .catch(err => {
      dispatch(showErrorModal(err.message ? 'Unable to retrieve playback data.' : err))
    })
  }
)

export const playAlbum = (uri, rt) => (
  (dispatch) => {
    return axios.post(`http://localhost:8000/sideman/play`, { data: { uri, rt } })
    .then(res => {
      dispatch(hideModal());
      dispatch(receiveTrackData(res.data));
    })
    .catch(err => {
      dispatch(showErrorModal(err))
    })
  }
)

export const showLoadingModal = () => (
  {
    type: 'showLoadingModal'
  }
)

export const showPlaybackModal = () => (
  {
    type: 'showPlaybackModal'
  }
)

export const hideModal = () => (
  {
    type: 'hideModal'
  }
)

export const hideDiscography = () => (
  {
    type: 'hideDiscography'
  }
)

export const receiveDiscography = (data) => (
  {
    type: 'receiveDiscography',
    payload: data
  }
)

export const receiveTrackData = (data) => (
  {
    type: 'receiveTrackData',
    payload: data
  }
)

export const receivePlaybackData = (data) => (
  {
    type: 'receivePlaybackData',
    payload: data
  }
)

export const setRefreshToken = (token) => (
  {
    type: 'setRefreshToken',
    payload: token
  }
)

export const showErrorModal = (msg) => (
  {
    type: 'showErrorModal',
    payload: msg
  }
)



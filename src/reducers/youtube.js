import * as ACTIONS from '../actions';

const defaultState = {
  link: null,
  videoId: null,
  currentTime: null,
  playButtonName: 'Pause',
  startTime: 0,
};

const youtube = (state = defaultState, action) => {
  const {link, videoId, currentTime, playButtonName, startTime} = action;
  switch (action.type) {
    case ACTIONS.VIDEO_LINK_UPDATED:
      return {...state, link, videoId, startTime};
    case ACTIONS.CURRENT_TIME_CHANGED:
      return {...state, currentTime};
    case ACTIONS.PLAYING_STATUS_CHANGED:
      return {...state, playButtonName};
    default:
      return state;
  }
};

export default youtube;

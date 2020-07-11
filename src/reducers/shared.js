import * as ACTIONS from '../actions';

const shared = (state = [], action) => {
  const {type, sharedVideo} = action;
  switch (type) {
    case ACTIONS.SHARED: {
      return [sharedVideo, ...state];
    }
    default:
      return state;
  }
};

export default shared;

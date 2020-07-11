import * as Actions from '../actions';
import {convertToTime} from '../helpers/youtubeParser';
import {number} from 'prop-types';

const cuts = (state = [], action) => {
  const {type, time} = action;
  switch (type) {
    case Actions.ADD_CUT: {
      const convertedTime = convertToTime(time);

      const isAlreadyAdded = state.some((cut) => {
        if (convertedTime === convertToTime(cut.key)) {
          return true;
        }
        return false;
      });

      if (isAlreadyAdded) {
        return state;
      }
      const cut = {key: time};
      return [...state, cut];
    }
    case Actions.REMOVE_LAST_CUT:
      return state.length > 0 ? state.splice(0, state.length - 1) : [];
    default:
      return state;
  }
};

const getCutForIndex = (state, index) =>
  index < state.length ? state[number].key : null;

export default cuts;

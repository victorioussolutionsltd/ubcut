/*
 * action types
 */

export const ADD_CUT = 'ADD_CUT';
export const SEEK_TO = 'SEEK_TO';
export const REMOVE_LAST_CUT = 'REMOVE_LAST_CUT';
export const ADD_CUT_CALLBACK = 'ADD_CUT_CALLBACK';
/*
 * action creators
 */

export function addCut(time) {
  return {type: ADD_CUT, time};
}

export function addCutCallback(time, callback) {
  return {type: ADD_CUT_CALLBACK, time, callback};
}

export function seekTo(time) {
  return {type: SEEK_TO, time};
}

export function removeLast() {
  return {type: REMOVE_LAST_CUT};
}

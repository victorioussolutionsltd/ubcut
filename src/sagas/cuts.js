import {put, takeEvery, all, select} from 'redux-saga/effects';
import * as Actions from './../actions';

const getCuts = (state) => state.cuts;

function* addCutSaga({time, callback}) {
  yield put({type: Actions.ADD_CUT, time});
  const cuts = yield select(getCuts);
  callback(cuts);
}

function* cutsSaga() {
  yield takeEvery(Actions.ADD_CUT_CALLBACK, addCutSaga);
}

export default function* rootSaga() {
  yield all([cutsSaga()]);
}

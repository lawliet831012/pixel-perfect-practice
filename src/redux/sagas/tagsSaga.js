import { takeLatest, call, put } from 'redux-saga/effects';

import { getTags } from '../../utils/api';
import tagsActionsType, * as tagsActions from '../actions/tagsActions';

const initailize = function* initailizeTagData() {
  try {
    const response = yield call(getTags);
    // sort result by count
    const newState = response.data.sort((a, b) => b.count - a.count);
    yield put(tagsActions.update(newState));
  } catch (error) {
    // console.error('Error occured when initailize() in tagSaga: ', error);
  }
};

const tagSaga = function* watchTagSagaFlow() {
  yield takeLatest(tagsActionsType.INITAIL, initailize);
};

export default tagSaga;

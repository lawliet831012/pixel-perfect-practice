import {
  spawn, call, delay, all,
} from 'redux-saga/effects';

import tagsSaga from './tagsSaga';
import followerSaga from './followerSaga';
import searchSaga from './searchSaga';

const makeRestartAble = (saga) => function* generater() {
  yield saga
      && spawn(function* task() {
        while (true) {
          try {
            yield call(saga);
          } catch (error) {
            console.error(`uncaught exception: ${error}`);
          }
          yield delay(1000);
        }
      });
};

const sagas = [
  tagsSaga,
  followerSaga,
  searchSaga,
].map(makeRestartAble);

function* rootSaga() {
  yield all(sagas.map((saga) => call(saga)));
}

export default rootSaga;

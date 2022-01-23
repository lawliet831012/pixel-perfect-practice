import {
  takeEvery, takeLatest, call, all, select, put,
} from 'redux-saga/effects';

import { getFollowers, getFriends } from '../../utils/api';
import followerActionsType, * as followerActions from '../actions/followerActions';

const pageSize = 10;

// when page === -1, means last page

const isEOD = function isEndOfData(totalpage) {
  return totalpage === 0 || totalpage === 1;
};

const initailize = function* initailizeTagData() {
  try {
    const page = 1;
    const [followerRes, friendsRes] = yield all([
      call(getFollowers, { page, pageSize }),
      call(getFriends, { page, pageSize }),
    ]);
    // if totalPages quals to 0, set to end of data
    const newState = {
      followers: followerRes.data.data,
      followersPage: isEOD(followerRes.data.totalPages) ? -1 : 1,
      friends: friendsRes.data.data,
      friendsPage: isEOD(friendsRes.data.totalPages) ? -1 : 1,
    };
    yield put(followerActions.update(newState));
  } catch (error) {
    // console.error('Error occured when initailize() in followerSaga: ', error);
  }
};

const nextPage = function* getNextPageByFollowerType({ payload }) {
  try {
    const getDataFunction = payload === 'followers' ? getFollowers : getFriends;
    const [currentPage, currentData] = yield all([
      select((state) => state.follower[`${payload}Page`]),
      select((state) => state.follower[payload]),
    ]);
    const page = currentPage + 1;
    const response = yield call(getDataFunction, { pageSize, page });
    // link with previous data
    const newState = {
      [payload]: [...currentData, ...response.data.data],
      [`${payload}Page`]: response.data.totalPages === page ? -1 : page,
    };
    yield put(followerActions.update(newState));
  } catch (error) {
    // console.error('Error occured when nextPage() in followerSaga: ', error);
  }
};

const followerSaga = function* watchFollowerSagaFlow() {
  yield takeLatest(followerActionsType.INITAIL, initailize);
  yield takeEvery(followerActionsType.NEXT, nextPage);
};

export default followerSaga;

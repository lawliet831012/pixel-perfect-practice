import {
  takeEvery, takeLatest, call, select, put,
} from 'redux-saga/effects';

import { getResult } from '../../utils/api';
import searchActionsType, * as searchActions from '../actions/searchActions';

// when page === -1, means last page

const isEOD = function isEndOfData(totalpage) {
  return totalpage === 0 || totalpage === 1;
};

const initailize = function* initailizeTagData({ payload }) {
  try {
    const { pageSize, keyword } = payload;
    const page = 1;

    const response = yield call(getResult, { page, pageSize, keyword });

    // if totalPages quals to 0, set to end of data
    const newState = {
      keyword,
      pageSize,
      result: response.data.data,
      resultPage: isEOD(response.data.totalPages) ? -1 : 1,
    };
    yield put(searchActions.update(newState));
  } catch (error) {
    // console.error('Error occured when initailize() in searchSaga: ', error);
  }
};

const nextPage = function* getNextResultPage() {
  try {
    const currentSearch = yield select((state) => state.search);
    const {
      resultPage, result, keyword, pageSize,
    } = currentSearch;
    const page = resultPage + 1;
    const response = yield call(getResult, { pageSize, page, keyword });
    // link with previous data
    const newState = {
      keyword,
      pageSize,
      result: [...result, ...response.data.data],
      resultPage: response.data.totalPages === page ? -1 : page,
    };
    yield put(searchActions.update(newState));
  } catch (error) {
    // console.error('Error occured when nextPage() in searchSaga: ', error);
  }
};

const searchSaga = function* watchSearchSagaFlow() {
  yield takeLatest(searchActionsType.INITAIL, initailize);
  yield takeEvery(searchActionsType.NEXT, nextPage);
};

export default searchSaga;

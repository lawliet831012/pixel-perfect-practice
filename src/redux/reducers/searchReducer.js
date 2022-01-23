import searchActions from '../actions/searchActions';

const initailState = {
  result: [], resultPage: 0, keyword: '', pageSize: 3,
};

const reducer = function searchReducer(state = initailState, { type, payload } = {}) {
  switch (type) {
    case searchActions.UPDATE:
      return payload;
    case searchActions.INITAIL:
      return initailState;
    default:
      return state;
  }
};

export default reducer;

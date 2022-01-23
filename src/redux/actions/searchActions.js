const actionTypes = {
  INITAIL: 'INITAILIZE_SEARCH_DATA',
  NEXT: 'GET_NEXT_SEARCH_PAGE',

  UPDATE: 'UPDATE_SEARCH_REDUX_STORE',
};

export default actionTypes;

export const initail = function initailSearchData(payload) {
  return { type: actionTypes.INITAIL, payload };
};

export const next = function getNextSearchPage() {
  return { type: actionTypes.NEXT };
};

export const update = function updateSearchReduxStore(payload) {
  return { type: actionTypes.UPDATE, payload };
};

const actionTypes = {
  INITAIL: 'INITAILIZE_FOLLOWER_DATA',
  NEXT: 'GET_NEXT_FOLLOWER_PAGE',

  UPDATE: 'UPDATE_FOLLOWER_REDUX_STORE',
};

export default actionTypes;

export const initail = function initailFriendsData() {
  return { type: actionTypes.INITAIL };
};

export const next = function getNextFriendsPage(payload) {
  return { type: actionTypes.NEXT, payload };
};

export const update = function updateFriendsReduxStore(payload) {
  return { type: actionTypes.UPDATE, payload };
};

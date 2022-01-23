import followerActions from '../actions/followerActions';

const initailState = {
  followers: [],
  followersPage: 0,
  friends: [],
  friendsPage: 0,
};

const reducer = function followerReducer(state = initailState, { type, payload } = {}) {
  switch (type) {
    case followerActions.UPDATE:
      return { ...state, ...payload };
    case followerActions.INITAIL:
      return initailState;
    default:
      return state;
  }
};

export default reducer;

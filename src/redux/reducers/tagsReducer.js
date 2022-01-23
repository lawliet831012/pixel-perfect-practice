import tagActions from '../actions/tagsActions';

const initailState = [];

const reducer = function tagsReducer(state = initailState, { type, payload } = {}) {
  switch (type) {
    case tagActions.UPDATE:
      return payload;
    case tagActions.INITAIL:
      return initailState;
    default:
      return state;
  }
};

export default reducer;

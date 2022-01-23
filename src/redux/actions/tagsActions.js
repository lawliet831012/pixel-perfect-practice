const actionTypes = {
  INITAIL: 'INITAILIZE_TAG_DATA',

  UPDATE: 'UPDATE_TAG_REDUX_STORE',
};

export default actionTypes;

export const initail = function initailTagData() {
  return { type: actionTypes.INITAIL };
};

export const update = function updateTagReduxStore(payload) {
  return { type: actionTypes.UPDATE, payload };
};

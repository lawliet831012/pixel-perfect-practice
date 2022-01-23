import { combineReducers } from 'redux';

import tagsReducer from './tagsReducer';
import followerReducer from './followerReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  tags: tagsReducer,
  follower: followerReducer,
  search: searchReducer,
});

export default rootReducer;

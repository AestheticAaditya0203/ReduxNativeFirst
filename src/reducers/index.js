import {combineReducers} from 'redux';
import CountReducers from './CountReducers';
import PostReducers from './PostReducers';

const rootReducers = combineReducers({
  count: CountReducers,
  posts: PostReducers,
});

export default rootReducers;

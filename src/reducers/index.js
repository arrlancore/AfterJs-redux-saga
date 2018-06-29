import { combineReducers } from 'redux';
import ArticleReducer from './ArticleReducer';

export default () => {
  const rootReducer = combineReducers({
    article: ArticleReducer,
  });

  return rootReducer;
};
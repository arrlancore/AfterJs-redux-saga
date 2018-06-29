import Immutable from 'seamless-immutable';

const LOAD_ARTICLE = 'article/LOAD_ARTICLE';
const LOAD_ARTICLE_SUCCESS = 'article/LOAD_ARTICLE_SUCCESS';

// Craete Immutable object
const actionTypes = Immutable({
  LOAD_ARTICLE,
  LOAD_ARTICLE_SUCCESS,
});

export default actionTypes;

export function loadArticle() {
  return {
    type: actionTypes.LOAD_ARTICLE,
  };
}

export function loadArticleSuccess(data) {
  return {
    type: actionTypes.LOAD_ARTICLE_SUCCESS,
    data,
  };
}
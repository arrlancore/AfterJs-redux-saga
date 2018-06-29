import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/Request';

import actionTypes, {
  loadArticleSuccess,
} from 'actions/Article';

function* loadArticle() {
  const requestURL = `https://jsonplaceholder.typicode.com/posts`;
  try {
    const res = yield call(request, requestURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    yield put(loadArticleSuccess(res));
  } catch (err) {
    const res = yield err.response.json();
    console.error(res)
  }
}

function* Watcher() {
  yield all([
    takeLatest(actionTypes.LOAD_ARTICLE, loadArticle),
  ]);
}

export default Watcher;
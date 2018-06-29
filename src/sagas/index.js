import { all } from 'redux-saga/effects';

import ArticleSaga from './ArticleSaga';

export default function* rootSaga() {
  yield all([
    ArticleSaga(),
  ]);
}
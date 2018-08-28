import { FETCHED_POSTS, MORE_LOADED } from "./store";
import { put, takeEvery, all, call } from "redux-saga/effects";

export function* fetchPosts() {
  const response = yield call(
    fetch,
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = yield response.json();
  yield put({ type: FETCHED_POSTS, payload: posts });
}

export default function* rootSaga() {
  yield all([fetchPosts()]);
}

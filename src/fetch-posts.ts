import { FETCHED_POSTS, IS_LOADING } from "./store";

export default function getPosts() {
  return async function(dispatch: any) {
    dispatch({ type: IS_LOADING });
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    dispatch({ type: FETCHED_POSTS, payload: posts });
  };
}

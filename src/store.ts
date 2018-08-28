import { createSelector } from "reselect";

export const FETCHED_POSTS = "FETCHED_POSTS";
export const IS_LOADING = "IS_LOADING";
export const SELECTED_POST = "SELECTED_POST";
export const MORE_LOADED = "MORE_LOADED";

const initialState = {
  loading: null,
  posts: [],
  displayPosts: 10
};

type stateType = {
  loading: null | true | false;
  posts: any;
  displayPosts: number;
};

export const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  console.log(action);
  if (action.type === IS_LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === FETCHED_POSTS) {
    return { ...state, posts: action.payload, loading: false };
  }

  if (action.type === MORE_LOADED) {
    return { ...state, displayPosts: state.displayPosts + 10 };
  }

  return state;
};

const getPosts = (state: stateType) => state.posts;
const getDisplayPosts = (state: stateType) => state.displayPosts;

export const getVisiblePosts = createSelector(
  [getDisplayPosts, getPosts],
  (displayPosts, posts) => {
    return posts.slice(0, displayPosts);
  }
);

import { actionsTypes } from "./actions";

const getInitialState = () => ({
  storyIds: [],
  stories: [],
  page: 0,
  isFetching: false,
  error: ""
});

const story = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionsTypes.FETCH_STORY_IDS_REQUEST:
      /* console.log("reducers called");
      console.log("payload");
      console.log(payload); */

      return {
        ...state,
        ...payload
      };
    case actionsTypes.FETCH_STORIES_REQUEST:
      return {
        ...state,
        stories: [...state.stories, ...payload.stories],
        page: state.page + 1
      };
    default:
      return state;
  }
};

export default story;

import hackerNewsApi from "services/hackerNewsApi";
import _ from "lodash";

const NS = "@newsReader/story";

export const actionsTypes = {
  FETCH_STORY_IDS_REQUEST: `${NS}/FETCH_STORY_IDS_REQUEST`,
  /* FETCH_STORY_IDS_SUCCESS: `${NS}/FETCH_STORY_IDS_SUCCESS`,
  FETCH_STORY_IDS_FAILURE: `${NS}/FETCH_STORY_IDS_FAILURE`, */
  FETCH_STORIES_REQUEST: `${NS}/FETCH_STORIES_REQUEST`,
  CLEAN_STORIES_REQUEST: `${NS}/CLEAN_STORIES_REQUEST` /* ,
  FETCH_STORIES_SUCCESS: `${NS}/FETCH_STORIES_SUCCESS`,
  FETCH_STORIES_FAILURE: `${NS}/FETCH_STORIES_FAILURE` */
};

const action = (type, payload) => ({ type, payload });

/* const actions = {
  fetchStoryIds: (payload = {}) => {
    return dispatch => {
      dispatch(action(actionsTypes.FETCH_STORY_IDS_REQUEST), payload);

      return hackerNewsApi.getTopStoryIds()
    };
  }
};
 */

export const fetchStoryIds = () => async dispatch => {
  /* console.log("fetched from actions"); */
  const storyIds = await hackerNewsApi.getTopStoryIds();
  /* console.log("response from actions");
  console.log(response); */
  dispatch(action(actionsTypes.FETCH_STORY_IDS_REQUEST, { storyIds }));
  dispatch(fetchStories(storyIds, 0));
};

export const fetchStories = (storyIds, page) => async dispatch => {
  console.log("fetch stories called");
  const stories = await hackerNewsApi.getStoriesByPage(storyIds, page);
  /* console.log(response); */
  dispatch(action(actionsTypes.FETCH_STORIES_REQUEST, { stories, page }));
};

/* export default { fetchStoryIds, fetchStories }; */
export const cleanStories = () =>
  action(actionsTypes.CLEAN_STORIES_REQUEST, {});

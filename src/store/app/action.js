const NS = "@newsReader/app";

export const actionType = {
  SET_THEME: `${NS}/SET_THEME`
};

const actions = {
  setTheme: (payload = {}) => ({ type: actionType.SET_THEME, payload })
};

export default actions;

const NS = "@newsReader/app";

export const actionType = {
  SET_THEME: `${NS}/SET_THEME`,
  SET_LAYOUT: `${NS}/SET_LAYOUT`
};

const actions = {
  setTheme: (payload = {}) => ({ type: actionType.SET_THEME, payload }),
  setLayout: (payload = {}) => ({ type: actionType.SET_LAYOUT, payload })
};

export default actions;

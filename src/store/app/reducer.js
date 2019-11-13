import { actionType } from "./actions";

const getInitialState = () => ({
  theme: "light",
  layout: "list"
});

const app = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionType.SET_THEME:
      return {
        ...state,
        theme: payload // {theme: <VALUE>}
      };
    case actionType.SET_LAYOUT:
      return {
        ...state,
        layout: payload // {layout: <VALUE>}
      };
    default:
      return state;
  }
};

export default app;

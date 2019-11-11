import { actionType } from "./action";

const getInitialState = () => ({
  theme: "dark"
});

const app = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionType.SET_THEME:
      return {
        ...state,
        ...payload // {theme: <VALUE>}
      };
    default:
      return state;
  }
};

export default app;

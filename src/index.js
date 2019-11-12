import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import GlobalStyles from "styles/globals";
import { Provider } from "react-redux";
import configureStore from "store";
import * as serviceWorker from "./serviceWorker";
import hackerNewsApi from "services/hackerNewsApi";

hackerNewsApi.getTopStoryIds().then(ids => console.log(ids));

const renderApp = () => {
  const initialState = {};
  const store = configureStore(initialState);

  store.dispatch({ type: "@newsReader/@@INIT" });

  if (process.env.NODE_ENV !== "production") {
    console.log("Initial state ->");
    console.log(store.getState());
  }

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <GlobalStyles />
        <App />
      </div>
    </Provider>,
    document.getElementById("root")
  );
};

renderApp();

serviceWorker.unregister();

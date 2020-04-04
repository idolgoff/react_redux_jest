import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export const App = () => (
  <Provider store={store}>
    <div>Hello, world</div>
  </Provider>
);
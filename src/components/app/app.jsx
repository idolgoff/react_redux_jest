import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Input } from "../input";
import { ListItems } from "../list-items";

export const App = () => (
  <Provider store={store}>
    <Input />
    <ListItems />
  </Provider>
);

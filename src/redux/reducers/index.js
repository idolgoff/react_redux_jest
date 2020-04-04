import { combineReducers } from "redux";
import { users } from "./users";
import { items } from "./items";
import { notifications } from "./notifications";

export const appReducer = combineReducers({
  users,
  items,
  notifications
});

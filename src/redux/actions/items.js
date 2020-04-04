import { types } from "../constants";

export const addItem = item => ({
  type: types.addItem,
  payload: { item }
});

export const deleteItem = item => ({
  type: types.deleteItem,
  payload: { item }
});

export const markAsDone = item => ({
  type: types.markItemAsDone,
  payload: { item }
});

export const markAsUndone = item => ({
  type: types.markItemAsUndone,
  payload: { item }
});

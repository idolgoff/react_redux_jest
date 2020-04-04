import { types } from "../constants";
/**
 * item
 * - id: string
 * - name: string
 * - done: boolean
 **/

export const defaultItems = {};
export const items = (state = defaultItems, action) => {
  switch (action.type) {
    case types.addItem:
      return { ...state, [action.payload.item.id]: action.payload.item };
    // case types.deleteItem: {
    //   const { id } = action.payload.item;
    //   const newState = { ...state };
    //   delete newState[id];
    //   return newState;
    // }
    // case types.markItemAsDone: {
    //   const { id } = action.payload.item;
    //   const newState = { ...state, [id]: { ...state[id], done: true } };
    //   return newState;
    // }
    // case types.markItemAsUndone: {
    //   const { id } = action.payload.item;
    //   const newState = { ...state, [id]: { ...state[id], done: false } };
    //   return newState;
    // }
    default:
      return state;
  }
};

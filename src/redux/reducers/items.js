import { types } from "../constants";
/**
 * Структура item
 * - id: string
 * - name: string
 * - done: boolean
 *
 * Структура редюсера
 * {
 *    [itemId01]: item
 *     ...
 *    [itemIdN]: item
 * }
 **/

export const defaultItems = {};
export const items = (state = defaultItems, action) => {
  switch (action.type) {
    case types.addItem:
      return { ...state, [action.payload.item.id]: action.payload.item };
    case types.deleteItem:
    case types.markItemAsDone:
    case types.markItemAsUndone:
    default:
      return state;
  }
};

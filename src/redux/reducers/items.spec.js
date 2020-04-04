import { items as reducer, defaultItems } from "./items";
import * as actions from "../actions/items";

/**
 * Должен вернуть состояние по умолчанию если тип экшена незнаком
 * Должен обработать addItem экшен
 * Должен обработать deleteItem экшен
 * Должен обработать markItemAsDone экшн
 * Должен обработать markItemAsUndone экшн
 */

// Should return default state
it("Должен вернуть состояние по умолчанию если тип экшена незнаком", () => {
  const extraAction = {
    type: "LEFT_ACTION",
    payload: null
  };
  const before = defaultItems;
  const after = reducer(before, extraAction);
  expect(after).toBe(defaultItems);
});

// Should process addItem action
it("Должен обработать addItem экшн", () => {
  const item = {
    id: "0",
    name: "Milk",
    done: false
  };
  const before = defaultItems;
  const after = reducer(before, actions.addItem(item));
  expect(after).toEqual({ 0: item });
  expect(after).not.toBe(defaultItems);
});

// Should process deleteItem action
it("Должен обработать deleteItem экшн", () => {
  const item = {
    id: "0",
    name: "Milk",
    done: false
  };
  const before = { 0: item };
  const after = reducer(before, actions.deleteItem(item));
  expect(after).toEqual({});
  expect(after).not.toBe(defaultItems);
});

// Should process markItemAsDone action
it("Должен обработать markItemAsDone экшн", () => {
  const item = {
    id: "0",
    name: "Milk",
    done: false
  };
  const before = { 0: item };
  const after = reducer(before, actions.markAsDone(item));
  expect(after).toEqual({ 0: { ...item, done: true } });
  expect(after).not.toBe(before);
});

// Should process markItemAsUndone action
it("Должен обработать markItemAsUndone экшн", () => {
  const item = {
    id: "0",
    name: "Milk",
    done: true
  };
  const before = { 0: item };
  const after = reducer(before, actions.markAsUndone(item));
  expect(after).toEqual({ 0: { ...item, done: false } });
  expect(after).not.toBe(before);
});

import { items as reducer, defaultItems } from "./items";
import * as actions from "../actions/items";

describe("Test items reducer", () => {
  it("Should return default state", () => {
    const extraAction = {
      type: "LEFT_ACTION",
      payload: null
    };
    const before = defaultItems;
    const after = reducer(before, extraAction);
    expect(after).toBe(defaultItems);
  });

  it("Should process addItem action", () => {
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

  it("Should process deleteItem action", () => {
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

  it("Should process markItemAsDone action", () => {
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

  it("Should process markItemAsUndone action", () => {
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
});

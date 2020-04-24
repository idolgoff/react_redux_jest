import {
  notifications as reducer,
  defaultNotifications
} from "./notifications";
import * as actions from "../actions/notifications";

const notification = {
  id: "0",
  name: "У вас три актуальные задачи",
  read: false,
  sent: false
};

/**
 * Должен вернуть состояние по умолчанию если тип экшена незнаком
 * Должен обработать addNotification экшен
 * Должен обработать markNotificationAsRead экшен
 * Должен обработать markNotificationAsSent экшн
 */

it("Должен вернуть состояние по умолчанию если тип экшена незнаком", () => {
  const extraAction = {
    type: "LEFT_ACTION",
    payload: null
  };
  const before = defaultNotifications;
  const after = reducer(before, extraAction);
  expect(after).toBe(defaultNotifications);
});

it("Должен обработать addNotification экшн", () => {});

it("Должен обработать markNotificationAsRead экшн", () => {});

it("Должен обработать markNotificationAsSent экшн", () => {});

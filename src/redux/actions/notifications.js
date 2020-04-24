import { types } from "../constants";

export const addNotification = notification => ({
  type: types.addNotification,
  payload: { notification }
});

export const markNotificationAsRead = notification => ({
  type: types.markNotificationAsRead,
  payload: { notification }
});

export const markNotificationAsSent = notification => ({
  type: types.markNotificationAsSent,
  payload: { notification }
});

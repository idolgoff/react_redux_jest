import { types } from "../constants";

/**
 * Структура notification
 * - id: string
 * - text: string
 * - sent: boolean
 * - read: boolean
 *
 * Структура редюсера
 * {
 *    [notificationId01]: notification
 *     ...
 *    [notificationIdN]: notification
 * }
 **/

export const defaultNotifications = {};
export const notifications = (state = defaultNotifications, action) => {
  switch (action.type) {
    case types.addNotification: {
      const { notification } = action.payload;
      return {
        ...state,
        [notification.id]: notification
      };
    }
    case types.markNotificationAsRead: {
      const { notification } = action.payload;
      return {
        ...state,
        [notification.id]: {
          ...state[notification.id],
          read: true
        }
      };
    }
    case types.markNotificationAsSent: {
      const { notification } = action.payload;
      return {
        ...state,
        [notification.id]: {
          ...state[notification.id],
          sent: true
        }
      };
    }
    default:
      return state;
  }
};

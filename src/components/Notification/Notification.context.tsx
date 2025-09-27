import {
  createContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  type ReactNode,
} from "react";
import type {
  NotificationData,
  NotificationContextType,
} from "./Notification.types";
import { Notification } from "./Notification";

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<NotificationData | null>(
    null,
  );
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const hideNotification = useCallback(() => {
    setNotification(null);
    clearTimer();
  }, []);

  const showNotification = useCallback((data: NotificationData) => {
    clearTimer();
    setNotification(data);
  }, []);

  useEffect(() => {
    if (notification) {
      timerRef.current = window.setTimeout(() => {
        hideNotification();
      }, 5000);
    }

    return () => {
      clearTimer();
    };
  }, [notification, hideNotification]);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Notification notification={notification} onDismiss={hideNotification} />
    </NotificationContext.Provider>
  );
};

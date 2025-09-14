export type NotificationData = {
  title?: string;
  message: string;
};

export type NotificationContextType = {
  showNotification: (data: NotificationData) => void;
};

export type NotificationUIProps = {
  notification: NotificationData | null;
  onDismiss: () => void;
};

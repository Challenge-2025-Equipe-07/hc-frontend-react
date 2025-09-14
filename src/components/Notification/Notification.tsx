import { XIcon } from "@phosphor-icons/react/dist/ssr";
import type { NotificationUIProps } from "./Notification.types";

const Notification = ({ notification, onDismiss }: NotificationUIProps) => {
  if (!notification) {
    return null;
  }

  return (
    <div
      className="fixed right-5 bottom-5 z-50 w-full max-w-sm rounded-lg border border-blue-500 bg-white p-4 shadow-lg"
      role="alert"
    >
      <div className="flex items-start">
        <div className="flex-1">
          {notification.title && (
            <h3 className="text-md font-bold text-gray-900">
              {notification.title}
            </h3>
          )}
          <p className="mt-1 text-sm text-gray-700">{notification.message}</p>
        </div>
        <button
          onClick={onDismiss}
          aria-label="Fechar notificação"
          className="ml-4 flex-shrink-0 rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <XIcon size={24} color="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export { Notification };

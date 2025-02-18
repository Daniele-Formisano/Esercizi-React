import { useNotificationState } from "./NotificationContext";
import clsx from "clsx";

export default function NotificationList() {
  const notifications = useNotificationState();

  return (
    <div className="fixed top-5 right-5 w-96 space-y-3 z-50">
      {notifications.map(({ id, message, type }) => {
        <div
          key={id}
          className={clsx(
            "p-4 rounded shadow-lg text-white",
            type === "success" && "bg-green-500",
            type === "error" && "bg-red-500",
            type === "warning" && "bg-yellow-500",
            type === "info" && "bg-blue-500"
          )}
        >
          <span>{message}</span>
        </div>;
      })}
    </div>
  );
}

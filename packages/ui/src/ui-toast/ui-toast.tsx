import { NotificationData, notifications } from '@mantine/notifications';

export type ToastProps = NotificationData | string;

export function toastSuccess(notification: ToastProps) {
    notification = typeof notification === 'string' ? { message: notification } : notification;
    notifications.show({
        color: notification?.color ?? 'green',
        message: notification?.message,
        title: notification?.title ?? 'Success',
    });
}

export function toastError(notification: ToastProps) {
    notification = typeof notification === 'string' ? { message: notification } : notification;
    notifications.show({
        color: notification?.color ?? 'red',
        message: notification?.message,
        title: notification?.title ?? 'Error',
    });
}
export function toastWarning(notification: ToastProps) {
    notification = typeof notification === 'string' ? { message: notification } : notification;
    notifications.show({
        color: notification?.color ?? 'yellow',
        message: notification?.message,
        title: notification?.title ?? 'Warning',
    });
}
export function toastInfo(notification: ToastProps) {
    notification = typeof notification === 'string' ? { message: notification } : notification;
    notifications.show({
        color: notification?.color ?? 'cyan',
        message: notification?.message,
        title: notification?.title ?? 'Info',
    });
}

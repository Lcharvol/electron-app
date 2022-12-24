import { useState } from 'react';

type OpenNotificationProps = {
  title: string;
  body: string;
};
const useNotification = () => {
  const openNotification = ({ title, body }: OpenNotificationProps) => {
    new Notification(title, { body });
  };

  return { openNotification };
};

export default useNotification;

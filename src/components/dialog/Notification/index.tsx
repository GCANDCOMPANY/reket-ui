import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import app from 'src/recoils/app';
import Icons from './Icons';

const Notification = (): JSX.Element | null => {
  const { isOpen, type, title, message } = useRecoilValue(app.notificationState);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) setShow(true);
    else
      setTimeout(() => {
        setShow(false);
      }, 280);
  }, [isOpen]);

  return show ? (
    <div
      className={`${
        isOpen ? 'animate-fadein-down' : 'animate-fadeout'
      } ${show ? 'opacity-100' : 'opacity-0'} fixed right-16 top-16 z-10 rounded-lg border-1 border-l-8 border-[#f1f1f1] border-l-primary bg-white shadow flex-center`}
    >
      <Icons type={type} />
      <div className="flex-1 px-24 py-16">
        <p className="font-semibold max-md:text-14">{title}</p>
        <p className="text-14 max-md:text-12">{message}</p>
      </div>
    </div>
  ) : null;
};

export default Notification;

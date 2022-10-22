import React from "react";
import NotificationForm from "./NotificationForm";
import { BsFillBellFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
const Notification = () => {
  return (
    <div>
      <h2 className="text-lg font-bold ml-5 mb-4 flex">
        <span className="mt-1.5 mr-2.5">
          <BsFillBellFill />
        </span>
        Notification
      </h2>
      <div className="flex justify-end mr-2">
        <button className="text-xs text-mBlack hover:bg-mGray hover:text-white rounded-lg px-2 py-1 ml-2 flex">
          <BsTrash className="mt-0.5 mr-1" />
          전체 알림 삭제
        </button>
      </div>
      <NotificationForm />
    </div>
  );
};

export default Notification;

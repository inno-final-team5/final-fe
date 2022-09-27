import React from "react";
import { BsFillBellFill } from "react-icons/bs";

const Alarm = () => {
  return (
    <div>
      <h2 className="text-xl font-bold ml-5 mb-5 flex">
        <span className="mt-1 mr-2.5">
          <BsFillBellFill />
        </span>
        Alarm list
      </h2>
      <div className="bg-mCream h-20 px-3 py-5 text-sm mb-5">
        <div>
          <div className="font-bold">
            <span>😋</span>카라멜팝콘
          </div>
          평론가님이 내 게시글에 좋아요를 눌렀습니다.
        </div>
      </div>
      <div className="bg-mCream h-20 px-3 py-5 text-sm mb-5">
        <div>
          <div className="font-bold">
            <span>😋</span>카라멜팝콘
          </div>
          평론가님이 내 게시글에 좋아요를 눌렀습니다.
        </div>
      </div>
    </div>
  );
};

export default Alarm;

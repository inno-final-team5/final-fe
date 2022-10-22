import React from "react";

const NotificationForm = () => {
  return (
    <>
      <div className="border-slate-300 border-solid border-b px-4 py-4 text-xs first:py-0 first:pb-4 ">
        <div className="font-bold mb-1">😋카라멜팝콘카라멜팝콘 평론가님이</div>
        <div className="truncate text-slate-500 mb-1">
          &#62; 와 이번영화 영화추천합니다 강추!!
        </div>
        게시글에 댓글을 달았습니다.
      </div>

      <div className="border-slate-300 border-solid border-b px-4 py-4 text-xs ">
        <div className="font-bold mb-1">😋카라멜팝콘카라멜팝콘 평론가님이</div>
        <div className="truncate text-slate-500 mb-1">
          &#62; 토르 : 러브 앤 썬더
        </div>
        한줄평에 좋아요를 눌렀습니다.
      </div>
    </>
  );
};

export default NotificationForm;

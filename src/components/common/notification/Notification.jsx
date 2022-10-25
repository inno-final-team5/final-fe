import React from "react";
import NotificationForm from "./NotificationForm";
import { BsFillBellFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { getNotice, deleteAllNotice } from "apis/noticeApi";
import { useMutation, useQuery } from "react-query";

// import { useEffect } from "react";
import { stompConnect } from "./NoticeSoket";
const Notification = () => {
  // useEffect(() => {
  //   stompConnect();
  // }, []);
  // const webSocket = new WebSocket("wss://yjcoding.shop/ws/websocket");
  // webSocket.onopen = function () {
  //   webSocket.send(
  //     {
  //       authorization: localStorage.getItem("accessToken"),
  //       "refresh-token": localStorage.getItem("refreshToken"),
  //     },
  //     JSON.stringify("보이시나요~~~")
  //   );
  //   console.log("서버와 웹 소켓 연결됨");
  // };
  // webSocket.onmessage = function (event) {
  //   const data = JSON.parse(event.data);
  //   console.log(data);
  // };

  /**알림 전체목록 가져오기 */
  const getNoticeQuery = useQuery("noticeList", getNotice, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  /**알림 전체 삭제 */
  // const deleteAllNoticeQuery = useMutation(() => deleteAllNotice, {
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   },
  // });

  return (
    <div>
      <h2 className="text-lg font-bold ml-5 mb-4 flex">
        <span className="mt-1 mr-2.5">
          <BsFillBellFill />
        </span>
        Notification
      </h2>

      <div className="flex justify-end mr-2">
        <button
          // onClick={() => {
          //   deleteAllNoticeQuery();
          // }}
          className="text-xs text-mBlack hover:bg-mGray hover:text-white rounded-lg px-2 pb-1 pt-2 ml-2 flex"
        >
          <BsTrash className="mr-1" />
          전체 알림 삭제
        </button>
      </div>
      {/* {getNoticeQuery.data.map((notice) => {
        notice.length !== 0 ? (
          <NotificationForm {...notice} key={notice.ididididididi} />
        ) : (
          <p>받은 알림이 없습니다.</p>
        );
      })} */}
      <NotificationForm />
      <div></div>
    </div>
  );
};

export default Notification;

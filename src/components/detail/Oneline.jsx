import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { useQuery, useMutation, useQueryClient } from "react-query";
import BadgeEmoji from "../common/BadgeEmoji";
import { Toast } from "components/common/Toast";
import {
  addCommentLike,
  deleteCommentLike,
  getMyLikeComment,
} from "apis/oneLineReviewApi";

// import SockJs from "sockjs-client";
// import StompJs from "stompjs";
import * as SockJs from "sockjs-client";
import * as StompJs from "stompjs";

import { useRef } from "react";
import { useEffect } from "react";

function Oneline({
  reviewId,
  oneLineReviewStar,
  oneLineReviewContent,
  nickname,
  likeNum,
  badgeId,
}) {
  const queryClient = useQueryClient();
  const accessToken = localStorage.getItem("accessToken");

  const starRating = (rating) => {
    const star = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        star.push(<FaStar size={20} className="text-yellow-400" />);
      } else {
        star.push(<FaStar size={20} />);
      }
    }
    return star;
  };

  /**내가 좋아요한 댓글 불러오기 */
  const likeReviewId = reviewId;
  const [myLike, setMyLike] = useState([]);
  const myLikeCommnetQuery = useQuery("myLikeCommentList", getMyLikeComment, {
    onSuccess: (data) => {
      setMyLike(data.data.data);
    },
  });
  // //좋아요 상태유지 위해 내가 좋아요한 댓글과 현재 댓글들과 일치하는 데이터 찾기
  let res = myLike.filter((ele) => ele.oneLineReviewId == likeReviewId);

  const addLike = useMutation(() => addCommentLike(reviewId), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myLikeCommentList");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const deleteLike = useMutation(() => deleteCommentLike(reviewId), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myLikeCommentList");
    },
    onError: (error) => {
      console.log(error);
    },
  }).mutate;
  ////////////////////////////////////////////////웹소켓

  // const webSocket = new WebSocket("ws://13.124.170.188/auth/notification");
  // webSocket.onopen = function () {
  //   webSocket.send({
  //     authorization: localStorage.getItem("accessToken"),
  //     "refresh-token": localStorage.getItem("refreshToken"),
  //   });
  //   console.log("서버와 웹 소켓 연결됨");
  // };
  // webSocket.onmessage = function (event) {
  //   console.log(event.data);
  //   webSocket.send("클라이언트에서 서버로 답장을 보냅니다.");
  // };
  /////////////////////////////////쿼리 ,웹소켓
  // const useReactQuerySubscription = () => {
  //   const queryClient = useQueryClient();
  //   React.useEffect(() => {
  //     const websocket = new WebSocket("wss://13.124.170.188/auth/notification");
  //     websocket.onopen = () => {
  //       console.log("connected");
  //     };
  //     websocket.onmessage = (event) => {
  //       console.log(event.data);
  //       websocket.send("클라이언트에서 서버로 답장을 보냅니다.");
  //       // const data = JSON.parse(event.data);
  //       // const queryKey = [...data.entity, data.id].filter(Boolean);
  //       // queryClient.invalidateQueries(queryKey);
  //     };

  //     return () => {
  //       websocket.close();
  //     };
  //   }, [addLike]);
  // };
  ////////////////////////////////스톰프1
  // const sock = new SockJs("http://13.124.170.188/auth/notification");
  // stompClient.current = Stomp.over(socket);

  // const client = new StompJs.Client({
  //   brokerURL: "ws://13.124.170.188/auth/notification",
  //   connectHeaders: {
  //     authorization: localStorage.getItem("accessToken"),
  //     "refresh-token": localStorage.getItem("refreshToken"),
  //   },
  //   debug: function () {
  //     console.log();
  //   },
  //   reconnectDelay: 5000,
  //   heartbeatIncoming: 4000,
  //   heartbeatOutgoing: 4000,
  // });

  // client.onConnect = function (frame) {
  //   // Do something, all subscribes must be done is this callback
  //   // This is needed because this will be executed after a (re)connect
  // };

  // client.onStompError = function (frame) {
  //   // Will be invoked in case of error encountered at Broker
  //   // Bad login/passcode typically will cause an error
  //   // Complaint brokers will set `message` header with a brief message. Body may contain details.
  //   // Compliant brokers will terminate the connection after any error
  //   console.log("Broker reported error: " + frame.headers["message"]);
  //   console.log("Additional details: " + frame.body);
  // };

  // client.activate();
  //////////////////////////////////스톰프2
  const client = useRef({});

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new StompJs.Client({
      // brokerURL: "ws://13.124.170.188/ws-stomp", // 웹소켓 서버로 직접 접속
      webSocketFactory: () => new SockJs("http://13.124.170.188/ws-stomp"),

      connectHeaders: {
        authorization: localStorage.getItem("accessToken"),
        "refresh-token": localStorage.getItem("refreshToken"),
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log("서버 클라이언트 연결");
        // subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  // const subscribe = () => {
  //   console.log("구독");
  // client.current.subscribe(`/sub/chat/${ROOM_SEQ}`, ({ body }) => {
  //   setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
  // });
  // };

  // const publish = () => {
  //   console.log("연결됨");
  // if (!client.current.connected) {
  //   return;
  // }

  // client.current.publish({
  //   destination: "/pub/chat",
  //   body: JSON.stringify({ roomSeq: ROOM_SEQ, message }),
  // });
  // };
  return (
    <div>
      <div className="container 2xl:px-10 mt-2 bg-gray-500 lg:h-8 md:h-24 rounded-2xl px-6 py-0 lg:py-7 sm:py-2 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex flex-col lg:flex-row mt-3 lg:mt-0">
          <a className="flex title-font items-center md:justify-start justify-center text-gray-900">
            <div className="sm:w-2">
              <BadgeEmoji badgeId={badgeId} />
            </div>
            <div className="flex ml-3 lg:w-32 md:w-20 sm:w-20">
              <span className="text-sm text-mCream sm:text-xs">{nickname}</span>
            </div>
          </a>
          <div>
            <span className="flex mt-2 lg:mt-0 items-center justify-center text-gray-600">
              <Stars>{starRating(oneLineReviewStar)}</Stars>
            </span>
          </div>
        </div>
        <span className="text-gray-500 md:ml-2 sm:ml-2 sm:mt-0 mt-4 lg:ml-4 lg:mt-0">
          <h2 className="text-base 2xl:text-base lg:text-sm md:text-sm sm:text-sm font-medium text-gray-300 title-font mb-1 mt-2 sm:mr-2 ">
            {oneLineReviewContent}
          </h2>
        </span>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start">
          <span className="text-mYellow hover:text-mCream items-center">
            {accessToken == null ? (
              <button
                className="mt-1 "
                onClick={() => {
                  Toast.fire({ icon: "warning", title: "로그인이 필요합니다" });
                }}
              >
                <FaRegThumbsUp size={29} />
                <p className="mt-1 text-sm hover:text-mCream ml-1">{likeNum}</p>
              </button>
            ) : res?.length ? (
              <button
                className="mt-1 "
                onClick={() => {
                  deleteLike();
                }}
              >
                <FaThumbsUp size={29} />
                <p className="mt-1 text-sm hover:text-mCream ml-1">{likeNum}</p>
              </button>
            ) : (
              <button
                className="mt-1"
                onClick={() => {
                  addLike.mutate();
                }}
              >
                <FaRegThumbsUp size={29} />
                <p className="mt-1 text-sm hover:text-mCream ml-1">{likeNum}</p>
              </button>
            )}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Oneline;

const Stars = styled.div`
  display: flex;
  .yellowStar {
    color: #fcc419;
  }
`;

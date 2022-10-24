import SockJs from "sockjs-client";
import StompJs from "stompjs";

const sock = new SockJs("https://yjcoding.shop/");

const stomp = StompJs.over(sock);

const getToken = {
  authorization: localStorage.getItem("accessToken"),
  "refresh-token": localStorage.getItem("refreshToken"),
};

export const stompConnect = () => {
  try {
    stomp.connect(getToken, () => {
      // stomp.subscribe(
      //   `/sub/alarm/user/${userId}`,
      //   (data) => {
      //     const newMessage = )JSON.parse(data.body;
      //   },
      //   getToken
      // );
      console.log("스톰프 연결");
    });
  } catch (error) {
    console.log(error);
  }
};

export const stompDisConnect = () => {
  try {
    stomp.disconnect(() => {
      stomp.unsubscribe("sub-0");
    }, getToken);
  } catch (error) {
    console.log(error);
  }
};

//   const AlarmClient = new StompJs.Client({
//     brokerURL: "ws://13.124.170.188/ws-stomp",
//     connectHeaders: {
//       authorization: localStorage.getItem("accessToken"),
//       "refresh-token": localStorage.getItem("refreshToken"),
//     },
//     debug: function (str) {
//       console.log(str);
//     },
//     reconnectDelay: 5000,
//     heartbeatIncoming: 4000,
//     heartbeatOutgoing: 4000,
//   });

//   // Fallback code
//   if (typeof WebSocket !== "function") {
//     // For SockJS you need to set a factory that creates a new SockJS instance
//     // to be used for each (re)connect
//     AlarmClient.webSocketFactory = function () {
//       // Note that the URL is different from the WebSocket URL
//       return new SockJS("http://13.124.170.188/ws-stomp");
//     };
//   }

//   AlarmClient.onConnect = function (frame) {
//     console.log("연결");
//     // Do something, all subscribes must be done is this callback
//     // This is needed because this will be executed after a (re)connect
//   };

//   AlarmClient.onStompError = function (frame) {
//     // Will be invoked in case of error encountered at Broker
//     // Bad login/passcode typically will cause an error
//     // Complaint brokers will set `message` header with a brief message. Body may contain details.
//     // Compliant brokers will terminate the connection after any error
//     console.log("Broker reported error: " + frame.headers["message"]);
//     console.log("Additional details: " + frame.body);
// };

// AlarmClient.activate();

// export default { AlarmClient };

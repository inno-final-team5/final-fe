import Router from "./router/Router";
// import { useEffect } from "react";
// import { stompConnect } from "./components/common/notification/NoticeSoket"

function App() {
  // const getToken = {
  //   authorization: localStorage.getItem("accessToken"),
  //   "refresh-token": localStorage.getItem("refreshToken"),
  // };

  // useEffect(() => {
  //   stompConnect();
  // })
  if (process.env.NODE_ENV === "production") {
    // console.log = function no_console() {};
  }
  return <Router />;
}

export default App;

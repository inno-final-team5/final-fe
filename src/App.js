import Router from "./router/Router";
import {
  stompConnect,
  stompDisConnect,
} from "components/common/notification/NoticeSoket";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      stompConnect();
    }
    return () => {
      stompDisConnect();
    };
  }, []);

  if (process.env.NODE_ENV === "production") {
    // console.log = function no_console() {};
  }
  return <Router />;
}

export default App;

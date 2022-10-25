import Router from "./router/Router";
import { stompConnect } from "components/common/notification/NoticeSoket";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    stompConnect();
  }, []);

  if (process.env.NODE_ENV === "production") {
    // console.log = function no_console() {};
  }
  return <Router />;
}

export default App;

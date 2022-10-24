import Layout from "components/common/Layout";
import BoxOffice from "components/mainpage/BoxOffice";
import MainTabList from "components/mainpage/MainTabList";
import SearchBar from "components/search/SearchBar";

const Main = () => {
  const webSocket = new WebSocket("wss://yjcoding.shop/");
  webSocket.onopen = function () {
    webSocket.send({
      authorization: localStorage.getItem("accessToken"),
      "refresh-token": localStorage.getItem("refreshToken"),
    });
    console.log("서버와 웹 소켓 연결됨");
  };
  webSocket.onmessage = function (event) {
    console.log(event.data);
    webSocket.send("클라이언트에서 서버로 답장을 보냅니다.");
  };
  return (
    <Layout>
      <SearchBar />
      <BoxOffice />
      <MainTabList />
    </Layout>
  );
};

export default Main;

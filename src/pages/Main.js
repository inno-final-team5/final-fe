import Layout from "components/common/Layout";
import BoxOffice from "components/mainpage/BoxOffice";
import MainTabList from "components/mainpage/MainTabList";
import SearchBar from "components/search/SearchBar";

const Main = () => {
  const webSocket = new WebSocket("wss://yjcoding.shop/ws/websocket");
  webSocket.onopen = function () {
    webSocket.send(
      {
        authorization: localStorage.getItem("accessToken"),
        "refresh-token": localStorage.getItem("refreshToken"),
      },
      JSON.stringify("보이시나요~~~")
    );
    console.log("서버와 웹 소켓 연결됨");
  };
  webSocket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    console.log(data);
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

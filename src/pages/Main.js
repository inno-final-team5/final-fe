import Layout from "components/common/Layout";
import BoxOfiice from "components/mainpage/BoxOfiice";
import MainTabList from "components/mainpage/MainTabList";
import SearchBar from "components/search/SearchBar";

const Main = () => {
  return (
    <Layout>
      <SearchBar />
      <BoxOfiice />
      <MainTabList />
    </Layout>
  );
};

export default Main;

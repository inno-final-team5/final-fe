import Layout from "components/common/Layout";
import BoxOffice from "components/mainpage/BoxOffice";
import MainTabList from "components/mainpage/MainTabList";
import SearchBar from "components/search/SearchBar";

const Main = () => {
  return (
    <Layout>
      <SearchBar />
      <BoxOffice />
      <MainTabList />
    </Layout>
  );
};

export default Main;

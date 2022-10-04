import Layout from "components/common/Layout";
import BoxOfiice from "components/mainpage/BoxOfiice";
// import MainSearch from "components/mainpage/MainSearch";
import MainTabList from "components/mainpage/MainTabList";
import DetailTags from "components/search/DetailTags";
import SearchBar from "components/search/SearchBar";

const Main = () => {
  return (
    <Layout>
      <SearchBar />
      <DetailTags />
      <BoxOfiice />
      <MainTabList />
    </Layout>
  );
};

export default Main;

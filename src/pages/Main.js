import Layout from "components/common/Layout";
import BestFavorite from "components/mainpage/BestFavorite";
import MainTabList from "components/mainpage/MainTabList";
import SearchBar from "components/search/SearchBar";

const Main = () => {
  return (
    <Layout>
      <SearchBar />
      <BestFavorite />
      <MainTabList />
    </Layout>
  );
};

export default Main;

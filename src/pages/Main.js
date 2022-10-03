import Layout from "components/common/Layout";
import BoxOfiice from "components/mainpage/BoxOfiice";
import MainSearch from "components/mainpage/MainSearch";
import MainTabList from "components/mainpage/MainTabList";

const Main = () => {
  return (
    <Layout>
      <MainSearch />
      <BoxOfiice />
      <MainTabList />
    </Layout>
  );
};

export default Main;

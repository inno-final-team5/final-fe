import Layout from "components/common/Layout";
import BoxOfiice from "components/mainpage/BoxOfiice";
import MainSearch from "components/mainpage/MainSearch";
import MainTabList from "components/mainpage/MainTabList";

const Main = () => {
  return (
    <Layout>
      <div className="bg-slate-600">This is Main Page</div>
      <MainSearch />
      <BoxOfiice />
      <MainTabList/>
    </Layout>
  );
};

export default Main;

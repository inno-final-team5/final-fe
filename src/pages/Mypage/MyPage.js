import Layout from "components/common/Layout";
import MyContainer from "components/mypage/MyContainer";
import SideBar from "components/mypage/Sidebar";

const MyPage = () => {
  return (
    <Layout>
      <>
        <section>
          <div className="mt-4">
            <div className="bg-mBlack fixed w-56">
              <SideBar />
            </div>
            <div className="bg-mBlack rounded-sm pl-64 ">
              <MyContainer />
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default MyPage;

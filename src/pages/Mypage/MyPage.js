import Layout from "components/common/Layout";
import MyContainer from "components/mypage/MyContainer";
import SideBar from "components/mypage/Sidebar";

const MyPage = () => {
  return (
    <Layout>
      <>
        <section>
          <div className="grid grid-cols-12">
            <div className="col-span-2 bg-mBlack max-h-min pl-2 mx-2 mt-4">
              <SideBar />
            </div>
            <div className="col-span-10 bg-mGray  pl-2 mt-4 border border-none border-mYellow">
              <MyContainer />
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default MyPage;

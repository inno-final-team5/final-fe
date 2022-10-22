import tw from "tailwind-styled-components";
import Layout from "components/common/Layout";
import MyContainer from "components/mypage/MyContainer";
import SideBar from "components/mypage/Sidebar";

const MyPage = () => {
  return (
    <Layout>
      <MyPageContainer>
        <MyPageSidebarContainer>
          <SideBar />
        </MyPageSidebarContainer>
        <MyPageContentContainer>
          <MyContainer />
        </MyPageContentContainer>
      </MyPageContainer>
    </Layout>
  );
};

const MyPageContainer = tw.div`
mt-4 h-full
`;
const MyPageSidebarContainer = tw.div`
bg-mBlack lg:block hidden lg:fixed
`;

const MyPageContentContainer = tw.div`
bg-mBlack rounded-xl lg:pl-56 h-full
`;

export default MyPage;

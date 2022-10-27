import tw from "tailwind-styled-components";
import Layout from "components/common/Layout";
import MyContainer from "components/mypage/MyContainer";
import SideBar from "components/mypage/Sidebar";

const MyPage = () => {
  return (
    <Layout>
      <Container>
        <SidebarContainer>
          <SideBar />
        </SidebarContainer>
        <ContentContainer>
          <MyContainer />
        </ContentContainer>
      </Container>
    </Layout>
  );
};

const Container = tw.div`
mt-4 h-full
`;
const SidebarContainer = tw.div`
bg-mBlack lg:block hidden lg:fixed
`;

const ContentContainer = tw.div`
bg-mBlack lg:pl-56 h-full
`;

export default MyPage;

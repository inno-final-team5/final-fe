import tw from "tailwind-styled-components";
import Layout from "components/common/Layout";
import MySideBar from "components/myPage/MySidebar";
import MyRouter from "components/myPage/MyRouter";

const MyPage = () => {
  return (
    <Layout>
      <Container>
        <SidebarContainer>
          <MySideBar />
        </SidebarContainer>
        <ContentContainer>
          <MyRouter />
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

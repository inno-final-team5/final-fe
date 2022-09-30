import React from "react";
import Sidebar from "components/community/Sidebar";
import tw from "tailwind-styled-components";
import Layout from "components/common/Layout";
import BoardContainer from "components/community/BoardContainer";

const Community = () => {
  return (
    <Layout>
      <CommunityContainer>
        <CommunitySidebarContainer>
          <Sidebar />
        </CommunitySidebarContainer>
        <CommunityContentContainer>
          <BoardContainer />
        </CommunityContentContainer>
      </CommunityContainer>
    </Layout>
  );
};

const CommunityContainer = tw.div`
`;
const CommunitySidebarContainer = tw.div`bg-mBlack md:block hidden md:fixed`;

const CommunityContentContainer = tw.div`
bg-mBlack rounded-sm md:pl-52 h-screen
`;
export default Community;

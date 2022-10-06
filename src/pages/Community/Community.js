import React from "react";
import tw from "tailwind-styled-components";
import Layout from "components/common/Layout";
import Sidebar from "components/community/Sidebar";
import BoardContainer from "components/community/BoardContainer";

const Community = () => {
  return (
    <Layout>
      <CommunityWrapper>
        <CommunitySidebarWrapper>
          <Sidebar />
        </CommunitySidebarWrapper>
        <CommunityContentWrapper>
          <BoardContainer />
        </CommunityContentWrapper>
      </CommunityWrapper>
    </Layout>
  );
};

const CommunityWrapper = tw.div`
`;
const CommunitySidebarWrapper = tw.div`bg-mBlack md:block hidden md:fixed`;

const CommunityContentWrapper = tw.div`
bg-mBlack rounded-sm md:pl-52 
`;
export default Community;

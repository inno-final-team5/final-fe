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
mt-4
`;
const CommunitySidebarWrapper = tw.div`bg-mBlack lg:block hidden lg:fixed`;

const CommunityContentWrapper = tw.div`
bg-mBlack rounded-sm xl:pl-52 lg:pl-44
`;
export default Community;

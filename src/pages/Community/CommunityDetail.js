import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import Layout from "components/common/Layout";

const CommunityDetail = (props) => {
  return (
    <MainSection>
      <Box>
        <Button>삭제</Button>
        <Button>수정</Button>
      </Box>
    </MainSection>
  );
};

const MainSection = tw.div`
flex
relative
`;

const Button = tw.button`
text-mBlack
bg-mYellow
hover:bg-mCream  
font-medium 
rounded-lg 
text-sm 
px-5 
py-2.5
mb-2
flex
ml-auto
`;

const Box = tw.div`
bg-mGray
w-4/6
v-auto
p-10
m-8
rounded
`;

export default CommunityDetail;
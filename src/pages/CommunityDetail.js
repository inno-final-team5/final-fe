import React, { useEffect } from "react";
import Sidebar from "components/Community/Sidebar";
import tw from "tailwind-styled-components";
import Layout from "components/common/Layout";

// import { postList } from '../../Data';

const CommunityDetail = (props) => {
  const [reviewList, setReviewList] = useState([]);

  // useEffect(() => {
  //   setDataList(postList);
  // }, [ ])
  return (
    <Layout>
      <MainSection>
        <Sidebar></Sidebar>
        <Box>
          <Button>삭제</Button>
          <Button>수정</Button>
        </Box>
      </MainSection>
    </Layout>
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

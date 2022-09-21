import React from "react";
import Layout from "components/common/Layout";
import Sidebar from "components/Community/Sidebar";
import tw from "tailwind-styled-components";

const CommunityEdit = () => {
  return (
    <Layout>
      <section class="flex">
        <Sidebar></Sidebar>
        <WritingBox>
          {/* <TitleArea>
            title: <input type="text" class="block"></input>
            writer: <input type="text" class="block"></input>
            <input type="radio"></input>
          </TitleArea> */}

          <ContentArea
            id="Contents"
            rows="15"
            placeholder="Writing a review..."
          ></ContentArea>
        </WritingBox>
      </section>
    </Layout>
  );
};

const WriteButton = tw.button`
text-mBlack
bg-mCream 
hover:bg-mYellow  
font-medium 
rounded-lg 
text-sm 
px-5 
py-2.5 
ml-auto
mr-8
mb-2
flex
`;

const WritingBox = tw.div`
bg-mGray
w-4/5
flex
`;

const TitleArea = tw.div`
`;

const ContentArea = tw.textarea`
inline-block
p-2.5
w-11/12
m-10
text-sm 
text-mBlack 
bg-mWhite 
rounded-lg
justify-center
`;

export default CommunityEdit;

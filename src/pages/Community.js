import React from "react";
import Sidebar from "components/Community/Sidebar";
import tw from "tailwind-styled-components";
import Layout from "components/common/Layout";

const Community = () => {
  return (
    <Layout>
      <div className="justify-end flex">
        <WriteButton>글쓰기</WriteButton>
      </div>
      <MainSection>
        <Sidebar></Sidebar>
        <ReviewList>
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-mBlack ">
              <thead class=" text-mYellow text-base bg-mBlack">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    구분
                  </th>
                  <th scope="col" class="py-3 px-6">
                    제목
                  </th>
                  <th scope="col" class="py-3 px-6">
                    작성자
                  </th>
                  <th scope="col" class="py-3 px-6">
                    작성일
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-mWhite hover:bg-mCream">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    영화
                  </th>
                  <td class="py-4 px-6">인생영화입니다</td>
                  <td class="py-4 px-6">김영화</td>
                  <td class="py-4 px-6">2022.11.11</td>
                  <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="bg-mWhite hover:bg-mCream">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    영화관
                  </th>
                  <td class="py-4 px-6">인생영화입니다</td>
                  <td class="py-4 px-6">김영화</td>
                  <td class="py-4 px-6">2022.11.11</td>
                  <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="bg-mWhite hover:bg-mCream">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    영화
                  </th>
                  <td class="py-4 px-6">인생영화입니다</td>
                  <td class="py-4 px-6">김영화</td>
                  <td class="py-4 px-6">2022.11.11</td>
                  <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ReviewList>
      </MainSection>
    </Layout>
  );
};

const MainSection = tw.div`
flex
relative
`;

const WriteButton = tw.button`
text-mBlack
bg-mYellow
hover:bg-mCream  
font-medium 
rounded-lg 
text-sm 
px-5 
py-2.5
mb-2
ml-auto
mr-20
mt-10
`;

const ReviewList = tw.div`
bg-mGray
w-4/6
v-auto
ml-14
p-10
m-8
rounded
`;

export default Community;

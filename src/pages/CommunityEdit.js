import React from "react";
import Layout from "components/common/Layout";
import Sidebar from "components/Community/Sidebar";
import tw from "tailwind-styled-components";

const CommunityEdit = () => {
  return (
    <Layout>
      <MainSection>
        <Sidebar></Sidebar>
        <Box>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6">
                      <label
                        for="title"
                        class="block mb-2 text-sm font-medium text-mBlack "
                      >
                        제목
                      </label>
                      <input
                        type="title"
                        id="title"
                        class="bg-mWhite text-mBlack text-sm rounded-lg block w-full p-2.5 0"
                      ></input>
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="nickname"
                        class="block text-sm font-medium text-mBlack"
                      >
                        작성자
                      </label>
                      <input
                        type="text"
                        id="nickname"
                        class="bg-mWhite text-mBlack text-sm rounded-lg block w-full p-2.5 cursor-not-allowed"
                        value="{닉네임}"
                        disabled
                        readonly
                      ></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="date"
                        class="block text-sm font-medium text-mBlack"
                      >
                        작성일
                      </label>
                      <input
                        type="text"
                        id="date"
                        class="bg-mWhite text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed"
                        value="{작성일}"
                        disabled
                        readonly
                      ></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="category"
                        class="block mb-2 text-sm font-medium text-mBlack"
                      >
                        분류
                      </label>
                      <select
                        id="category"
                        class="bg-mWhite text-mBlack text-sm rounded-lg block w-full p-2.5"
                      >
                        <option>영화</option>
                        <option>영화관</option>
                      </select>
                    </div>
                    <div class="col-span-6">
                      <label
                        for="review"
                        class="block mb-2 text-sm font-medium text-mBlack"
                      >
                        내용
                      </label>
                      <textarea
                        id="review"
                        rows="10"
                        class="block p-2.5 w-full text-sm text-mBlack bg-mWhite rounded-lg border border-gray-300"
                        placeholder="리뷰를 남겨주세요"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-mWhite text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-mBlack bg-mYellow hover:bg-mCream "
                  >
                    등록
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </MainSection>
    </Layout>
  );
};

const MainSection = tw.div`
flex
relative
`;

const Box = tw.div`
bg-mGray
w-4/6
v-auto
p-10
m-8
rounded
`;

export default CommunityEdit;

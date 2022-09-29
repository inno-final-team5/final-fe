import React from "react";
import tw from "tailwind-styled-components";
import { FaThumbsUp } from "react-icons/fa";

const CommunityDetail = (props) => {
  return (
    <MainSection>
      <Box>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-mBlack "
                  >
                    제목2
                  </label>
                  <input
                    type="title"
                    id="title"
                    value={props.title}
                    className="bg-mWhite text-mBlack text-sm rounded-lg block w-full p-2.5 0"
                    required
                  ></input>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="nickname"
                    className="block text-sm font-medium text-mBlack"
                  >
                    작성자
                  </label>
                  <input
                    type="text"
                    id="nickname"
                    className="bg-mWhite text-mBlack text-sm rounded-lg block w-full p-2.5 cursor-not-allowed"
                    value={props.nickname}
                    disabled
                    readOnly
                  ></input>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-mBlack"
                  >
                    작성일
                  </label>
                  <input
                    type="text"
                    id="date"
                    className="bg-mWhite text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed"
                    value={props.date}
                    readOnly
                  ></input>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-mBlack"
                  >
                    분류
                  </label>
                  <select
                    id="category"
                    className="bg-mWhite text-mBlack text-sm rounded-lg block w-full p-2.5"
                  >
                    <option>영화</option>
                    <option>영화관</option>
                  </select>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="review"
                    className="block mb-2 text-sm font-medium text-mBlack"
                  >
                    내용
                  </label>
                  <textarea
                    id="review"
                    rows="10"
                    value={props.review}
                    className="block p-2.5 w-full text-sm text-mBlack bg-mWhite rounded-lg border border-gray-300"
                    placeholder="리뷰를 남겨주세요"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-mWhite flex justify-center items-center text-3xl">
              <FaThumbsUp className="p-4" />
            </div>
            <div className="px-4 py-3 bg-mWhite sm:px-6 flex flex-row justify-end gap-4">
              <Button>삭제</Button>
              <Button>수정</Button>
            </div>
          </div>
        </div>
      </Box>
    </MainSection>
  );
};

const MainSection = tw.div`
w-full
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
p-8
`;

export default CommunityDetail;

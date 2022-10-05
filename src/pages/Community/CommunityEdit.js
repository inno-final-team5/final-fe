import { addPost } from "apis/postApi";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import tw from "tailwind-styled-components";

const CommunityEdit = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const nickname = localStorage.getItem("nickname");

  const today = new Date().toLocaleDateString("ko-KR");

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [category, setCategory] = useState("영화");

  const addPostMutation = useMutation(addPost, {
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      navigate("/community/all");
    },
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    addPostMutation.mutate({
      postCategory: category,
      postContent: review,
      postTitle: title,
    });

    setTitle("");
    setReview("");
  };

  return (
    <MainSection>
      <Box>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={onSubmitHandler}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-mBlack"
                    >
                      분류
                    </label>
                    <select
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                      id="category"
                      className="bg-mWhite text-mBlack text-sm rounded-lg block w-full p-2.5"
                    >
                      <option value="영화">영화</option>
                      <option value="영화관">영화관</option>
                    </select>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-mBlack "
                    >
                      제목
                    </label>
                    <input
                      type="title"
                      id="title"
                      value={title}
                      maxLength="60"
                      placeholder="60자 이내로 작성해주세요!"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      className="bg-mWhite text-mBlack text-sm rounded-lg block w-full p-2.5 0"
                      required
                    ></input>
                  </div>
                  {/* <div className="col-span-6 sm:col-span-3">
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
                      value={nickname}
                      disabled
                      readOnly
                    ></input>
                  </div> */}

                  {/* <div className="col-span-6 sm:col-span-3">
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
                      value={today}
                      readOnly
                    ></input>
                  </div> */}

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
                      value={contents}
                      onChange={(e) => {
                        setContents(e.target.value);
                      }}
                      className="block p-2.5 w-full text-sm text-mBlack bg-mWhite rounded-lg border border-gray-300"
                      placeholder="리뷰를 남겨주세요"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-mWhite text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-mBlack bg-mYellow hover:bg-mCream "
                >
                  등록
                </button>
              </div>
            </div>
          </form>
        </div>
      </Box>
    </MainSection>
  );
};

const MainSection = tw.div`

w-full
`;

const Box = tw.div`
bg-mGray
p-8

rounded
`;

export default CommunityEdit;

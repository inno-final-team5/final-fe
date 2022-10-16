import React, { useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { addMyOneLine, getMyOneLineReviews } from "apis/oneLineReviewApi";
import { useParams } from "react-router-dom";
import MyOneline from "./MyOneline";
import { Toast } from "components/common/Toast";

const OnelineForm = (props) => {
  const queryClient = useQueryClient();
  const params = useParams();
  const id = params.id;
  const [allmyline, setAllmyline] = useState([]);
  const accessToken = localStorage.getItem("accessToken");

  /* 별점 추가 */
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  let score = clicked.filter(Boolean).length;

  const title = params.title;
  const poster = params.poster;
  const poster_path = "/" + poster + ".jpg";

  const myOneline = useRef("");

  /**한줄평 추가 */
  const addOneline = (data) => {
    if (data.oneLineReviewContent == 0) {
      Toast.fire({ icon: "warning", title: "한줄평을 입력해주세요" });
      return;
    } else if (data.oneLineReviewStar == 0) {
      Toast.fire({ icon: "warning", title: "별점을 입력해주세요" });
      return;
    } else if (data.oneLineReviewContent.length > 80) {
      Toast.fire({ icon: "warning", title: "한줄평은 80자 이내입니다" });
      return;
    } else {
      return addMyOneLine(data);
    }
  };

  const addOneLineComment = useMutation(addOneline, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myOneline");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const myMovieQuery = useQuery("myOneline", getMyOneLineReviews, {
    onSuccess: (data) => {
      setAllmyline(data.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  //작성한 한줄평과 영화가 맞는지 확인
  let res = allmyline.filter((ele) => ele.movieId == id);

  function countingWords() {
    document.getElementById("txtLength").innerHTML = document.getElementById("userTxt").value.length;
  }
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      document.getElementById("addLine").click();
    }
  };
  return (
    <div>
      {accessToken == null ? null : res?.length ? (
        <>
          <MyOneline res={res} />
        </>
      ) : (
        <>
          <section className="mt-6">
            <div className="container md:w-5/6 sm:w-5/6 lg:w-full xl:w-full pt-2 pb-2 rounded-3xl bg-mGray mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex lg:w-full 2xl:w-full mr-6 title-font lg:ml-8 md:ml-4 sm:ml-0 font-medium items-center ml-2 mb-4 md:mb-0">
                <h1 className="md:text-lg font-medium title-font md:flex-row flex-col text-mYellow mt-2">한줄평작성하기</h1>
              </div>
              <Stars className="lg:ml-10 lg:mr-0 lg:mt-2 xl:ml-14  ">
                {array.map((el, idx) => {
                  return <FaStar key={idx} size="28" onClick={() => handleStarClick(el)} className={clicked[el] && "yellowStar"} />;
                })}
              </Stars>
              <div className="flex flex-col w-full mt-2 lg:mt-0 lg:w-3/4 xl:w-4/5 md:w-full sm:items-center sm:flex-col md:flex-row sm:w-full">
                <div className="mr-3 2xl:w-full md:w-full lg:w-full xl:mt-0 sm:mt-2 sm:w-full sm:mr-3 lg:mr-0 md:mr-auto md:ml-2 lg:ml-0 md:py-2 pl-5 md:border-l md:border-gray-400 flex flex-wrap text-sm ">
                  <textarea
                    id="userTxt"
                    onKeyUp={() => countingWords()}
                    ref={myOneline}
                    className="pl-2 py-1 h-8 w-full rounded-xl lg:mt-2 md:mt-0 sm:mt-2 resize-none"
                    onKeyPress={onKeyPress}
                  />
                </div>
                <div className="flex-shrink-0 flex-col inline-flex md:flex-row sm:flex-col items-center focus:outline-none text-base xl:mr-6 md:mt-0">
                  <div className="text-sm text-gray-500 lg:ml-1 lg:mt-6 md:mt-8 sm:mt-2 mr-2 md:visible  ">
                    <span id="txtLength">0</span>
                    /80
                  </div>
                  <button
                    id="addLine"
                    onClick={() => {
                      const data = {
                        movieId: id,
                        title: title,
                        posterPath: poster_path,
                        oneLineReviewStar: score,
                        oneLineReviewContent: myOneline.current.value,
                      };
                      addOneLineComment.mutate(data);
                    }}
                    className="px-4 2xl:px-6 xl:px-8 md:mt-3 lg:px-6 sm:mt-2 sm:px-10 md:px-5 xl:mt-2 lg:mt-4 bg-mYellow inline-flex py-2 rounded-full items-center hover:bg-mCream "
                  >
                    작성하기
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default OnelineForm;

const Stars = styled.div`
  display: flex;
  & svg {
    color: gray;
    cursor: pointer;
  }
  :hover svg {
    color: #fcc419;
  }
  & svg:hover ~ svg {
    color: gray;
  }
  .yellowStar {
    color: #fcc419;
  }
`;

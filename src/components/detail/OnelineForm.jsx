import React, { useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { authApi } from "apis/index";
import { useParams } from "react-router-dom";
import MyOneline from "./MyOneline";
import { Toast } from "components/common/Toast";

const OnelineForm = (props) => {
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
      return authApi.post(`/auth/movie/one-line-review`, data);
    }
  };
  const queryClient = useQueryClient();
  const { mutate } = useMutation(addOneline, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myOneline");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  /**내가 작성한 한줄평 불러오기 */
  const getMyOneline = async () => {
    return await authApi.get(`/auth/movie/one-line-review`);
  };
  const myMovieQuery = useQuery("myOneline", getMyOneline, {
    onSuccess: (data) => {
      setAllmyline(data.data.data);
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
  return (
    <div>
      {accessToken == null ? null : res?.length ? (
        <>
          <MyOneline res={res} />
        </>
      ) : (
        <>
          <section className="mt-6">
            <div className="container md:w-5/6 sm:w-5/6 lg:w-full pl-3 pt-2 pb-2 rounded-3xl bg-mGray mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex lg:w-full 2xl:w-full mr-6 title-font font-medium items-center ml-2 mb-4 md:mb-0">
                <h1 className="md:text-lg dfont-medium title-font md:flex-row flex-col text-mYellow">한줄평작성하기</h1>
              </div>
              <Stars className="lg:ml-5 lg:mr-0">
                {array.map((el, idx) => {
                  return <FaStar key={idx} size="30" onClick={() => handleStarClick(el)} className={clicked[el] && "yellowStar"} />;
                })}
              </Stars>
              <div className="flex xl:w-full lg:w-4/5 xl:w-5/6 md:w-full sm:items-center sm:flex-col md:flex-row sm:w-full space-x-1">
                <div className="2xl:w-full md:w-full lg:w-full xl:mt-0 sm:mt-2 sm:w-5/6 lg:mr-0 md:mr-auto md:ml-2 lg:ml-0 md:py-2 md:pl-8 md:border-l md:border-gray-400 flex flex-wrap text-base ">
                  <textarea
                    id="userTxt"
                    onKeyUp={() => countingWords()}
                    ref={myOneline}
                    className="pl-2 py-1 h-10 w-full rounded-xl md:mt-0 sm:mt-2 resize-none text-lg"
                  />
                </div>
                <div className="flex-shrink-0 inline-flex items-center focus:outline-none text-base xl:mr-6 md:mt-0">
                  <div className="text-sm text-gray-500 mt-6 mr-2 md:visible sm:invisible">
                    <span id="txtLength">0</span>
                    /80
                  </div>
                  <button
                    onClick={() => {
                      const data = {
                        movieId: id,
                        title: title,
                        posterPath: poster_path,
                        oneLineReviewStar: score,
                        oneLineReviewContent: myOneline.current.value,
                      };
                      mutate(data);
                    }}
                    className="2xl:px-6 xl:px-10 md:mt-2 md:px-4 sm:mt-4 lg:px-6 sm:px-10 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream "
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

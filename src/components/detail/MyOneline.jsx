import React, { useState, useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { Toast } from "components/common/Toast";
import { deleteMyOneLine, updateMyOneLine } from "apis/oneLineReviewApi";

const MyOneline = ({ res }) => {
  const params = useParams();
  const myOneline = useRef(res[0].oneLineReviewContent);
  const onFocus = () => {
    myOneline.current.focus();
  };
  const id = res[0].oneLineReviewId;

  const title = params.title;
  const poster = params.poster;
  const poster_path = "/" + poster + ".jpg";
  const [isEditMode, setIsEditMode] = useState(false);

  /* 별점 추가 */
  const beforeRating = res[0].oneLineReviewStar;
  const [clicked, setClicked] = useState([true, true, true, false, false]);
  const array = [0, 1, 2, 3, 4];

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  let score = clicked.filter(Boolean).length;

  /**별점 설정 */
  const starRating = (rating) => {
    const star = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        star.push(<FaStar size={24} className="text-yellow-400" />);
      } else {
        star.push(<FaStar size={24} className="text-gray-600" />);
      }
    }
    return star;
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation(() => deleteMyOneLine(id), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myOneline");
      Toast.fire({ icon: "success", title: "삭제되었습니다." });
    },
    onError: (error) => {
      console.log(error, "에러");
    },
  });

  /**한줄평 수정 */
  const editMyline = async (data) => {
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
      return await updateMyOneLine(id, data);
    }
  };
  const editBtnHandler = useMutation(editMyline, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myOneline");
      Toast.fire({ icon: "success", title: "수정되었습니다" });
      setIsEditMode(false);
    },
    onError: (error) => {
      console.log(error, "에러");
    },
  }).mutate;

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      document.getElementById("editLine").click();
    }
  };
  return (
    <div>
      {!isEditMode ? (
        <>
          <section className="mt-6 md:flex-col">
            <div className="container sm:w-5/6 lg:w-full pt-2 pb-2 rounded-3xl bg-mGray mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <div className="flex font-bold items-center mr-4 mb-4 md:mb-0 sm:mb-0">
                <h1 className="p-2 md:text-base title-font md:flex-row flex-col text-mYellow ">내가쓴한줄평</h1>
              </div>
              <div className="flex w-full flex-col lg:flex-row md:flex-col sm:flex-col 2xl:w-full xl:w-full md:w-full space-x-2 sm:w-full items-center">
                <MyStars className="md:mt-2 md:ml-5">{starRating(res[0].oneLineReviewStar)}</MyStars>
                <div className="2xl:w-full w-full sm:w-full md:w-full md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap text-base ">
                  <input
                    className="text-sm pl-2 mt-2 pt-2 text-lg sm:text-sm sm:mt-2 md:text-sm w-full h-10 bg-gray-400 rounded-xl"
                    value={res[0].oneLineReviewContent}
                    disabled
                  />
                </div>
                <div className="flex-shrink-0 gap-4 inline-flex items-center focus:outline-none text-base xl:mr-6 md:mt-0">
                  <button
                    className="px-6 mt-2 2xl:px-6 xl:px-6 lg:px-6 md:px-8 bg-mYellow sm:mt-4 sm:px-8 lg:mt-2 inline-flex py-3 rounded-full items-center hover:bg-mCream"
                    onClick={() => {
                      setIsEditMode(true);
                    }}
                  >
                    <TiPencil size="22" />
                  </button>
                  <button
                    onClick={() => {
                      mutate();
                    }}
                    className="px-6 mt-2 2xl:px-6 xl:px-6 lg:px-6 md:px-8 sm:mt-4 sm:px-8 lg:mt-2 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream "
                  >
                    <BsTrash size="22" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="mt-6 md:flex-col">
            <div className="container md:w-5/6 sm:w-5/6 lg:w-full xl:w-full pt-2 pb-2 rounded-3xl bg-mGray mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex font-bold lg:w-full 2xl:w-full mr-4 title-font lg:ml-8 md:ml-4 sm:ml-0 font-medium items-center ml-2 mb-4 md:mb-0">
                <h1 className="p-2 md:text-base title-font md:flex-row flex-col text-mYellow">내가쓴한줄평</h1>
              </div>
              <div className="flex w-full flex-col ml-5 lg:flex-row md:flex-col sm:flex-col 2xl:w-full xl:w-full md:w-full space-x-2 sm:w-full items-center">
                <Stars className="md:mt-2 md:ml-5">
                  {array.map((el, idx) => {
                    return <FaStar key={idx} size="24" onClick={() => handleStarClick(el)} className={clicked[el] && "yellowStar"} />;
                  })}
                </Stars>
                <div className="2xl:w-full w-full sm:w-full md:w-full md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap text-base ">
                  <input
                    className="sm:text-sm mt-2 mr-2 sm:mt-2 pl-2 pt-2 text-lg w-full h-10 rounded-xl text-sm"
                    autoFocus
                    ref={myOneline}
                    onKeyPress={onKeyPress}
                  />
                </div>
                <div className="flex-shrink-0 gap-4 inline-flex items-center focus:outline-none text-base xl:mr-6 md:mt-0">
                  <button
                    className="px-6 mt-2 2xl:px-6 xl:px-6 lg:px-6 md:px-8 bg-mYellow sm:mt-4 sm:px-8 lg:mt-2 inline-flex py-3 rounded-full items-center hover:bg-mCream"
                    onClick={() => {
                      setIsEditMode(false);
                    }}
                  >
                    <IoMdArrowBack size="22" />
                  </button>
                  <button
                    id="editLine"
                    onClick={() => {
                      const data = {
                        movieId: res[0].movieId,
                        oneLineReviewContent: myOneline.current.value,
                        oneLineReviewStar: score,
                        posterPath: poster_path,
                        title: title,
                      };
                      editBtnHandler(data);
                    }}
                    className="px-6 mt-2 2xl:px-6 xl:px-6 lg:px-6 md:px-8 sm:mt-4 sm:px-8 lg:mt-2 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream"
                  >
                    <TiPencil size="22" />
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

export default MyOneline;

const Stars = styled.div`
  display: flex;
  .yellowStar {
    color: #fcc419;
  }
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
`;

const MyStars = styled.div`
  display: flex;
  .yellowStar {
    color: #fcc419;
  }
`;

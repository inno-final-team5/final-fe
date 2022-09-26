import React from "react";
import { AiFillStar } from "react-icons/ai";
// import { AiFillAliwangwang } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import magic from "../../../images/free-icon-magician-2267705.png";
import gun from "../../../images/free-icon-western-8136323.png";
const BestReview = () => {
  return (
    <div>
      <ul>
        <li className="bg-mWhite  px-5 py-3 items-center rounded-lg mb-5 cursor-pointer">
          <div className=" flex-col ">
            <div className="flex">
              <div className=" pr-5 mb-2.5 text-xl font-bold ">
                어디선가 누군가에 무슨 일이 생기면 틀림없이 나타난다 홍반장
              </div>
              <div className=" pr-2.5 flex text-mYellow mt-2">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="flex align-center">
                <span className="mr-3 text-xl ">
                  <img src={gun} alt="" className="w-8" />
                </span>
                <div className="pr-5 flex text-xs text-gray-500 mt-2">
                  팝콘조아팝콘조아팝콘
                </div>
              </div>
              <div className="flex text-right mr-5">
                <FiThumbsUp className=" mb-1" />
                <div>100</div>
              </div>
            </div>
          </div>

          <div className="flex ">
            <div className="px-2 text-sm">
              한줄평 내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다.
            </div>
          </div>
        </li>

        <li className="bg-mWhite  px-5 py-3 items-center rounded-lg mb-5 cursor-pointer">
          <div className=" flex-col ">
            <div className="flex">
              <div className=" pr-5 mb-2.5 text-xl font-bold ">라라랜드</div>
              <div className=" pr-2.5 flex text-mYellow mt-2">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="flex align-center">
                <span className="mr-3 text-xl ">
                  <img src={gun} alt="" className="w-8" />
                </span>
                <div className="pr-5 flex text-xs text-gray-500 mt-2">
                  팝콘조아
                </div>
              </div>
              <div className="flex text-right mr-5">
                <FiThumbsUp className=" mb-1" />
                <div>100</div>
              </div>
            </div>
          </div>

          <div className="flex ">
            <div className="px-2 text-sm">
              한줄평 내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다.
            </div>
          </div>
        </li>

        <li className="bg-mWhite grid grid-cols-12 grid-flow-row-dense px-5 py-3 items-center rounded-lg mb-5 cursor-pointer">
          <div className="w-52 flex-col col-start-1 col-span-2">
            <div className="pr-5 mb-2.5 text-xl font-bold  ">라라랜드</div>
            <div className="pr-5 flex text-sm">
              <span className="mr-1 text-xl">
                {/* <AiFillAliwangwang /> */}
                <img src={magic} alt="" className="w-8" />
              </span>
              팝
            </div>
          </div>

          <div className="flex-col col-span-9">
            <div className=" pr-2.5 flex text-mYellow mb-5">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="pr-5">한줄평 내용입니다. 한줄평 내용입니다.</div>
          </div>

          <div className="grid justify-items-end mr-5">
            <FiThumbsUp className="mb-1" />
            <div>100</div>
          </div>
        </li>

        <li className="bg-mWhite grid grid-cols-12 grid-flow-row-dense px-5 py-3 items-center rounded-lg mb-5 cursor-pointer">
          <div className=" flex-col col-start-1 col-span-3">
            <div className=" pr-5 mb-2.5 text-xl font-bold ">
              블랙회사에 다니고 있는데, 지금 나는 한계에 도달했는지도 모른다
            </div>
            <div className="mr-1  text-xl">
              {/* <AiFillAliwangwang /> */}
              👻💕🌈💜💙
            </div>
            <div className="pr-5 flex text-sm">팝콘조아팝콘조아팝콘</div>
          </div>

          <div className="flex-col col-span-8">
            <div className=" pr-2.5 flex text-mYellow mb-5">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="pr-5">
              한줄평 내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다.
            </div>
          </div>

          <div className="grid justify-items-end mr-5">
            <FiThumbsUp className=" mb-1" />
            <div>100</div>
          </div>
        </li>

        <li className="bg-mWhite grid grid-cols-12 grid-flow-row-dense px-5 py-3 items-center rounded-lg mb-5 cursor-pointer">
          <div className="w-52 flex-col col-start-1 col-span-3">
            <div className="pr-5 mb-2.5 text-xl font-bold  ">라라랜드</div>
            <div className="pr-5 flex text-sm">
              <span className="mr-1 text-xl">
                {/* <AiFillAliwangwang /> */}
                👻💕🌈
              </span>
              팝콘조아
            </div>
          </div>

          <div className="flex-col col-span-8">
            <div className=" pr-2.5 flex text-mYellow mb-5">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="pr-5">
              한줄평 내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다.
            </div>
          </div>

          <div className="grid justify-items-end mr-5">
            <FiThumbsUp className=" mb-1" />
            <div>100</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BestReview;

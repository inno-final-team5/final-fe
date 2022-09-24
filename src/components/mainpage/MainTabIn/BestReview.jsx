import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillAliwangwang } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";

const BestReview = () => {
  return (
    <div>
      <ul>
        {/* <li className="bg-mWhite flex justify-start flex-wrap px-5 py-3 items-center rounded-lg mb-5">
          <div className="flex-col w-52">
            <div className="shrink-0 pr-5 mb-2.5 text-lg font-bold ">
              라라랜드
            </div>
            <div className="shrink-0 pr-5 flex">
              <span className="mr-1">
                <AiFillAliwangwang />
              </span>
              팝콘조아
            </div>
          </div>
          <div className="flex-col grow">
            <div className="shrink-0 pr-2.5 flex text-mYellow mb-5">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="">
              한줄평 내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다.
            </div>
          </div>
          <div className="flex-col">
            <FiThumbsUp className="mr-2.5" />
            <div>100</div>
          </div>
        </li> */}

        <li className="bg-mWhite grid grid-cols-12 grid-flow-row-dense px-5 py-3 items-center rounded-lg mb-5">
          <div className="w-52 flex-col col-start-1 col-span-2">
            <div className=" pr-5 mb-2.5 text-xl font-bold ">라라랜드</div>
            <div className="pr-5 flex text-sm">
              <span className="mr-1">
                <AiFillAliwangwang />
              </span>
              팝콘조아
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
            <div className="pr-5">
              한줄평 내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다.
            </div>
          </div>

          <div className="grid justify-items-end mr-5">
            <FiThumbsUp className=" " />
            <div>100</div>
          </div>
        </li>

        <li className="bg-mWhite grid grid-cols-12 grid-flow-row-dense px-5 py-3 items-center rounded-lg mb-5">
          <div className="w-52 flex-col col-start-1 col-span-2">
            <div className=" pr-5 mb-2.5 text-xl font-bold ">
              라라랜드라라랜드라라랜드라라랜드라라랜드
            </div>
            <div className="pr-5 flex text-sm">
              <span className="mr-1">
                <AiFillAliwangwang />
              </span>
              팝콘조아팝콘조아팝콘
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
            <div className="pr-5">
              한줄평 내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다. 한줄평
              내용입니다. 한줄평 내용입니다. 한줄평 내용입니다.
            </div>
          </div>

          <div className="grid justify-items-end mr-5">
            <FiThumbsUp className=" " />
            <div>100</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BestReview;

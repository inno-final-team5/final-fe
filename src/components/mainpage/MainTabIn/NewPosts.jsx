import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";

const NewPosts = () => {
  return (
    <div>
      <ul>
        <li className="bg-mWhite grid grid-cols-12 grid-flow-row-dense px-5 py-3 items-center rounded-lg mb-5">
          <div className="w-52 flex-col col-start-1 col-span-2">
            <div className="pr-5 flex text-sm">
              <span className="mr-1 text-xl">
                <AiFillAliwangwang />
              </span>
              팝콘조아
            </div>
          </div>

          <div className="flex-col col-span-9">
            <div className="pr-5">게시글 제목</div>
          </div>

          <div className="grid justify-items-end mr-5">
            <div>2022.09.24</div>
          </div>
        </li>

        <li className="bg-mWhite grid grid-cols-12 grid-flow-row-dense px-5 py-3 items-center rounded-lg mb-5">
          <div className="w-52 flex-col col-start-1 col-span-2">
            <div className="pr-5 flex text-sm">
              <span className="mr-1 text-xl">
                <AiFillAliwangwang />
              </span>
              팝콘조아팝콘조아팝콘
            </div>
          </div>

          <div className="flex-col col-span-9">
            <div className="pr-5">
              게시글 제목 게시글 제목 게시글 제목 게시글 제목 게시글 제목 게시글
              제목
            </div>
          </div>

          <div className="grid justify-items-end mr-5">
            <div>2022.09.24</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NewPosts;

import React from "react";
import BestReview from "./MainTabIn/BestReview";
import NewPosts from "./MainTabIn/NewPosts";
import { useState } from "react";

const MainTabList = () => {
  /**클릭한 탭 css*/
  const activeLink = `font-bold bg-mGray text-mYellow px-5 py-2.5 rounded-t-lg cursor-pointer text-base`;
  /**클릭안한 탭 css*/
  const normalLink = `bg-gradient-to-b from-mGray to-Gray px-5 py-2.5 rounded-t-lg cursor-pointer text-base text-mCream`;

  const [index, setIndex] = useState(0);

  /**탭 메뉴 리스트 */
  const MainListTabMenu = [
    {
      title: "베스트 한줄평",
      component: <BestReview />,
    },
    {
      title: "최신 게시글",
      component: <NewPosts />,
    },
  ];

  return (
    <div className="mt-14 pb-20">
      <div className="flex">
        {MainListTabMenu.map((item, idx) => {
          return (
            <div key={idx} className="flex w-fit mx-1">
              <div
                onClick={() => {
                  setIndex(idx);
                }}
                className={index === idx ? activeLink : normalLink}
              >
                <div>{item.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 클릭한 title의 내용만 보여주기 */}
      <div className="bg-mGray p-5 mb-10 rounded-lg">
        {MainListTabMenu[index].component}
      </div>
    </div>
  );
};

export default MainTabList;

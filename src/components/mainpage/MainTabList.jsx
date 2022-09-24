import React from "react";
import { NavLink } from "react-router-dom";
import BestReview from "./BestReview";
import NewPosts from "./NewPosts";
import { useState } from "react";
const MainTabList = () => {
  const [index, setIndex] = useState(0);
  const MainListTabMenu = [
    {
      title: "베스트 한줄평",
      component: <BestReview />,
    },
    {
      title: "최신 리뷰",
      component: <NewPosts />,
    },
  ];

  return (
    <div className="mt-20 pb-20">
      <div className="flex">
        {MainListTabMenu.map((item, index) => {
          return (
            <div key={index} className="flex w-fit mx-2.5">
              <div
                onClick={() => {
                  setIndex(index);
                }}
              >
                <div className="bg-mCream px-5 py-2.5 rounded-t-lg">
                  {item.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>{MainListTabMenu[index].component}</div>
    </div>
  );
};

export default MainTabList;

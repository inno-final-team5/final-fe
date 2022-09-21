import { NavLink } from "react-router-dom";
import SideBarItem from "./SideBarItem";
import { SidebarData } from "data/SidebarData";
import { Fragment } from "react";

const SideBar = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };

  return (
    <Fragment>
      <section>
        <div className="text-white">
          {SidebarData.map((item, index) => {
            return (
              <div key={index}>
                <div className="hover:bg-yellow-500 pl-5 mt-7 w-full h-14 font-bold flex justify-start items-center text-white text-xl space-x-1 ">
                  <span>{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default SideBar;

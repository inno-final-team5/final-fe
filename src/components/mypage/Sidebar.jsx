import { NavLink } from "react-router-dom";
import { SidebarData } from "data/SidebarData";
import { Fragment } from "react";

const SideBar = () => {
  const activeLink = `hover:bg-mYellow mt-6 w-full h-14 font-bold flex justify-start items-center text-mBlack text-xl space-x-1 bg-mYellow rounded-full border-solid border pl-4`;
  const normalLink = `hover:bg-mYellow hover:text-mBlack hover:rounded-full mt-6 w-full h-14  flex justify-start items-center text-mYellow text-xl space-x-1  pl-4`;

  return (
    <Fragment>
      <section>
        <div className="text-white bg-mGray py-4 ">
          {SidebarData.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span>{item.title}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default SideBar;

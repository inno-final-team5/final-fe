import tw from "tailwind-styled-components";
import { NavLink } from "react-router-dom";
import { MySidebarData } from "data/MySidebarData";
import { Fragment } from "react";

const MySideBar = () => {
  const activeLink = `hover:bg-mYellow my-4 w-full h-12 font-bold flex justify-center items-center text-mBlack text-md space-x-1 bg-mYellow rounded-full border-solid border px-3`;
  const normalLink = `hover:bg-mYellow hover:text-mBlack hover:font-bold hover:rounded-full my-4 w-full h-12 flex justify-center items-center text-mYellow text-md space-x-1 px-3 `;

  return (
    <Fragment>
      <section>
        <SideBox>
          {MySidebarData.map((item, index) => {
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
        </SideBox>
      </section>
    </Fragment>
  );
};

const SideBox = tw.div`
  bg-mGray py-2 rounded-lg px-4 flex flex-col justify-center mx-4
`;

export default MySideBar;

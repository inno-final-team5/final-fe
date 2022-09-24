import tw from "tailwind-styled-components";
import { NavLink } from "react-router-dom";
import { MySidebarData } from "data/MySidebarData";
import { Fragment } from "react";

const SideBar = ({ deleteAccount }) => {
  const activeLink = `hover:bg-mYellow mt-6 w-full h-14 font-bold flex justify-center items-center text-mBlack text-xl space-x-1 bg-mYellow rounded-full border-solid border `;
  const normalLink = `hover:bg-mYellow hover:text-mBlack hover:font-bold hover:rounded-full mt-6 w-full h-14  flex justify-center items-center text-mYellow text-xl space-x-1  `;

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

        <LeaveBox>
          <LeaveButton className="" type="button" onClick={deleteAccount}>
            회원 탈퇴
          </LeaveButton>
        </LeaveBox>
      </section>
    </Fragment>
  );
};

const SideBox = tw.div`
  text-white bg-mGray py-4 rounded-sm
`;

const LeaveBox = tw.div`
  h-96 grid content-end
`;
const LeaveButton = tw.button`
  text-mYellow text-xl
`;

export default SideBar;

import { NavLink } from "react-router-dom";
import { MySidebarData } from "data/MySidebarData";
import { Fragment } from "react";

const SideBar = () => {
  const activeLink = `hover:bg-mYellow mt-6 w-full h-14 font-bold flex justify-center items-center text-mBlack text-xl space-x-1 bg-mYellow rounded-full border-solid border `;
  const normalLink = `hover:bg-mYellow hover:text-mBlack hover:font-bold hover:rounded-full mt-6 w-full h-14  flex justify-center items-center text-mYellow text-xl space-x-1  `;

  //Todo modal 로 구현하기!
  const deleteAccount = () => {
    alert("계정을 삭제하시겠습니까?");
  };

  return (
    <Fragment>
      <section>
        <div className="text-white bg-mGray py-4 rounded-sm">
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
        </div>

        <div className=" h-96 grid content-end">
          <button
            className="text-mYellow text-xl"
            type="button"
            onClick={deleteAccount}
          >
            회원 탈퇴
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default SideBar;

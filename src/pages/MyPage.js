import Navbar from "components/common/Navbar";
import MyContainer from "components/mypage/MyContainer";
import SideBar from "components/mypage/Sidebar";
import { Fragment } from "react";

const MyPage = () => {
  return (
    <Fragment>
      {/* heading section */}
      <section>
        <div>
          <Navbar />
        </div>
      </section>
      {/* sidebar section */}
      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-3 bg-black h-screen pl-2">
            <SideBar />
          </div>
          <div className="col-span-9 bg-green-500 h-screen pl-2 ">
            <MyContainer />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MyPage;

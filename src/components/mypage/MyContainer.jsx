import MyBadges from "pages/Mypage/MyBadges";
import MyOneLineReviews from "pages/Mypage/MyOneLineReviews";
import MyFavorites from "pages/Mypage/MyFavorites";
import MyPosts from "pages/Mypage/MyPosts";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MyInfo from "pages/Mypage/MyInfo";
const MyContainer = () => {
  return (
    <Fragment>
      <section>
        <Routes>
          <Route path="favorites" element={<MyFavorites />} />
          <Route path="posts" element={<MyPosts />} />
          <Route path="onelinereviews" element={<MyOneLineReviews />} />
          <Route path="badges" element={<MyBadges />} />
          <Route path="info" element={<MyInfo />} />
        </Routes>
      </section>
    </Fragment>
  );
};

export default MyContainer;

import MyChallenge from "pages/myPage/MyChallenge";
import MyOneLineReviews from "pages/myPage/MyOneLineReviews";
import MyFavorites from "pages/myPage/MyFavorites";
import MyPosts from "pages/myPage/MyPosts";
import MyInfo from "pages/myPage/MyInfo";
import MyPageContainer from "./MyPageContainer";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

const MyContainer = () => {
  return (
    <Fragment>
      <MyPageContainer>
        <Routes>
          <Route path="favorites" element={<MyFavorites />} />
          <Route path="posts" element={<MyPosts />} />
          <Route path="onelinereviews" element={<MyOneLineReviews />} />
          <Route path="badges" element={<MyChallenge />} />
          <Route path="info" element={<MyInfo />} />
        </Routes>
      </MyPageContainer>
    </Fragment>
  );
};

export default MyContainer;

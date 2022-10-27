import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MyFavorites from "pages/MyPage/MyFavorites";
import MyPageContainer from "./MyPageContainer";
import MyPosts from "pages/MyPage/MyPosts";
import MyOneLineReview from "pages/MyPage/MyOneLineReview";
import MyChallenge from "pages/MyPage/MyChallenge";
import MyInfo from "pages/MyPage/MyInfo";

const MyRouter = () => {
  return (
    <Fragment>
      <MyPageContainer>
        <Routes>
          <Route path="favorites" element={<MyFavorites />} />
          <Route path="posts" element={<MyPosts />} />
          <Route path="onelinereviews" element={<MyOneLineReview />} />
          <Route path="badges" element={<MyChallenge />} />
          <Route path="info" element={<MyInfo />} />
        </Routes>
      </MyPageContainer>
    </Fragment>
  );
};

export default MyRouter;

import MyChallenge from "pages/myPages/MyChallenges";
import MyOneLineReviews from "pages/myPages/MyOneLineReviews";
import MyFavorites from "pages/myPages/MyFavorites";
import MyPosts from "pages/myPages/MyPosts";
import MyInfo from "pages/myPages/MyInfo";
import MyPageContainer from "./MyPageContainer";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

const MyRouter = () => {
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

export default MyRouter;

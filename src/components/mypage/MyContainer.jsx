import MyBadges from "pages/MyBadges";
import MyComments from "pages/MyComments";
import MyFavorites from "pages/MyFavorites";
import MyPosts from "pages/MyPosts";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
const MyContainer = () => {
  return (
    <Fragment>
      <section>
        <Routes>
          <Route path="favorites" element={<MyFavorites />} />
          <Route path="posts" element={<MyPosts />} />
          <Route path="comments" element={<MyComments />} />
          <Route path="badges" element={<MyBadges />} />
        </Routes>
      </section>
    </Fragment>
  );
};

export default MyContainer;

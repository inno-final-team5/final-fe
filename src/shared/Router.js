import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "pages/Main";
import Signin from "pages/Signin";
import Detail from "pages/Detail";
import KakaoRedirect from "pages/KakaoRedirect";
import SignUp from "pages/SignUp";
import Challenge from "pages/Challenge";
import NotFound from "pages/NotFound";
import MyPage from "pages/MyPage";
import Community from "pages/Community";
import CommunityDetail from "pages/CommunityDetail";
import CommunityEdit from "pages/CommunityEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/kakaoLogin" element={<KakaoRedirect />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/detail" element={<CommunityDetail />} />
        <Route path="/community/edit" element={<CommunityEdit />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage/*" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

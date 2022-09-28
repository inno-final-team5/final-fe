import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "pages/Main";
import Signin from "pages/Signin";
import Detail from "pages/Detail";
import KakaoRedirect from "pages/KakaoRedirect";
import SignUp from "pages/SignUp";
import Challenge from "pages/Challenge";
import NotFound from "pages/NotFound";
import MyPage from "pages/Mypage/MyPage";
import SearchList from "pages/SearchList";
import Community from "pages/Community/Community";

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage/*" element={<MyPage />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/community/*" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

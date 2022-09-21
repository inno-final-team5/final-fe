import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "pages/Main";
import SignUp from "pages/SignUp";
import MyPage from "pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "pages/Main";
import SignUp from "pages/SignUp";
import Community from "pages/Community";
import CommunityDetail from "pages/CommunityDetail";
import CommunityEdit from "pages/CommunityEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/detail" element={<CommunityDetail />} />
        <Route path="/community/edit" element={<CommunityEdit />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

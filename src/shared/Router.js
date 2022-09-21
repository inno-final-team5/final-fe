import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "pages/Main";
import SignUp from "pages/SignUp";
import Challenge from "pages/Challenge";
import NotFound from "pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/challenge" element={<Challenge />} />

        <Route path="/*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

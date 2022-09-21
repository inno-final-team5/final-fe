import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "pages/Main";
import Challenge from "pages/Challenge";
import NotFound from "pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/challenge" element={<Challenge />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

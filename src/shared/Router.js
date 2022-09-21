import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "pages/Main";
import Challenge from "pages/Challenge";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

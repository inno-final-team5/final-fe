import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Main from 'pages/Main';
import Signin from 'pages/Signin';
import Detail from 'pages/Detail';
import KakaoRedirect from 'pages/KakaoRedirect';
import SignUp from "pages/SignUp";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/kakaoLogin" element={<KakaoRedirect />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

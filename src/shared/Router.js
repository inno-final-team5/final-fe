import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from 'pages/Main';
import Signin from 'pages/Signin';
import Detail from 'pages/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

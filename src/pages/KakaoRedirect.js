import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLoginDB } from '../redux/modules/userSlice';
import styled, { keyframes } from 'styled-components';
import logo from '../images/Logo.png';

const KakaoRedirect = () => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');

  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    dispatch(kakaoLoginDB(code));
  }, [accessToken]);

  return (
    <>
      <Background>
        <img className="logo" alt="카카오로그인중" src={logo} />
      </Background>
    </>
  );
};

export default KakaoRedirect;
const spin = keyframes`
100% {
      transform: rotate(360deg);
}
`;
const Background = styled.div`
  background-color: #222831;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .logo {
    width: 200px;
    height: 200px;
    animation: ${spin} 3s infinite;
  }
`;

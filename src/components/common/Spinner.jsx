import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../images/Logo.png";

const Spinner = () => {
  return (
    <div>
      <Background>
        <img className="logo" alt="로딩중" src={logo} />
      </Background>
    </div>
  );
};

export default Spinner;

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

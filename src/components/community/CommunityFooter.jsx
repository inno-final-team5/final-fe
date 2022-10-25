import React from "react";
import SearchBox from "./SearchBox";
import CommunityButton from "./CommunityButton";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import tw from "tailwind-styled-components";

const CommunityFooter = () => {
  const navigate = useNavigate();
  const goEdit = () => {
    if (localStorage.getItem("accessToken") != null) {
      navigate("/community/edit");
    } else {
      Swal.fire("로그인이 필요합니다!");
    }
  };
  return (
    <Container>
      <SearchBox />
      <CommunityButton type="button" onClickHandler={goEdit}>
        <MdEdit className="mr-1" />
        쓰기
      </CommunityButton>
    </Container>
  );
};

const Container = tw.div`
flex justify-between flex-row items-center
`;

export default CommunityFooter;

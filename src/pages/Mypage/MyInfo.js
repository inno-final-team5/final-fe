import { nicknameChange } from "apis/userApi";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyInfo = () => {
  const nickname = localStorage.getItem("nickname");
  const navigate = useNavigate();
  const [newNickName, setNewNickName] = useState(nickname);

  const nicknameChangeMutation = useMutation(nicknameChange, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const changeNicknameHandler = () => {
    nicknameChangeMutation.mutate(newNickName);
  };

  const deleteAccount = () => {
    Swal.fire({
      title: "회원 탈퇴",
      text: "정말 탈퇴하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteConfirm();
      }
    });
  };

  const deleteConfirm = () => {
    Swal.fire({
      title: "탈퇴 완료",
      text: "이용해주셔서 감사합니다",
      icon: "success",
      confirmButtonText: "완료",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <div className="bg-mGray w-full h-full min-h-[28rem] rounded-xl items-center flex flex-col gap-12">
      <h2 className="text-mYellow p-4 text-2xl mt-5">닉네임 변경</h2>
      <div className="flex flex-col gap-12">
        <input
          className="bg-transparent p-2 text-mWhite border-mWhite border-b-2 border-solid focus:bg-none   focus:outline-none"
          onChange={(e) => {
            setNewNickName(e.target.value);
          }}
          value={newNickName}
        />

        <button
          className="bg-mBlack text-mYellow px-6 py-2 rounded-xl mx-auto disabled:bg-gray-600"
          onClick={changeNicknameHandler}
          disabled={newNickName === nickname}
        >
          변경
        </button>
      </div>

      {/* <div className="w-full flex justify-center items-center mt-24">
        <button className="bg-mBlack text-mYellow px-6 py-2 rounded-xl">
          회원 탈퇴
        </button>
      </div> */}
    </div>
  );
};

export default MyInfo;

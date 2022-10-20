import { deleteAccount } from "apis/userApi";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { removeItems } from "utils/utils";

const Leave = () => {
  const navigate = useNavigate();

  const deleteAccountMutation = useMutation(deleteAccount, {
    onSuccess: (data) => {
      console.log(data.data);
      deleteConfirm();
    },
  });

  const showDeleteAccountModal = () => {
    Swal.fire({
      title: "회원 탈퇴",
      text: "정말 탈퇴하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAccountMutation.mutate();
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
        removeItems();
        navigate("/");
      }
    });
  };

  return (
    <div className="w-full flex justify-center items-center mt-24">
      <button
        className="bg-mBlack text-mYellow px-6 py-2 rounded-xl"
        onClick={showDeleteAccountModal}
      >
        회원 탈퇴
      </button>
    </div>
  );
};

export default Leave;

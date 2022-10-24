import React, { useState } from "react";
import { useMutation } from "react-query";
import { nicknameChange } from "apis/userApi";
import { useContext } from "react";
import UserContext from "contexts/UserContext";
import { Toast } from "components/common/Toast";
import { checkUserName } from "utils/validation";

const NicknameChange = () => {
  const { nickname, setNickname } = useContext(UserContext);

  const [newNickName, setNewNickName] = useState(nickname);

  const nicknameChangeMutation = useMutation(nicknameChange, {
    onSuccess: (data) => {
      if (data.data.error === "DUPLICATE_MYNICKNAME") {
        return Toast.fire({
          icon: "warning",
          title: "현재 닉네임과 동일합니다.",
        });
      } else if (data.data.error === "DUPLICATE_NICKNAME") {
        return Toast.fire({
          icon: "warning",
          title: "이미 사용중인 닉네임입니다.",
        });
      } else if (data.data.success === true) {
        Toast.fire({ icon: "success", title: "닉네임이 변경되었습니다." });
        setNickname(data.data.data);
        localStorage.setItem("nickname", data.data.data);
      }
    },
  });

  const changeNicknameHandler = () => {
    if (newNickName.length < 1) {
      return Toast.fire({
        icon: "warning",
        title: "닉네임을 입력하세요!",
      });
    } else if (!checkUserName(newNickName)) {
      return Toast.fire({
        icon: "warning",
        title: "닉네임은 영문, 숫자, 한글로 10자 이내로 입력해주세요!",
      });
    } else {
      nicknameChangeMutation.mutate({ nickname: newNickName });
    }
  };

  return (
    <div className="bg-mGray w-full h-full rounded-xl items-center flex flex-col gap-12">
      <h2 className="text-mYellow p-4 text-2xl mt-5">닉네임 변경</h2>
      <div className="flex flex-col gap-12">
        <input
          className="bg-transparent p-2 text-mWhite border-mWhite border-b-2 border-solid focus:bg-none focus:outline-none"
          onChange={(e) => {
            setNewNickName(e.target.value);
          }}
          value={newNickName}
          required
          maxLength={10}
        />

        <button
          className="bg-mBlack text-mYellow px-6 py-2 rounded-xl mx-auto disabled:bg-gray-600"
          onClick={changeNicknameHandler}
          disabled={newNickName === nickname}
        >
          변경
        </button>
      </div>
    </div>
  );
};

export default NicknameChange;

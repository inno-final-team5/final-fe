import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "react-query";
import UserContext from "contexts/UserContext";
import { useContext } from "react";
import { updateMyMainBadge } from "apis/badgeApi";

const ActiveBadge = ({ id, icon, name, description }) => {
  const queryClient = useQueryClient();

  const { setMainBadge } = useContext(UserContext);

  const onClickActiveBadgeHandler = () => {
    Swal.fire({
      html: `
      <div class="flex flex-col gap-2">
        <span class="text-5xl m-2 p-2">${icon}</span>
        <h2 class="text-2xl text-black font-semibold">${name}</h2>
        <p>${description}</p
      </div>
      `,
      showCancelButton: true,
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-yellow-500 focus:outline-none px-4 py-2 text-mGray rounded-md mr-2",
        cancelButton:
          "bg-mGray focus:outline-none px-4 py-2 text-mWhite rounded-md ml-2",
      },
      confirmButtonText: "대표 배지 설정",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        updateMainBadgeMutation.mutate({ badgeId: id + 2 });
      }
    });
  };
  const updateMainBadgeMutation = useMutation(updateMyMainBadge, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("mainBadge");
      setMainBadge(data.data.data.badgeIcon);
      localStorage.setItem("badgeIcon", data.data.data.badgeIcon);
    },
  });
  return (
    <div
      className="w-20 h-20 bg-mWhite rounded-xl py-4 flex justify-center items-center m-2 cursor-pointer"
      onClick={onClickActiveBadgeHandler}>
      <span className="text-4xl font-serif">{icon}</span>
    </div>
  );
};

export default ActiveBadge;

import { deleteMyMainBadge } from "apis/badgeApi";
import UserContext from "contexts/UserContext";
import { useContext } from "react";
import { FaCrown } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import Swal from "sweetalert2";
import DefaultBadge from "./DefaultBadge";
import useMyMainBadge from "./useMyMainBadge";

const MainBadge = () => {
  const queryClient = useQueryClient();
  const { setMainBadge } = useContext(UserContext);

  //배지 초기화
  const { isLoading, isError, error, data: mainBadge } = useMyMainBadge();

  const resetBadge = () => {
    Swal.fire({
      title: "대표 배지 삭제",
      text: "대표 배지를 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMainBadgeMutation.mutate();
      }
    });
  };

  const deleteMainBadgeMutation = useMutation(deleteMyMainBadge, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("mainBadge");
      setMainBadge("👤");
      localStorage.setItem("badgeIcon", "👤");
    },
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content =
      mainBadge.data === "badgeId : 0" ? (
        <DefaultBadge />
      ) : (
        <span className="text-5xl" onClick={resetBadge}>
          {mainBadge.data.badgeIcon}
        </span>
      );
  }
  return (
    <div className="flex justify-center items-center border-gray-800 border p-2 rounded-lg flex-col">
      <div className="relative w-24 h-24 bg-mWhite rounded-xl py-4 flex justify-center items-center mt-4 hover:cursor-pointer">
        <div className=" absolute text-mYellow text-4xl -top-4 -left-4 -rotate-45">
          <FaCrown />
        </div>
        {content}
      </div>
    </div>
  );
};

export default MainBadge;

import { updateMyMainBadge } from "apis/badgeApi";
import UserContext from "contexts/UserContext";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import Swal from "sweetalert2";
import ActiveBadge from "./ActiveBadge";
import InActiveBadge from "./InActiveBadge";

const BadgeItem = ({
  id,
  icon,
  name,
  currentCount,
  maxCount,
  description,
  isActive,
}) => {
  const queryClient = useQueryClient();

  const { setMainBadge } = useContext(UserContext);
  let tempCurrentCount = 1;
  let tempMaxCount = 5;
  const rate = Math.floor((tempCurrentCount / tempMaxCount) * 100) + "%";

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
      confirmButtonText: "대표 배지 설정",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        updateMainBadgeMutation.mutate({ badgeId: id });
      }
    });
  };

  const onClickInActiveBadgeHandler = () => {
    Swal.fire({
      html: `
      <div class="flex flex-col gap-2">
        <span class="text-5xl m-2 p-2">${icon}</span>
        <h2 class="text-2xl text-black font-semibold">${name}</h2>
        <p>${description}</p
        <p>현재 ${rate} 달성 하셨습니다.</p>
      </div>
      `,
      confirmButtonText: "확인",
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
    <div>
      {isActive === true ? (
        <ActiveBadge
          icon={icon}
          onClickActiveBadgeHandler={onClickActiveBadgeHandler}
        />
      ) : (
        <InActiveBadge
          icon={icon}
          onClickInActiveBadgeHandler={onClickInActiveBadgeHandler}
        />
      )}
    </div>
  );
};

export default BadgeItem;

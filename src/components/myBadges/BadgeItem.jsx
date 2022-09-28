import Swal from "sweetalert2";

const BadgeItem = ({
  id,
  icon,
  name,
  description,
  percent,
  isActive,
  updateMainBadgeMutation,
}) => {
  const onClickBadgeHandler = () => {
    console.log("setMainBadge");
    showModal();
  };

  const showModal = () => {
    Swal.fire({
      title: name,
      text: description,
      imageUrl: icon,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "badgeIcon",
      showCancelButton: true,
      confirmButtonText: "대표 배지 설정",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        setMainBadge(id);
      }
    });
  };

  const setMainBadge = (id) => {
    updateMainBadgeMutation.mutate(id);
  };

  return (
    <div onClick={onClickBadgeHandler}>
      {isActive === true ? (
        <div className="w-20 h-20 bg-mWhite rounded-xl py-4 flex justify-center items-center m-2">
          <img className=" w-16 h-16 m-4" alt="active" src={icon} />
        </div>
      ) : (
        <div className="w-20 h-20 bg-mGray border-solid border-mWhite border rounded-xl py-4 flex justify-center items-center m-2">
          <img className=" w-16 h-16 grayscale " alt="inActive" src={icon} />
        </div>
      )}
    </div>
  );
};

export default BadgeItem;

import { useDispatch } from "react-redux";
import { __deleteFavorites } from "redux/modules/myFavorite";
import { FaStar } from "react-icons/fa";

const FavoriteCard = ({ imageUrl, title, id }) => {
  const dispatch = useDispatch();

  const deletePoster = (e) => {
    // 즐겨찾기 삭제
    e.preventDefault();
    console.log("포스터 삭제");

    dispatch(__deleteFavorites(id));
  };

  return (
    <div className="m-4 border-none rounded-lg border-mYellow h-96 p-4 bg-mWhite shadow-lg">
      <img
        src={imageUrl}
        alt="포스터"
        className="rounded  justify-center flex"
      />
      <div className="flex  text-xl items-center mt-2 px-4">
        <FaStar className="text-mBlack  " />
        <span className=" text-mBlack ml-2">{title}</span>
        <button
          onClick={(e) => {
            deletePoster(e);
          }}
        ></button>
      </div>
    </div>
  );
};

export default FavoriteCard;

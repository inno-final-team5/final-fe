import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyFavoriteCard = ({
  imageUrl,
  id,
  title,
  movieId,
  deleteFavoriteMutation,
}) => {
  const navigate = useNavigate();

  /** 즐겨찾기 삭제 함수 */
  const deleteMovie = (id) => {
    deleteFavoriteMutation.mutate(id);
  };

  const goDetail = () => {
    navigate(`/${movieId}/${title}${imageUrl.split(".")[0]}`);
  };
  return (
    <div className="w-48 h-72 bg-transparent group perspective m-6 p-2">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
        <div className="absolute backface-hidden border-2 w-full h-full ">
          <img
            src={`https://image.tmdb.org/t/p/w342${imageUrl}`}
            alt="포스터"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-mBlack overflow-hidden rounded-lg">
          <div className="text-center flex flex-col items-center justify-center h-full text-mCream px-2 pb-24">
            <h1 className="text-xl font-semibold text-mYellow">{title}</h1>

            <button
              className="bg-mCream px-4 text-sm py-2 font-semibold text-mBlack rounded-full absolute -bottom-20  group-hover:bottom-20 scale-0 group-hover:scale-100"
              onClick={goDetail}
            >
              자세히보기
            </button>
            <button
              className="bg-mBlack px-2 py-2 font-semibold text-white rounded-full absolute -bottom-20 group-hover:bottom-6 scale-0 group-hover:scale-125 hover:text-mYellow"
              onClick={() => {
                deleteMovie(id);
              }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavoriteCard;

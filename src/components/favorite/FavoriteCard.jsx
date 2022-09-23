import { FaStar } from "react-icons/fa";

const FavoriteCard = ({ imageUrl, title, id, deleteFavoriteMutation }) => {
  const deleteMovie = (id) => {
    deleteFavoriteMutation.mutate({ id: id });
  };

  return (
    <div className="m-4 border-none rounded-lg border-mYellow h-96 p-4 bg-mWhite shadow-lg">
      <img
        src={imageUrl}
        alt="포스터"
        className="rounded  justify-center flex"
      />
      <div className="flex  text-xl items-center mt-2 ">
        <button
          onClick={() => {
            deleteMovie(id);
          }}
        >
          <FaStar className="text-mYellow" />
        </button>

        <span className=" text-mBlack ml-2 text-md w-full">{title}</span>
      </div>
    </div>
  );
};

export default FavoriteCard;

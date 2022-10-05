import FavoriteCard from "components/favorite/FavoriteCard";
import { deleteFavorite, getFavorites } from "apis/favoriteApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Spinner from "components/common/Spinner";
import Empty from "components/common/Empty";

const MyFavorites = () => {
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    error,
    data: favorites,
  } = useQuery("favorites", getFavorites);

  const deleteFavoriteMutation = useMutation(deleteFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries("favorites");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  let content;

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (favorites.data.length > 0) {
    content = favorites.data.map((movie) => {
      return (
        <FavoriteCard
          key={movie.movieId}
          id={movie.id}
          movieId={movie.movieId}
          title={movie.title}
          imageUrl={movie.posterPath}
          deleteFavoriteMutation={deleteFavoriteMutation}
        />
      );
    });
  } else {
    return (
      <Empty title="즐겨찾기한 영화가 없어요" detail="영화를 추가해주세요~" />
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 bg-mGray p-4 justify-items-center my-9 rounded-lg">
      {content}
    </div>
  );
};

export default MyFavorites;

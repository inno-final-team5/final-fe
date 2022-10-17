import FavoriteCard from "components/favorite/FavoriteCard";
import { getMyLikes, deleteMyLike } from "apis/favoriteApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import tw from "tailwind-styled-components";
import Spinner from "components/common/Spinner";
import Empty from "components/common/Empty";

const MyFavorites = () => {
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    error,
    data: favorites,
  } = useQuery("favorites", getMyLikes);

  const deleteFavoriteMutation = useMutation(deleteMyLike, {
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

  return <FavoriteCardsContainer>{content}</FavoriteCardsContainer>;
};

const FavoriteCardsContainer = tw.div`
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 bg-mGray p-4 justify-items-center rounded-lg
`;

export default MyFavorites;

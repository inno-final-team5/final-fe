import Spinner from "components/common/Spinner";
import MyFavoriteCard from "./MyFavoriteCard";
import tw from "tailwind-styled-components";
import Empty from "components/common/Empty";
import { getMyLikes, deleteMyLike } from "apis/favoriteApi";
import { useMutation, useQueryClient, useQuery } from "react-query";

const MyFavoriteSection = () => {
  const { data: favorites, isLoading } = useQuery("favorites", getMyLikes, {
    keepPreviousData: true,
  });

  const queryClient = useQueryClient();

  const deleteFavoriteMutation = useMutation(deleteMyLike, {
    onSuccess: () => {
      queryClient.invalidateQueries("favorites");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return (
    <>
      {isLoading || !favorites ? (
        <Spinner />
      ) : favorites.data.length < 1 ? (
        <Empty title="즐겨찾기한 영화가 없어요" detail="영화를 추가해주세요~" />
      ) : (
        <FavoriteCardsContainer>
          {favorites.data.map((movie) => (
            <MyFavoriteCard
              key={movie.movieId}
              id={movie.id}
              movieId={movie.movieId}
              title={movie.title}
              imageUrl={movie.posterPath}
              deleteFavoriteMutation={deleteFavoriteMutation}
            />
          ))}
        </FavoriteCardsContainer>
      )}
    </>
  );
};

const FavoriteCardsContainer = tw.div`
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-mGray p-4 justify-items-center rounded-lg h-full
`;
export default MyFavoriteSection;

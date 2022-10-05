import FavoriteCard from "components/favorite/FavoriteCard";
import { deleteFavorite, getFavorites } from "apis/favoriteApi";
import { useMutation, useQuery, useQueryClient } from "react-query";

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
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
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
  }

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-4 bg-mGray p-4 rounded-sm">
        {content}
      </div>
    </section>
  );
};

export default MyFavorites;

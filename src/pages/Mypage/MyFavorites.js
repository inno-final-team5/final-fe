import FavoriteCard from "components/favorite/FavoriteCard";
import { deleteFavorite, getFavorites } from "api/favoriteApi";
import { useMutation, useQuery, useQueryClient } from "react-query";

const MyFavorites = () => {
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    error,
    data: favorites,
  } = useQuery("favorites", getFavorites, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });

  const deleteFavoriteMutation = useMutation(deleteFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries("favorites");
    },
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = favorites.map((movie) => {
      return (
        <FavoriteCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          imageUrl={movie.imageUrl}
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

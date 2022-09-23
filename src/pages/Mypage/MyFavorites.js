import FavoriteCard from "components/favorite/FavoriteCard";
import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getFavorites } from "redux/modules/myFavorite";

const MyFavorites = () => {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.favoriteSlice);

  useEffect(() => {
    dispatch(__getFavorites());
  }, [dispatch]);

  return (
    <Fragment>
      <section>
        <div className="grid h-screen grid-cols-4">
          {favorites.map((movie) => {
            return (
              <FavoriteCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.imageUrl}
              />
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default MyFavorites;

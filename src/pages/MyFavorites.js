import FavoriteCard from "components/myFavorite/FavoriteCard";
import React, { Fragment } from "react";

const MyFavorites = () => {
  return (
    <Fragment>
      <section>
        <div className="flex justify-center items-center text-4xl h-screen">
          <FavoriteCard
            imageUrl="http://joyposter.cafe24.com//NEW-posters/F600X848Poster/FMX-448.jpg"
            title="test"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default MyFavorites;

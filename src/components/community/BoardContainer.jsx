import CommunityAll from "pages/communityPages/CommunityAll";
import CommunityCinemas from "pages/communityPages/CommunityCinemas";
import CommunityDetail from "pages/communityPages/CommunityDetail";
import CommunityEdit from "pages/communityPages/CommunityEdit";
import CommunityMovies from "pages/communityPages/CommunityMovies";
import CommunitySearchResult from "pages/communityPages/CommunitySearchResult";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

const BoardContainer = () => {
  return (
    <Fragment>
      <section>
        <Routes>
          <Route path="all" element={<CommunityAll />} />
          <Route path="movies" element={<CommunityMovies />} />
          <Route path="cinemas" element={<CommunityCinemas />} />
          <Route path="/:id" element={<CommunityDetail />} />
          <Route path="edit" element={<CommunityEdit />} />
          <Route path=":type/:keyword" element={<CommunitySearchResult />} />
        </Routes>
      </section>
    </Fragment>
  );
};

export default BoardContainer;

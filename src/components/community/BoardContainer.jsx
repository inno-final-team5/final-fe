import CommunityAll from "pages/community/CommunityAll";
import CommunityCinemas from "pages/community/CommunityCinemas";
import CommunityDetail from "pages/community/CommunityDetail";
import CommunityEdit from "pages/community/CommunityEdit";
import CommunityMovies from "pages/community/CommunityMovies";
import CommunitySearchResult from "pages/community/CommunitySearchResult";
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

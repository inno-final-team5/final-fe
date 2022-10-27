import CommunityAll from "pages/Community/CommunityAll";
import CommunityCinemas from "pages/Community/CommunityCinemas";
import CommunityDetail from "pages/Community/CommunityDetail";
import CommunityEdit from "pages/Community/CommunityEdit";
import CommunityMovies from "pages/Community/CommunityMovies";
import CommunitySearchResult from "pages/Community/CommunitySearchResult";
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

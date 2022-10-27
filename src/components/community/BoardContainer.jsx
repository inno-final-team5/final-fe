import CommunityAll from "pages/communitiyPages/CommunityAll";
import CommunityCinemas from "pages/communitiyPages/CommunityCinemas";
import CommunityDetail from "pages/communitiyPages/CommunityDetail";
import CommunityEdit from "pages/communitiyPages/CommunityEdit";
import CommunityMovies from "pages/communitiyPages/CommunityMovies";
import CommunitySearchResult from "pages/communitiyPages/CommunitySearchResult";
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

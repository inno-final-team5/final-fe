import Layout from "components/common/Layout";
import SearchBar from "../components/search/SearchBar";
import DetailTags from "../components/search/DetailTags";
import GenreResult from "../components/search/GenreResult";

const GenreList = () => {
  return (
    <Layout>
      <SearchBar />
      <DetailTags />
      <GenreResult />
    </Layout>
  );
};

export default GenreList;

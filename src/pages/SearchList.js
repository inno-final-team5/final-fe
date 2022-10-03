import Layout from "components/common/Layout";
import SearchBar from "../components/search/SearchBar";
import DetailTags from "../components/search/DetailTags";
import SearchResult from "../components/search/SearchResult";

const SearchList = () => {
  return (
    <Layout>
      <SearchBar />
      <DetailTags />
      <SearchResult />
    </Layout>
  );
};

export default SearchList;

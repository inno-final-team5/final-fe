import Layout from "components/common/Layout";
import SearchBar from "../components/search/SearchBar";
import DetailTags from "../components/search/DetailTags";
import SearchList from "../components/search/SearchList";

const Signin = () => {
  return (
    <Layout>
      <SearchBar />
      <DetailTags />
      <SearchList />
    </Layout>
  );
};

export default Signin;

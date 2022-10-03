import Layout from "components/common/Layout";
import MovieSum from "components/detail/MovieSum";
import OnelineForm from "components/detail/OnelineForm";
import OnelineList from "components/detail/OnelineList";

const Detail = () => {
  return (
    <Layout>
      <MovieSum />
      <OnelineForm />
      {/* <OnelineList /> */}
    </Layout>
  );
};

export default Detail;

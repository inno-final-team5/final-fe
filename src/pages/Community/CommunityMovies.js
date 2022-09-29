import ReviewList from "components/community/ReviewList";
import WriteBox from "components/community/WriteBox";
import { getMoviePosts } from "apis/postApi";

const CommunityMovies = () => {
  return (
    <>
      <div className=" bg-mGray p-4 rounded-sm ">
        <WriteBox />
        <ReviewList queryFn={getMoviePosts} />
      </div>
    </>
  );
};
export default CommunityMovies;

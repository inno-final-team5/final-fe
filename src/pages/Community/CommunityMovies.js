import ReviewList from "components/community/ReviewList";
import { getMoviePosts } from "apis/postApi";

const CommunityMovies = () => {
  return (
    <>
      <div className=" bg-mGray p-4 rounded-sm ">
        <ReviewList queryFn={getMoviePosts} />
      </div>
    </>
  );
};
export default CommunityMovies;

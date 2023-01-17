import { getMoviePosts } from "apis/postApi";
import ReviewList from "components/community/ReviewList";
import CommunityContainer from "components/community/CommunityContainer";

const CommunityMovies = () => {
  return (
    <CommunityContainer>
      <ReviewList queryFn={getMoviePosts} />
    </CommunityContainer>
  );
};
export default CommunityMovies;

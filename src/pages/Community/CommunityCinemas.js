import { getCinemaPosts } from "apis/postApi";
import ReviewList from "components/community/ReviewList";
import CommunityContainer from "components/community/CommunityContainer";

const CommunityCinemas = () => {
  return (
    <CommunityContainer>
      <ReviewList queryFn={getCinemaPosts} />
    </CommunityContainer>
  );
};
export default CommunityCinemas;

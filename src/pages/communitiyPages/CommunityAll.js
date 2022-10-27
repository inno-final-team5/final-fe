import { getAllPosts } from "apis/postApi";
import CommunityContainer from "components/community/CommunityContainer";
import ReviewList from "components/community/ReviewList";

const CommunityAll = () => {
  return (
    <CommunityContainer>
      <ReviewList queryFn={getAllPosts} />
    </CommunityContainer>
  );
};
export default CommunityAll;

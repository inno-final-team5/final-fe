import { getAllPosts } from "apis/postApi";
import ReviewList from "components/community/ReviewList";

const CommunityAll = () => {
  return (
    <>
      <div className=" bg-mGray p-4 rounded-xl ">
        <ReviewList queryFn={getAllPosts} />
      </div>
    </>
  );
};
export default CommunityAll;

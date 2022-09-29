import WriteBox from "components/community/WriteBox";

import { getAllPosts } from "apis/postApi";
import ReviewList from "components/community/ReviewList";

const CommunityAll = () => {
  return (
    <>
      <div className=" bg-mGray p-4 rounded-sm ">
        <WriteBox />
        <ReviewList queryFn={getAllPosts} />
      </div>
    </>
  );
};
export default CommunityAll;

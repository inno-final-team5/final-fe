import ReviewList from "components/community/ReviewList";
import { getCinemaPosts } from "apis/postApi";

const CommunityCinemas = () => {
  return (
    <>
      <div className=" bg-mGray p-4 rounded-sm ">
        <ReviewList queryFn={getCinemaPosts} />
      </div>
    </>
  );
};
export default CommunityCinemas;

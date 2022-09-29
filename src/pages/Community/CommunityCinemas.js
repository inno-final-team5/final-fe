import ReviewList from "components/community/ReviewList";
import WriteBox from "components/community/WriteBox";
import { getCinemaPosts } from "apis/postApi";

const CommunityCinemas = () => {
  return (
    <>
      <div className=" bg-mGray p-4 rounded-sm ">
        <WriteBox />
        <ReviewList queryFn={getCinemaPosts} />
      </div>
    </>
  );
};
export default CommunityCinemas;

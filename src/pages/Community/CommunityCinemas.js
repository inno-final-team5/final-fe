import ReviewList from "components/community/ReviewList";
import WriteBox from "components/community/WriteBox";

const CommunityCinemas = () => {
  return (
    <>
      <div className=" bg-mGray p-4 rounded-sm ">
        <ReviewList category="영화관" />
        <WriteBox />
      </div>
    </>
  );
};
export default CommunityCinemas;

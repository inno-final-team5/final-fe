import ReviewList from "components/community/ReviewList";
import WriteBox from "components/community/WriteBox";

const CommunityMovies = () => {
  return (
    <>
      <div className=" bg-mGray p-4 rounded-sm ">
        <ReviewList category="영화" />
        <WriteBox />
      </div>
    </>
  );
};
export default CommunityMovies;

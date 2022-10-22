import { useState } from "react";
import { useQuery } from "react-query";

import ReviewItem from "./ReviewItem";

import Spinner from "components/common/Spinner";
import Pagination from "components/common/pagination/Pagination";
import CommunityButton from "./CommunityButton";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SearchBox from "./SearchBox";

const ReviewList = ({ queryFn }) => {
  const navigate = useNavigate();

  const postsPerPage = 10;
  const [page, setPage] = useState(1);

  const { isLoading, isError, error, data: posts } = useQuery("posts", queryFn);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const indexOfLast = page * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.data.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const content = currentPosts(posts).map((post) => (
    <ReviewItem key={post.postId} post={post} />
  ));

  const totalPages = Math.ceil(posts.data.length / postsPerPage);

  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);

  const goEdit = () => {
    if (localStorage.getItem("accessToken") != null) {
      navigate("/community/edit");
    } else {
      Swal.fire("로그인이 필요합니다!");
    }
  };

  return (
    <div className="m-4 mt-6">
      {content}

      <div className="flex justify-between items-center">
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          pagesArray={pagesArray}
        />

        <SearchBox />
        <CommunityButton type="button" onClickHandler={goEdit}>
          <MdEdit className="mr-1" />
          쓰기
        </CommunityButton>
      </div>
    </div>
  );
};
export default ReviewList;

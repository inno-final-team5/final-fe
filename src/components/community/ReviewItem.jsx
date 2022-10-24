import { Link } from "react-router-dom";
import BadgeEmoji from "components/common/BadgeEmoji";
import { IoIosChatbubbles } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";

const ReviewItem = ({ post }) => {
  return (
    <Link
      to={`/community/${post.postId}`}
      className="hover:text-mBlack hover:font-bold"
    >
      <div
        key={post.postId}
        className="flex bg-mBlack gap-4 md:gap-0 px-2 my-3 md:my-0 py-3 rounded-md justify-between text-mGray items-center flex-col md:flex-row border-b-mGray border-solid border-b-2 text-sm"
      >
        <div className="flex justify-start items-center w-full md:basis-1/12 px-1">
          <p className="w-16 text-mWhite rounded-lg p-2 text-center bg-mGray md:bg-mGray">
            {post.postCategory}
          </p>
        </div>

        <div className="flex justify-start w-full text-mWhite md:basis-3/12 px-1">
          <BadgeEmoji badgeId={post.badgeId} />
          {post.nickname}
        </div>
        <div className="w-full flex text-mWhite items-center md:basis-6/12 px-1">
          <p className="text-left text-md">{post.postTitle}</p>
          <span className="pl-2 flex gap-1 text-sm text-mYellow flex-row">
            {post.commentNum ? (
              <>
                <IoIosChatbubbles />
                {post.commentNum}
              </>
            ) : (
              <></>
            )}
          </span>
          <span className="pl-2 flex gap-1 text-sm text-mYellow flex-row">
            {post.likeNum ? (
              <>
                <FaThumbsUp />
                {post.likeNum}
              </>
            ) : (
              <></>
            )}
          </span>
        </div>

        <div className="justify-end w-full flex md:basis-2/12 px-1">
          <p className="text-mWhite text-end">
            {new Date(post.createdAt).toLocaleDateString("ko-KR")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ReviewItem;

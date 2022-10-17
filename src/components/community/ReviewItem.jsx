import { Link } from "react-router-dom";
import BadgeEmoji from "components/common/BadgeEmoji";

const ReviewItem = ({ post }) => {
  return (
    <Link
      to={`/community/detail/${post.postId}`}
      className="hover:text-mBlack hover:font-bold"
    >
      <div
        key={post.postId}
        className="flex bg-mWhite md:bg-mBlack gap-4 md:gap-0 px-2 my-3 md:my-0 py-3 rounded-md justify-between text-mGray items-center flex-col md:flex-row border-b-mGray border-solid border-b-2 text-sm"
      >
        <div className="flex justify-start items-center w-full md:basis-1/12">
          <p className="w-16 text-mWhite rounded-lg p-2 text-center bg-mGray md:bg-mGray">
            {post.postCategory}
          </p>
        </div>

        <div className="flex justify-start w-full text-mBlack md:text-mWhite md:basis-3/12">
          <BadgeEmoji badgeId={post.badgeId} />
          {post.nickname}
        </div>
        <div className="w-full flex text-mBlack md:text-mWhite items-center md:basis-6/12">
          <p className="text-left">{post.postTitle}</p>
        </div>

        <div className="justify-end w-full flex md:basis-2/12">
          <p className="text-mBlack md:text-mWhite text-end">
            {new Date(post.createdAt).toLocaleDateString("ko-KR")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ReviewItem;

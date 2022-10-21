import tw from "tailwind-styled-components";
import { BsArrowReturnRight } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";

const Comment = () => {
  return (
    <>
      <CommentContainer>
        <div className="flex-auto">
          <NicknameContainer>
            <p className="mr-2">🔥</p>
            <p className="mr-2">익명의너구리</p>
            <p>2022/10/20</p>
          </NicknameContainer>
        </div>
        <CommentContextContainer>
          <p>댓글</p>
        </CommentContextContainer>
        <div className="flex justify-end">
          <button>
            <BsArrowReturnRight className="mr-1" />
          </button>
        </div>
      </CommentContainer>

      <CommentContainer>
        <div className="flex-auto">
          <NicknameContainer>
            <p className="mr-2">🔥</p>
            <p className="mr-2">익명의너구리</p>
            <p>2022/10/20</p>
          </NicknameContainer>
        </div>
        <CommentContextContainer>
          <p>내가 쓴 댓글</p>
        </CommentContextContainer>
        <div className="flex justify-end">
          <button>
            <FaEdit className="mr-1" />
          </button>
          <button>
            <FaTrash className="mr-1" />
          </button>
        </div>
      </CommentContainer>
    </>
  );
};

const CommentContainer = tw.div`
w-full h-full bg-mWhite rounded-xl p-4
`;

const NicknameContainer = tw.div`
flex text-s text-mBlack w-fit h-full mb-2
`;

const CommentContextContainer = tw.div`
w-full h-full bg-mWhite rounded-xl p-2
`;

export default Comment;

import tw from "tailwind-styled-components";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = () => {
  const accessToken = localStorage.getItem("accessToken");
  return (
    <>
      {accessToken !== null ? (
        <CommentFormContainer>
          <CommentFormContentsContainer>
            <CommentForm />
          </CommentFormContentsContainer>
        </CommentFormContainer>
      ) : (
        <></>
      )}

      <CommentsContainer>
        <CommentsContentsContainer>
          <Comment />
        </CommentsContentsContainer>
      </CommentsContainer>
    </>
  );
};

const CommentsContainer = tw.div`
bg-mGray p-4 text-mBlack rounded-lg mt-3
`;

const CommentsContentsContainer = tw.div`
px-4 py-2 flex gap-4 flex-col h-full 
`;

const CommentFormContainer = tw.div`
bg-mGray p-2 text-mBlack rounded-lg mt-3
`;

const CommentFormContentsContainer = tw.div`
px-4 py-1 flex gap-4 flex-col h-full 
`;

export default Comments;

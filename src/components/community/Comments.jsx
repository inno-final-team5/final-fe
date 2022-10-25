import tw from "tailwind-styled-components";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ commentData }) => {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className="bg-mGray rounded-lg">
      {commentData.length === 0 ? (
        <></>
      ) : (
        <CommentsContainer>
          <CommentsContentsContainer>
            {commentData.map((commentData) => (
              <Comment key={commentData.id} commentData={commentData} />
            ))}
          </CommentsContentsContainer>
        </CommentsContainer>
      )}

      {accessToken === null ? (
        <></>
      ) : (
        <>
          <CommentFormContainer>
            <CommentFormContentsContainer>
              <CommentForm />
            </CommentFormContentsContainer>
          </CommentFormContainer>
        </>
      )}
    </div>
  );
};

const CommentsContainer = tw.div`
bg-mGray p-4 text-mBlack rounded-lg mt-4
`;

const CommentsContentsContainer = tw.div`
px-4 py-2 flex gap-4 flex-col h-full 
`;

const CommentFormContainer = tw.div`
bg-mGray p-4 text-mBlack rounded-lg
`;

const CommentFormContentsContainer = tw.div`
px-4 py-1 flex gap-4 flex-col h-full 
`;

export default Comments;

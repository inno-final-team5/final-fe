import tw from "tailwind-styled-components";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { Toast } from "components/common/Toast";
import { addComment } from "apis/postApi";
import CommunityButton from "components/community/CommunityButton";

const CommentForm = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const nickname = localStorage.getItem("nickname");
  const badge = localStorage.getItem("badgeIcon");

  const [comment, setComment] = useState("");

  const addCommentMutation = useMutation(addComment, {
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("post");
      Toast.fire({ icon: "success", title: "등록되었습니다." });
    },
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    addCommentMutation.mutate({
      postId: id,
      commentContent: comment,
    });

    setComment("");
  };

  return (
    <>
      <form>
        <NicknameContainer>
          <p className="mr-2">{badge}</p>
          <p>{nickname}</p>
        </NicknameContainer>
        <div>
          <textarea
            id="comment"
            rows="3"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            className=" p-2 mt-2 w-full text-sm text-mBlack bg-mWhite rounded-lg focus:outline-none"
            placeholder="댓글을 남겨주세요"
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <CommunityButton type="button" onClickHandler={onSubmitHandler}>
            <AiOutlineCheck className="mr-1" />
            등록
          </CommunityButton>
        </div>
      </form>
    </>
  );
};

const NicknameContainer = tw.div`
flex text-m text-mYellow bg-mGray w-fit h-full p-2 rounded-xl
`;

export default CommentForm;

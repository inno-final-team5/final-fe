import tw from "tailwind-styled-components";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { Toast } from "components/common/Toast";
import { addSubComment } from "apis/postApi";
import CommunityButton from "components/community/CommunityButton";

const SubcommentForm = ({ commentData }) => {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const nickname = localStorage.getItem("nickname");
  const badge = localStorage.getItem("badgeIcon");

  const [subComment, setSubComment] = useState("");

  const addSubCommentMutation = useMutation(addSubComment, {
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      console.log("성공");
      queryClient.invalidateQueries("post");
      Toast.fire({ icon: "success", title: "등록되었습니다." });
    },
  });

  console.log(commentData);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    addSubCommentMutation.mutate({
      commentId: commentData.commentId,
      postId: id,
      subCommentContent: subComment,
    });

    setSubComment("");
  };

  return (
    <>
      <form className="ml-10">
        <NicknameContainer>
          <p className="mr-2">{badge}</p>
          <p>{nickname}</p>
        </NicknameContainer>
        <div>
          <textarea
            id="subComment"
            rows="3"
            value={subComment}
            onChange={(e) => {
              setSubComment(e.target.value);
            }}
            className=" p-2 mt-2 w-full text-sm text-mBlack bg-mWhite rounded-lg focus:outline-none resize-none"
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

export default SubcommentForm;

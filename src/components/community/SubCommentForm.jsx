import tw from "tailwind-styled-components";
import { useState, useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { Toast } from "components/common/Toast";
import { addSubComment } from "apis/postApi";
import CommunityButton from "components/community/CommunityButton";
import UserContext from "contexts/UserContext";
const SubCommentForm = ({ commentData }) => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { nickname, mainBadge } = useContext(UserContext);
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (subComment.length < 1) {
      return Toast.fire({ icon: "error", title: "내용이 없습니다." });
    }

    addSubCommentMutation.mutate({
      commentId: commentData.commentId,
      postId: id,
      subCommentContent: subComment,
    });

    setSubComment("");
  };

  return (
    <form className="mr-10 bg-gray-400 rounded-lg p-2">
      <NicknameContainer>
        <span className="font-serif">{mainBadge}</span>
        <span>{nickname}</span>
      </NicknameContainer>
      <div>
        <textarea
          id="subComment"
          rows="3"
          value={subComment}
          onChange={(e) => {
            setSubComment(e.target.value);
          }}
          className=" p-4 mt-2 w-full text-sm text-mBlack bg-mWhite rounded-lg focus:outline-none"
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
  );
};

const NicknameContainer = tw.div`
flex text-m text-mYellow w-fit h-full p-2 rounded-xl items-center
`;

export default SubCommentForm;

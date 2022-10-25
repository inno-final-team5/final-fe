import tw from "tailwind-styled-components";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { Toast } from "components/common/Toast";
import { addComment, getPostDetail } from "apis/postApi";
import CommunityButton from "components/community/CommunityButton";
import {
  sendNoticeData,
  stompConnect,
  stompDisConnect,
} from "../common/notification/NoticeSoket";
import { useQuery } from "react-query";

const CommentForm = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const nickname = localStorage.getItem("nickname");
  const badge = localStorage.getItem("badgeIcon");

  const [comment, setComment] = useState("");

  const { data: post } = useQuery(["post", id], () => getPostDetail(id));

  const noticeData = {
    sender: nickname,
    receiver: post.data.nickname,
    post: post.data,
    type: "postComment",
  };

  useEffect(() => {
    stompConnect(post.data.nickname);

    return () => {
      stompDisConnect();
    };
  }, []);

  const addCommentMutation = useMutation(addComment, {
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
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

    sendNoticeData(noticeData);
    setComment("");
  };

  return (
    <form>
      <div className="bg-mWhite p-2 rounded-lg">
        <NicknameContainer>
          <p className="mr-2">{badge}</p>
          <p>{nickname}</p>
        </NicknameContainer>
        <div className="border-solid border-t-2">
          <textarea
            id="comment"
            rows="3"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            className=" p-2 mt-2 w-full text-sm text-mBlack bg-mWhite rounded-lg focus:outline-none resize-none"
            placeholder="댓글을 남겨주세요"
            required
          ></textarea>
        </div>
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
flex text-m text-mBlack  w-fit h-full p-2 rounded-xl 
`;

export default CommentForm;

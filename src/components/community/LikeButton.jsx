import React, { useEffect } from "react";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getLike,
  addLike,
  deleteLike,
  getPostDetail,
} from "../../apis/postApi";
import {
  sendNoticeData,
  stompConnect,
  stompDisConnect,
} from "../common/notification/NoticeSoket";

const LikeButton = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: post } = useQuery(["post", id], () => getPostDetail(id));

  const noticeData = {
    sender: localStorage.getItem("nickname"),
    receiver: post.data.nickname,
    post: post.data,
    type: "postLike",
  };

  useEffect(() => {
    stompConnect(post.data.nickname);

    return () => {
      stompDisConnect();
    };
  }, []);

  const {
    data: myLike,
    isLoading,
    isError,
  } = useQuery(["myLike", id], () => getLike(id));

  const addLikeMutation = useMutation(addLike, {
    onSuccess: () => {
      queryClient.invalidateQueries("myLike");
      queryClient.invalidateQueries("post");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const deleteLikeMutation = useMutation(deleteLike, {
    onSuccess: () => {
      queryClient.invalidateQueries("myLike");
      queryClient.invalidateQueries("post");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onDeleteHandler = () => {
    deleteLikeMutation.mutate({ id });
  };

  const checkLogin = () => {
    if (localStorage.getItem("accessToken") === null) {
      Swal.fire("로그인이 필요합니다!");
    } else {
      addLikeMutation.mutate({ id });
      sendNoticeData(noticeData);
    }
  };

  if (isLoading) {
    return console.log("loading");
  }

  if (isError) {
    return console.log("error");
  }

  let likes = myLike.data.data;

  return (
    <>
      {likes === "true" ? (
        <button onClick={onDeleteHandler}>
          <FaThumbsUp className="text-mYellow hover:text-mCream" />
        </button>
      ) : (
        <button
          onClick={() => {
            checkLogin();
          }}
        >
          <FaRegThumbsUp className="text-mYellow hover:text-mCream" />
        </button>
      )}
    </>
  );
};

export default LikeButton;

import React from "react";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getLike, addLike, deleteLike } from "../../apis/postApi";

const LikeButton = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

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

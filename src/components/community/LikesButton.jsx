import React from "react";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { api } from "apis";

const LikesButton = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const getReviewLike = async (id) => {
    return await api.get(`/auth/post/like/${id}`, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        "refresh-token": localStorage.getItem("refreshToken"),
      },
    });
  };
  const {
    data: myLike,
    isLoading,
    isError,
  } = useQuery(["myLike", id], () => getReviewLike(id));

  const addReviewLike = async (data) => {
    return await api.post(`/auth/post/like/${id}`, data, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        "refresh-token": localStorage.getItem("refreshToken"),
      },
    });
  };
  const addLikeMutation = useMutation(addReviewLike, {
    onSuccess: () => {
      queryClient.invalidateQueries("myLike");
      queryClient.invalidateQueries("post");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const deleteReviewLike = async ({ id }) => {
    return await api.delete(`/auth/post/like/${id}`, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
        "refresh-token": localStorage.getItem("refreshToken"),
      },
    });
  };
  const deleteLikeMutation = useMutation(deleteReviewLike, {
    onSuccess: (data) => {
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
  console.log(likes);

  return (
    <>
      {likes == "true" ? (
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

export default LikesButton;

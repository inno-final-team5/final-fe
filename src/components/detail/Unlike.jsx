import React, { useState } from "react";
import { ImHeart } from "react-icons/im";
import { api } from "shared/api";
import { useMutation } from "react-query";
import { RiHeartAddLine } from "react-icons/ri";
import Like from "./Like";

const Unlike = (props) => {
  const likeId = props.res[0].id;

  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");

  const headers = {
    Authorization: accessToken,
    "refresh-token": refreshToken,
  };
  const [success, setSuccess] = useState("");

  const deleteMylike = async (data) => {
    return await api.delete(`/auth/movie/favorite/${likeId}`, {
      headers: headers,
    });
  };

  const { mutate, isLoading } = useMutation(deleteMylike, {
    onSuccess: (data) => {
      setSuccess(data.data.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div>
      {success == "delete success" ? (
        <>
          <Like />
        </>
      ) : (
        <ImHeart
          onClick={() => {
            mutate();
          }}
          size={34}
          className="flex ml-2 text-red-500 hover:text-red-900 cursor-pointer hover:cursor"
        />
      )}
    </div>
  );
};

export default Unlike;

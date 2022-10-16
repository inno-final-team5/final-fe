import React, { useState } from "react";
import { ImHeart } from "react-icons/im";
import { useMutation, useQueryClient } from "react-query";
import Like from "./Like";
import { deleteMyLike } from "apis/favoriteApi";

const Unlike = (props) => {
  const likeId = props.res[0].id;

  const [success, setSuccess] = useState("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation(() => deleteMyLike(likeId), {
    onSuccess: (data) => {
      setSuccess(data.data.data);
      queryClient.invalidateQueries("myMovieList");
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
          size={26}
          className="flex ml-2 text-red-500 hover:text-red-900 cursor-pointer hover:cursor"
        />
      )}
    </div>
  );
};

export default Unlike;

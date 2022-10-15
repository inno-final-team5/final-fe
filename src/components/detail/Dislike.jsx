import React, { useState } from "react";
import { ImHeart } from "react-icons/im";
import { authApi } from "apis/index";
import { useMutation, useQueryClient } from "react-query";
import Like from "./Like";

const Unlike = (props) => {
  const likeId = props.res[0].id;
  const [success, setSuccess] = useState("");

  /**즐겨찾기 삭제 */
  const deleteMylike = async () => {
    return await authApi.delete(`/auth/movie/favorite/${likeId}`);
  };
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteMylike, {
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
          size={30}
          className="flex ml-2 text-red-500 hover:text-red-900 cursor-pointer hover:cursor"
        />
      )}
    </div>
  );
};

export default Unlike;

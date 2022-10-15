import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { api } from "shared/api";
import { useParams } from "react-router-dom";
import { RiHeartAddLine } from "react-icons/ri";
import { ImHeart } from "react-icons/im";

const Like = () => {
  const params = useParams();
  const id = params.id;
  const title = params.title;
  const poster = params.poster;
  const poster_path = "/" + poster + ".jpg";
  const [success, setSuccess] = useState("");

  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    Authorization: accessToken,
    "refresh-token": refreshToken,
  };

  /**영화 즐겨찾기 추가 */
  const addMylike = async (data) => {
    return await api.post(`/auth/movie/favorite`, data, {
      headers: headers,
    });
  };
  const queryClient = useQueryClient();
  const { mutate } = useMutation(addMylike, {
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
      {success == "favorite success" ? (
        <>
          <ImHeart
            className="flex ml-2 text-red-500 hover:text-red-900 cursor-pointer hover:cursor"
            size={34}
          />
        </>
      ) : (
        <RiHeartAddLine
          onClick={() => {
            const data = {
              movieId: id,
              posterPath: poster_path,
              title: title,
            };
            mutate(data);
          }}
          className="flex ml-2 text-red-500 hover:text-red-900 cursor-pointer hover:cursor"
          size={34}
        />
      )}
    </div>
  );
};

export default Like;

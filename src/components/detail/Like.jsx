import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { api } from "shared/api";
import { useParams } from "react-router-dom";
import { RiHeartAddLine } from "react-icons/ri";
import { ImHeart } from "react-icons/im";
import Unlike from "./Unlike";
import Spinner from "components/common/Spinner";

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
  const queryClient = useQueryClient();
  const addMylike = async (data) => {
    return await api.post(`/auth/movie/favorite`, data, {
      headers: headers,
    });
  };
  const { mutate, isLoading } = useMutation(addMylike, {
    onSuccess: (data) => {
      setSuccess(data.data.data);
      queryClient.invalidateQueries("myMovieList");
      console.log(data, "즐찾추가됨");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div>
      {success == "favorite success" ? (
        <>
          <ImHeart className="flex ml-2 text-red-500 hover:text-red-900 cursor-pointer hover:cursor" size={34} />
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

import axios from "axios";
import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { useQuery } from "react-query";
import api from "shared/api";

const NewPosts = () => {
  const getRecentPosteWithApi = async () => {
    // const { data } = await api.get("/post");
    const { data } = await axios.get("http://localhost:3001/post");
    return data;
  };

  const query = useQuery("post", getRecentPosteWithApi);
  console.log(query);

  return (
    <div>
      <ul>
        {!query.isLoading &&
          query.data.map((i) => (
            <li
              key={i.postId}
              className="bg-mWhite grid grid-cols-12 grid-flow-row-dense px-5 py-3 items-center rounded-lg mb-5 cursor-pointer"
            >
              <div className="col-start-1">{i.postCategory}</div>
              <div className="w-48 col-span-2">
                <div className="pr-5 flex text-sm">
                  <span className="mr-1 text-xl">
                    <AiFillAliwangwang />
                  </span>
                  {i.nickname}
                </div>
              </div>

              <div className="flex-col col-span-8">
                <div className="pr-5">{i.postTitle}</div>
              </div>

              <div className="grid justify-items-end mr-5">
                <div>{i.createdAt}</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NewPosts;

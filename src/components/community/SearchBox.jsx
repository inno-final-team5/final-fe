import { Toast } from "components/common/Toast";
import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [type, setCategory] = useState("postTitle");
  const [keyword, setKeyword] = useState("");

  const searchKeywordHandler = (e) => {
    e.preventDefault();
    if (keyword.length < 1) {
      return Toast.fire("키워드를 입력하세요!");
    }
    console.log("type", type);
    console.log("keyword", keyword);
    navigate(`/community/${type}/${keyword}`);
    setKeyword("");
  };
  return (
    <form>
      <div className="flex items-center rounded-lg p-2 gap-2">
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={type}
          id="category"
          className="bg-mWhite text-mBlack text-sm rounded-lg block w-full p-1.5"
        >
          <option value="postTitle">제목</option>
          <option value="postContent">내용</option>
        </select>
        <div className="relative">
          <input
            placeholder="키워드를 입력하세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="h-8 rounded-lg pl-2 py-4 w-45 lg:w-64"
          />
          <button
            type="submit"
            onClick={searchKeywordHandler}
            className="px-1 absolute right-1 top-2"
          >
            <BsSearch className="text-mBlack" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;

import { Toast } from "components/common/Toast";
import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
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
    <div className="flex items-center bg-mCream gap-2 p-1 rounded-lg">
      <div>
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={type}
          id="category"
          className="bg-mWhite text-mBlack text-sm rounded-lg block w-full p-2.5"
        >
          <option value="postTitle">제목</option>
          <option value="postContent">내용</option>
        </select>
      </div>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="h-8 rounded-lg"
      />
      <button onClick={searchKeywordHandler} className="px-2">
        <FaSearch className="text-mBlack" />
      </button>
    </div>
  );
};

export default SearchBox;

import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");

  const searchKeywordHandler = (e) => {
    e.preventDefault();
    // navigate(`search/${keyword}`);
    console.log("category", category);
    console.log("keyword", keyword);
    setKeyword("");
  };
  return (
    <div className="flex items-center bg-mGray gap-2 p-2">
      <div>
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
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
        <FaSearch className="text-mWhite" />
      </button>
    </div>
  );
};

export default SearchBox;

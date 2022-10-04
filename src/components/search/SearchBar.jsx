import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const onChangeHandler = (e) => {
    const {
      target: { value },
    } = e;
    setKeyword(value);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-3 justify-center flex">
        <form className="w-4/5 ">
          <div className="relative">
            <input
              type="input"
              className="block p-4 pl-6 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:border-mYellow "
              placeholder="검색어를 입력하세요"
              onChange={onChangeHandler}
              required
            />
            <button
              type="submit"
              onClick={() => navigate(`/search/${keyword}`)}
              className="absolute right-4 bottom-1.5 focus:outline-none px-3 py-2"
            >
              <BsSearch
                className="text-mBlack hover:text-gray-500 hover:text-2xl"
                size={30}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

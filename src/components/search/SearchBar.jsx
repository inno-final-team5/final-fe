import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div>
      <div className="mt-1 justify-center flex">
        <form className="w-4/5 ">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative">
            <input
              type="input"
              className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:border-mYellow "
              placeholder="검색어를 입력하세요"
              required
            />
            <button type="submit" className="absolute right-2 bottom-2.5  focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
              <BsSearch className="text-mBlack hover:text-mGray hover:text-2xl" size={30} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

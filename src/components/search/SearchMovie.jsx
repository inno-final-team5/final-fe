import React from "react";

function SearchMovie({ title, imageUrl }) {
  console.log(imageUrl);
  return (
    <div>
      <div class="relative cursor-pointer">
        <a
          href="#!"
          class="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-80 bg-gray-800 duration-300"
        >
          <h1 className="text-2xl text-mCream font-semibold">{title}</h1>
        </a>
        <div class="relative flex flex-wrap content-center">
          <img alt="영화포스터" src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;

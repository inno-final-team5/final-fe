import React from "react";

//슬라이더
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import tw from "tailwind-styled-components";

import poster from "../../images/movie_poster_sample.jpg";

const BoxOfiice = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="w-11/12 m-auto ">
      <h2 className="text-mYellow text-2xl my-5"> BOX OFFICE </h2>
      <Slider {...settings} className="flex pr-10">
        <div className="relative  h-72">
          <div className="absolute top-0 left-4 mb-1 text-8xl font-bold text-mYellow z-10">
            1
          </div>
          <img
            src={poster}
            alt="movie_poster"
            className="absolute top-7 left-16 w-40 z-40"
          />
          <div className="absolute left-16 bottom-0 text-mYellow my-2.5 z-10">
            라라랜드
          </div>
        </div>

        <div className="relative  h-72">
          <div className="absolute top-0 left-4 mb-1 text-8xl font-bold text-mYellow z-10">
            2
          </div>
          <img
            src={poster}
            alt="movie_poster"
            className="absolute top-7 left-16 w-40 z-40"
          />
          <div className="absolute left-16 bottom-0 text-mYellow my-2.5 z-10">
            라라랜드
          </div>
        </div>

        <div className="relative  h-72">
          <div className="absolute top-0 left-4 mb-1 text-8xl font-bold text-mYellow z-10">
            3
          </div>
          <img
            src={poster}
            alt="movie_poster"
            className="absolute top-7 left-16 w-40 z-40"
          />
          <div className="absolute left-16 bottom-0 text-mYellow my-2.5 z-10">
            라라랜드
          </div>
        </div>

        <div className="relative  h-72">
          <div className="absolute top-0 left-4 mb-1 text-8xl font-bold text-mYellow z-10">
            4
          </div>
          <img
            src={poster}
            alt="movie_poster"
            className="absolute top-7 left-16 w-40 z-40"
          />
          <div className="absolute left-16 bottom-0 text-mYellow my-2.5 z-10">
            라라랜드
          </div>
        </div>

        <div className="relative  h-72">
          <div className="absolute top-0 left-4 mb-1 text-8xl font-bold text-mYellow z-10">
            5
          </div>
          <img
            src={poster}
            alt="movie_poster"
            className="absolute top-7 left-16 w-40 z-40"
          />
          <div className="absolute left-16 bottom-0 text-mYellow my-2.5 z-10">
            라라랜드
          </div>
        </div>

        <div className="relative  h-72">
          <div className="absolute top-0 left-4 mb-1 text-8xl font-bold text-mYellow z-10">
            6
          </div>
          <img
            src={poster}
            alt="movie_poster"
            className="absolute top-7 left-16 w-40 z-40"
          />
          <div className="absolute left-16 bottom-0 text-mYellow my-2.5 z-10">
            라라랜드
          </div>
        </div>

        <div className="relative  h-72">
          <div className="absolute top-0 left-4 mb-1 text-8xl font-bold text-mYellow z-10">
            7
          </div>
          <img
            src={poster}
            alt="movie_poster"
            className="absolute top-7 left-16 w-40 z-40"
          />
          <div className="absolute left-16 bottom-0 text-mYellow my-2.5 z-10">
            라라랜드
          </div>
        </div>

        <div className="relative  h-72">
          <div className="absolute top-0 left-4 mb-1 text-8xl font-bold text-mYellow z-10">
            8
          </div>
          <img
            src={poster}
            alt="movie_poster"
            className="absolute top-7 left-16 w-40 z-40"
          />
          <div className="absolute left-16 bottom-0 text-mYellow my-2.5 z-10">
            라라랜드
          </div>
        </div>

        <div className="relative  h-72">
          <div className="absolute top-0 left-4 mb-1 text-8xl font-bold text-mYellow z-10">
            9
          </div>
          <img
            src={poster}
            alt="movie_poster"
            className="absolute top-7 left-16 w-40 z-40"
          />
          <div className="absolute left-16 bottom-0 text-mYellow my-2.5 z-10">
            라라랜드
          </div>
        </div>

        <div className="relative  h-72">
          <div className="absolute top-3 left-0 mb-1 text-7xl font-bold text-mYellow z-10">
            10
          </div>
          <img
            src={poster}
            alt="movie_poster"
            className="absolute top-7 left-16 w-40 z-40"
          />
          <div className="absolute left-16 bottom-0 text-mYellow my-2.5 z-10">
            라라랜드
          </div>
        </div>
        {/* <div>
          <div className="mb-1 text-base text-mYellow underline underline-offset-4">
            2
          </div>
          <img src={poster} alt="movie_poster" className="w-40" />
          <h3 className="text-mYellow my-2.5">라라랜드</h3>
        </div>
        <div>
          <div className="mb-1 text-base text-mYellow underline underline-offset-4">
            3
          </div>
          <img src={poster} alt="movie_poster" className="w-40" />
          <h3 className="text-mYellow my-2.5">라라랜드</h3>
        </div>
        <div>
          <div className="mb-1 text-base text-mYellow underline underline-offset-4">
            4
          </div>
          <img src={poster} alt="movie_poster" className="w-40" />
          <h3 className="text-mYellow my-2.5">라라랜드</h3>
        </div>
        <div>
          <div className="mb-1 text-base text-mYellow underline underline-offset-4">
            5
          </div>
          <img src={poster} alt="movie_poster" className="w-40" />
          <h3 className="text-mYellow my-2.5">라라랜드</h3>
        </div>
        <div>
          <div className="mb-1 text-base text-mYellow underline underline-offset-4">
            6
          </div>
          <img src={poster} alt="movie_poster" className="w-40" />
          <h3 className="text-mYellow my-2.5">라라랜드</h3>
        </div>
        <div>
          <div className="mb-1 text-base text-mYellow underline underline-offset-4">
            7
          </div>
          <img src={poster} alt="movie_poster" className="w-40" />
          <h3 className="text-mYellow my-2.5">라라랜드</h3>
        </div>
        <div>
          <div className="mb-1 text-base text-mYellow underline underline-offset-4">
            8
          </div>
          <img src={poster} alt="movie_poster" className="w-40" />
          <h3 className="text-mYellow my-2.5">라라랜드</h3>
        </div>
        <div>
          <div className="mb-1 text-base text-mYellow underline underline-offset-4">
            9
          </div>
          <img src={poster} alt="movie_poster" className="w-40" />
          <h3 className="text-mYellow my-2.5">라라랜드</h3>
        </div>
        <div>
          <div className="mb-1 text-base text-mYellow underline underline-offset-4">
            10
          </div>
          <img src={poster} alt="movie_poster" className="w-40" />
          <h3 className="text-mYellow my-2.5">라라랜드</h3>
        </div> */}
      </Slider>
    </div>
  );
};

// const StyledSlider = tw(Slider)`
// relative
//   z-1
//   bg-mGray
// `;

export default BoxOfiice;

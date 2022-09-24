import React from "react";

//슬라이더
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="w-5/6 m-auto">
      <h2 className="text-mCream text-2xl my-5"> BOX OFFICE </h2>
      <Slider {...settings} className="flex ">
        <div>
          <div className="mb-1 text-base text-mYellow underline underline-offset-4">
            1
          </div>
          <img src={poster} alt="movie_poster" className="w-40" />
          <h3 className="text-mYellow my-2.5">라라랜드</h3>
        </div>
        <div>
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
        </div>
      </Slider>
    </div>
  );
};

export default BoxOfiice;

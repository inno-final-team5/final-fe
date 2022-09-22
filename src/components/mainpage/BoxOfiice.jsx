import React from "react";

//슬라이더
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import poster from "../../images/movie_poster_sample.jpg";

const BoxOfiice = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="w-4/6 m-auto">
      <h2 className="text-mYellow text-2xl my-5"> BOX OFFICE </h2>
      <Slider {...settings}>
        <div>
          <img src={poster} alt="movie_poster" className="w-28" />
          <h3>1</h3>
        </div>
        <div>
          <img src={poster} alt="movie_poster" className="w-28" />

          <h3>2</h3>
        </div>
        <div>
          <img src={poster} alt="movie_poster" className="w-28" />

          <h3>3</h3>
        </div>
        <div>
          <img src={poster} alt="movie_poster" className="w-28" />
          <h3>4</h3>
        </div>
        <div>
          <img src={poster} alt="movie_poster" className="w-28" />
          <h3>5</h3>
        </div>
        <div>
          <img src={poster} alt="movie_poster" className="w-28" />

          <h3>6</h3>
        </div>
        <div>
          <img src={poster} alt="movie_poster" className="w-28" />

          <h3>7</h3>
        </div>
        <div>
          <img src={poster} alt="movie_poster" className="w-28" />

          <h3>8</h3>
        </div>
        <div>
          <img src={poster} alt="movie_poster" className="w-28" />

          <h3>9</h3>
        </div>
        <div>
          <img src={poster} alt="movie_poster" className="w-28" />

          <h3>10</h3>
        </div>
      </Slider>
    </div>
  );
};

export default BoxOfiice;

import React from "react";
import { useQuery } from "react-query";
import Spinner from "components/common/Spinner";
import { getBoxOfficeWithApi } from "apis/mainApi";
import BoxOfficeMovie from "./BoxOfficeMovie";

//슬라이더
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BoxOffice = () => {
  /**carousel 설정*/
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  /**테이터가 onSuccess일 때 가져오기 */
  const BoxOfficeQuery = useQuery("boxoffice", getBoxOfficeWithApi, {
    onSuccess: () => {
      window.scrollTo(0, 0);
    },
  });

  if (BoxOfficeQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-11/12 m-auto mt-14">
      <h2 className="text-mYellow text-lg md:text-2xl my-10 font-bold">
        방구석 평론가들이 사랑한 영화🧡
      </h2>
      <Slider {...settings} className="flex ">
        {BoxOfficeQuery.data.data.map((movie) => (
          <BoxOfficeMovie {...movie} key={movie.movieId}></BoxOfficeMovie>
        ))}
      </Slider>
    </div>
  );
};

export default BoxOffice;

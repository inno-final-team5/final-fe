import React from "react";
import { useQuery } from "react-query";
// import api from "shared/api";
//로딩중
import Spinner from "components/common/Spinner";
//슬라이더
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";

const BoxOfiice = () => {
  /**carousel 설정*/
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  /**BoxOffice 데이터 불러오기*/
  const getBoxOfficeWithApi = async () => {
    const { data } = await axios.get("http://localhost:3001/boxoffice");
    return data;
  };

  /**데이터가 onSuccess일때 가져오기*/
  const BoxOfficequery = useQuery("boxOffice", getBoxOfficeWithApi, {
    onSuccess: () => {},
  });
  if (BoxOfficequery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-11/12 m-auto mt-14">
      <h2 className="text-mYellow text-2xl my-10 font-bold"> BOX OFFICE </h2>

      <Slider {...settings} className="flex pl-10">
        {BoxOfficequery.data.map((i) => (
          <div key={i.movieId} className="relative h-96 cursor-pointer ">
            {/* 영화 순위 */}
            <div className="absolute top-0 left-4 mb-1 text-7xl font-bold text-mCream z-10">
              {i.movieId}
            </div>
            {/* 영화 포스터 */}
            <img
              src={i.imageUrl}
              alt="movie_poster"
              className="relative top-7 left-16 w-40 h-60 z-40 bg-cover"
            />
            {/* 영화 제목 */}
            <div className=" relative top-10 left-16 text-mYellow z-10 my-2.5 mr-10 w-4/6 leading-5 tracking-wider">
              {i.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BoxOfiice;

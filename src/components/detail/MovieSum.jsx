import React, { useState } from "react";
import Spinner from "components/common/Spinner";
import { useQuery } from "react-query";
import { api, authApi } from "apis/index";
import { useParams, Link } from "react-router-dom";
import Like from "./Like";
import Dislike from "./Dislike";
import OnelineForm from "./OnelineForm";
import { RiHeartAddLine } from "react-icons/ri";
import { Toast } from "components/common/Toast";

const MovieSum = () => {
  const accessToken = localStorage.getItem("accessToken");

  const [img, setImg] = useState(null);
  const [myFav, setMyFav] = useState([]);
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const id = params.id;

  /**영화정보 불러오기 */
  const getMovieSum = async () => {
    return await api.get(`/movie/detail/${id}`);
  };
  const movieQuery = useQuery("movieList", getMovieSum, {
    onSuccess: (data) => {
      setMovie(data.data.data);
      setImg(`https://image.tmdb.org/t/p/w342` + data.data.data.poster_path);
    },
  });

  /**내가 즐겨찾기한 영화 불러오기 */
  const getMyMovie = async () => {
    return await authApi.get(`/auth/movie/favorites`);
  };
  const myMovieQuery = useQuery("myMovieList", getMyMovie, {
    onSuccess: (data) => {
      setMyFav(data.data.data);
      window.scrollTo(0, 0);
    },
  });
  //즐겨찾기 상태유지 위해 내가 즐겨찾기한 영화와 현재 영화 일치하는 데이터 찾기
  let res = myFav.filter((ele) => ele.movieId == id);

  if (movieQuery.isLoading || myMovieQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <section className="mt-2">
        <div className="pt-6 pb-6 bg-mGray sm:w-5/6 lg:w-full rounded-3xl container mx-auto flex px-12 py-24 md:flex-row flex-col items-center">
          <div className="lg:w-40 md:w-1/3 sm:w-1/2 w-30 mb-10 md:mb-0 sm:mb-4">
            <img src={img} alt="영화포스터" />
          </div>
          <div className="lg:flex-grow md:w-2/3 lg:pl-18 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="flex ">
              <h1 className="font-bold title-font 2xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-white text-3xl mb-4 font-medium">
                {movieQuery?.data.data.data.title}
              </h1>
              {accessToken == null ? (
                <RiHeartAddLine
                  onClick={() => {
                    Toast.fire({ icon: "warning", title: "로그인이 필요합니다" });
                  }}
                  className="flex ml-2 text-red-500 hover:text-red-900 cursor-pointer hover:cursor"
                  size={30}
                />
              ) : res?.length ? (
                <>
                  <Dislike res={res} />
                </>
              ) : (
                <>
                  <Like />
                </>
              )}
            </div>
            <p className="mb-8 text-white sm:text-sm lg:text-sm leading-relaxed">{movieQuery?.data.data.data.overview}</p>
            <div className="flex lg:flex-row md:flex-row lg:mt-16 sm:mt-0">
              {movieQuery?.data.data.data.genres.map((movie) => (
                <Link to={`/genre/${movie.name}`} key={movie.id}>
                  <button className="bg-mWhite sm:text-sm md:px-2 sm:px-2 inline-flex py-2 xl:px-3 ml-2 rounded-full items-center hover:bg-gray-400 focus:outline-none">
                    <span>{movie.name} </span>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <OnelineForm res={movie} />
    </div>
  );
};

export default MovieSum;

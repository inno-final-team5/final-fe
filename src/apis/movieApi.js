import { api, authApi } from "apis";

/** 검색페이지 영화 전체 리스트 불러오기 */
export const getSearchList = async (pageParam) => {
  const res = await api.get(`/movie/${pageParam}`);
  const { results, page } = res.data.data;
  return { results, page };
};

/** 검색한 영화 리스트 불러오기 */
export const getSearchResult = async (keyword, pageParam) => {
  const res = await api.get(`/main/search/title/${keyword}/${pageParam}`);
  const { results, page } = res.data.data;
  return { results, page };
};

/** 카테고리(장르)별 영화 리스트 불러오기 */
export const getGenreList = async (category, pageParam) => {
  const res = await api.get(`/main/search/${category}/${pageParam}`);
  const { results, page } = res.data.data;
  return { results, page };
};

/** 영화정보 불러오기 */
export const getMovieSum = async (id) => {
  return await api.get(`/movie/detail/${id}`);
};

/**내가 즐겨찾기한 영화 불러오기 */
export const getMyMovie = async () => {
  return await authApi.get(`/auth/movie/favorites`);
};

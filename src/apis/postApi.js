import { api, authApi } from "apis";

/** 커뮤니티 게시글 전체 조회*/
export const getAllPosts = async () => {
  const response = await api.get("/post");
  return response.data;
};

/** 커뮤니티- 영화관 게시글 전체 조회 */
export const getCinemaPosts = async () => {
  const response = await api.get("/post/cinemas");
  return response.data;
};

/** 커뮤니티- 영화 게시글 전체 조회 */
export const getMoviePosts = async () => {
  const response = await api.get("/post/movies");
  return response.data;
};

/** 커뮤니티- 게시글 상세 조회 */
export const getPostDetail = async (id) => {
  const response = await api.get(`/post/${id}`);
  return response.data;
};

/** 마이페이지- 나의 게시글 전체 조회 */
export const getMyPosts = async () => {
  const response = await authApi.get("/auth/post");
  return response.data;
};

/** 커뮤니티 - 새 게시글 작성 */
export const addPost = async (post) => {
  return await authApi.post("/auth/post", post);
};

/** 커뮤니티 - 작성한 게시글 삭제 */
export const deletePost = async ({ id }) => {
  return await authApi.delete(`/auth/post/${id}`);
};

/** 커뮤니티 - 작성한 게시글 수정 */
export const updatePost = async (post) => {
  return await authApi.put(`/auth/post/${post.id}`, post);
};

/** 커뮤니티 - 게시글 좋아요 조회 */
export const getLike = async (id) => {
  return await authApi.get(`/auth/post/like/${id}`);
};

/** 커뮤니티 - 게시글 좋아요 */
export const addLike = async ({ id }) => {
  return await authApi.post(`/auth/post/like/${id}`, { id });
};

/** 커뮤니티 - 게시글 좋아요 취소 */
export const deleteLike = async ({ id }) => {
  return await authApi.delete(`/auth/post/like/${id}`);
};
//진행중
/** 커뮤니티 - 새 댓글 작성 */
export const addComment = async ({ postId, commentContent }) => {
  return await authApi.post(`/auth/post/${postId}/comment`, { commentContent });
};

/** 커뮤니티 - 작성한 댓글 삭제 */
export const deleteComment = async ({ commentId }) => {
  return await authApi.delete(`/auth/post/comment/${commentId}`);
};

/** 커뮤니티 - 작성한 댓글 수정 */
export const updateComment = async (comment) => {
  return await authApi.put(`/auth/post/comment/${comment.id}`, comment);
};

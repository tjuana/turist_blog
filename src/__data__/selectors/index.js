export const getData = (state) => state.blogs?.posts
// добавить фильтр первых 3 постов
export const getFirstThreePosts = (state) => state.blogs?.posts?.slice(0, 3)
export const getLoading = (state) => state.blogs.loaded
export const getAuth = (state) => state.blogs.auth
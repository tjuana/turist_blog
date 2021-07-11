export const getData = (state) => state.blogs.posts
// добавить фильтр первых 3 постов
export const getFirstThreePosts = (state) => state.blogs.posts
export const getLoading = (state) => state.blogs.loaded
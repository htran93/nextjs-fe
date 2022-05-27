const API_BASE_PATH = process.env.API_BASE_PATH;

export const getBlogList = async () => {
  const response = await fetch(`${API_BASE_PATH}/api/post`)
  const data = await response.json();
  return data;
}

export const getPostDetail = async (postId) => {
  const response = await fetch(`${API_BASE_PATH}/api/post/${postId}`)
  const data = await response.json();
  return data;
}
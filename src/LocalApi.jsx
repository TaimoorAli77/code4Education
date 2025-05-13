import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// GET Req
export const getPosts = () => {
  return axiosInstance.get("/posts");
};
// POST Req
export const postPosts = (postData) => {
  return axiosInstance.post("/posts", postData);
};
// PUT Req
export const putPosts = (putData, id) => {
  return axiosInstance.put(`/posts/${id}`, putData);
};
//Delete Req
export const deletePosts = (id) => {
  return axiosInstance.delete(`/posts/${id}`);
};

import axios from "axios";
import { API_KEY } from "../keys.env";

const BASE_URL = "https://www.googleapis.com/blogger/v3/blogs/";

axios.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  config.headers["Content-type"] = "application/json";
  return config;
});

export default class PostApiService {
  static getPosts(blogId) {
    return axios.get(BASE_URL + blogId + `/posts?key=${API_KEY}`);
  }

  static getPost(blogId, postId) {
    return axios.get(BASE_URL + blogId + `/posts/${postId}?key=${API_KEY}`);
  }

  static getNextPage(blogId, token) {
    return axios.get(
      BASE_URL + blogId + `/posts?key=${API_KEY}&pageToken=${token}`
    );
  }

  static createPost(blogId, model) {
    return axios.post(BASE_URL + blogId + `/posts?key=${API_KEY}`, model);
  }

  static updatePost(blogId, postId, model) {
    return axios.put(
      BASE_URL + blogId + `/posts/${postId}?key=${API_KEY}`,
      model
    );
  }

  static deletePost(blogId, postId) {
    return axios.delete(BASE_URL + blogId + `/posts/${postId}?key=${API_KEY}`);
  }

  static searchPosts(blogId, searchText) {
    return axios.get(
      BASE_URL + blogId + `/posts/search?q=${searchText}&key=${API_KEY}`
    );
  }
}

import axios from "axios";
import { API_KEY } from "../keys.env";

const BASE_URL = "https://www.googleapis.com/blogger/v3/blogs/";

export default class PostApiService {
  static getPosts(blogId) {
    return axios.get(BASE_URL + blogId + `/posts?key=${API_KEY}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  static getPost(blogId, postId) {
    return axios.get(BASE_URL + blogId + `/posts/${postId}?key=${API_KEY}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  static deletePost(blogId, postId) {
    const token = localStorage.getItem("token");
    return axios.delete(BASE_URL + blogId + `/posts/${postId}?key=${API_KEY}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
  }
}

import axios from "axios";
import { API_KEY } from "../keys.env";

axios.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  config.headers["Content-type"] = "application/json";
  return config;
});

export default class BlogApiService {
  static getBlogs() {
    return axios.get(
      `https://www.googleapis.com/blogger/v3/users/self/blogs?key=${API_KEY}`
    );
  }
}

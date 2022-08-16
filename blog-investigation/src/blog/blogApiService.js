import axios from "axios";
import { API_KEY } from "../keys.env";

export default class BlogApiService {
  static getBlogs() {
    const token = localStorage.getItem("token");
    return axios.get(
      `https://www.googleapis.com/blogger/v3/users/self/blogs?key=${API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    );
  }
}

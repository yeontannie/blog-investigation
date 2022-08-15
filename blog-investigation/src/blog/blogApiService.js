import axios from "axios";
import { API_KEY } from "../secret.env";

export default class blogApiService {
    static getBlogs(token) {
        return axios.get(`https://www.googleapis.com/blogger/v3/users/self/blogs?key=${API_KEY}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-type': 'application/json'
            }
        })
    }
}
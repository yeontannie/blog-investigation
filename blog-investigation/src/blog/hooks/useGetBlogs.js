import { useState, useEffect } from "react";
import BlogApiService from "../blogApiService";
import { useNavigate } from "react-router-dom";

export const useGetBlogs = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    BlogApiService.getBlogs(token)
      .then((response) => setBlogs(response.data.items))
      .catch((error) => {
        navigate("/error", {
          state: {
            code: error.response.data.error.code,
            message: error.response.data.error.message,
          },
        });
      })
      .finally(() => setIsLoading(false));
  }, [token, navigate]);

  return { blogs, isLoading };
};

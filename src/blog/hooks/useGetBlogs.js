import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BlogApiService from "../blogApiService";

export const useGetBlogs = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    BlogApiService.getBlogs()
      .then((response) => response.data.items && setBlogs(response.data.items))
      .catch((error) => {
        navigate("/error", {
          state: {
            code: error.response.data.error.code,
            message: error.response.data.error.message,
          },
        });
      })
      .finally(() => setIsLoading(false));
  }, [navigate]);

  return { blogs, isLoading };
};

import { useState, useEffect } from "react";
import blogApiService from "../blogApiService";
import { useNavigate } from "react-router-dom";

export const useGetBlogs = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    blogApiService
      .getBlogs(token)
      .then((response) => {
        setBlogs(response.data.items);
        setIsLoading(false);
      })
      .catch(() => {
        navigate("/error", { state: "403" });
      });
  }, [token, navigate]);

  return { blogs, isLoading };
};

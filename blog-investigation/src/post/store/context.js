import { createContext } from "react";
import { postsInitialState } from "./reducer";

export const PostsContext = createContext(postsInitialState);

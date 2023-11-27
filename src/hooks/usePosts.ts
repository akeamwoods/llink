import { useQuery } from "react-query";
import { PostType } from "../types/postType";
import { fetchPosts } from "../api/posts";

export const usePosts = () => {
  return useQuery<PostType[], Error>("posts", fetchPosts);
};


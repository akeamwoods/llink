import { useQuery } from "react-query";
import { PostType } from "../types/postType";
import { fetchPostById } from "../api/posts";

export const usePost = (postId: string) => {
  return useQuery<PostType, Error>(["post", postId], () => fetchPostById(postId), {
    enabled: !!postId
  });
};

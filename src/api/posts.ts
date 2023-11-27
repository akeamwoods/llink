import { PostType } from "../types/postType";

export const fetchPosts = async (): Promise<PostType[]> => {
  const response = await fetch("https://dummyjson.com/posts");
  if (!response.ok) {
    throw new Error("Network error");
  }
  const data = await response.json();
  return data.posts;
};

export const fetchPostById = async (postId: string): Promise<PostType> => {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  if (!response.ok) {
    throw new Error("Network error");
  }
  const data = await response.json();
  return data;
};

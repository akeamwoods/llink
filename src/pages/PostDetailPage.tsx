import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { usePost } from "../hooks/usePost";
import { useUser } from "../hooks/useUser";
import { generateSlug } from "../utils/generateSlug";

const PostDetailPage: React.FC = () => {
  const { postId, slug } = useParams();
  const navigate = useNavigate();

  const {
    data: post,
    isLoading: isLoadingPost,
    error: errorPost,
  } = usePost(postId!);
  const userId = post?.userId?.toString();
  const {
    data: user,
    isLoading: isLoadingUser,
    error: errorUser,
  } = useUser(userId, { enabled: !!userId });

  useEffect(() => {
    if (post && !isLoadingPost && !slug) {
      navigate(`/post/${postId}/${generateSlug(post.title)}`, {
        replace: true,
      });
    }
  }, [post, isLoadingPost, postId, slug, navigate]);

  if (isLoadingPost || isLoadingUser) return <div>Loading...</div>;
  if (errorPost || errorUser) return <div>Error loading post or user data</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <Card
      author={`${user?.firstName} ${user?.lastName}`}
      avatar={user?.image ?? 'avatar.svg'}
      title={post.title}
      description={post.body}
    />
  );
};

export default PostDetailPage;

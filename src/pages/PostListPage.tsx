import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { usePosts } from "../hooks/usePosts";
import { useUsers } from "../hooks/useUsers";
import { generateSlug } from "../utils/generateSlug";
import styles from "./PostListPage.module.css";

const PostListPage: React.FC = () => {
  const {
    data: posts,
    isLoading: isLoadingPosts,
    error: errorPosts,
  } = usePosts();
  const {
    data: users,
    isLoading: isLoadingUsers,
    error: errorUsers,
  } = useUsers();

  if (isLoadingPosts || isLoadingUsers) {
    return <div>Loading...</div>;
  }

  if (errorPosts || errorUsers) {
    return <div>Error loading data</div>;
  }

  return (
    <div className={styles.postListContainer}>
      {posts?.map((post) => {
        const user = users?.find((u) => u.id === post.userId);
        return (
          <Link
            to={`/post/${post.id}/${generateSlug(post.title)}`}
            key={post.id}
          >
            <Card
              author={`${user?.firstName} ${user?.lastName}`}
              avatar={user?.image ?? 'avatar.svg'}
              title={post.title}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default PostListPage;

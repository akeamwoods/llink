import React from "react";
import styles from './Card.module.css';

export type CardProps = {
  author: string;
  title: string;
  avatar: string;
  description?: string;
};

export const Card: React.FC<CardProps> = ({
  author,
  avatar,
  title,
  description,
}) => {
  return (
    <div className={styles.cardContainer}>
      <img
        src={avatar}
        className={styles.authorAvatar}
        alt={`${author} avatar`}
      />
      <div className={styles.authorInfo}>
        <h3 className={styles.authorName}>{author}</h3>
        <p className={styles.postTitle}>{title}</p>
        {description && <p className={styles.postDescription}>{description}</p>}
      </div>
    </div>
  );
};

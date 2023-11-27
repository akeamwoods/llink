import React from "react";
import styles from "./Header.module.css";
import liveLinkLogo from "/livelink_logo.svg";

export const Header: React.FC<{ LinkComponent: React.ElementType }> = ({
  LinkComponent, // This prop is only here to get this project hosted on GH Pages, would simply use <a> tags and no prop
}) => {
  return (
    <header className={styles.headerContainer}>
      <LinkComponent to="/">
        <img src={liveLinkLogo} className={styles.logo} alt="LiveLink logo" />
      </LinkComponent>
      <h1 className={styles.heading}>LiveLink</h1>
    </header>
  );
};

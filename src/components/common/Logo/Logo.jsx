import React from "react";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="/logo.png" alt="Mole attack, join.erni"/>
    </div>
  );
};

export default Logo;

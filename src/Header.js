import React from 'react';
import { Link } from "react-router-dom";
import styles from './Header.scss';

function Header(){
  return (
    <header id={styles.header}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/profile">Profile</Link>
    </nav>
    </header>
  )
}

export default Header;

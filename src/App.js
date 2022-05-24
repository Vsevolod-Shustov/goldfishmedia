import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header';
// import Main from './Main';
// import Side from './Side';
// import Footer from './Footer';

import styles from './App.scss';

export default function App() {
  return (
    <div id={styles.app}>
    <Header />
    app
    <Outlet />
    </div>
  );
}

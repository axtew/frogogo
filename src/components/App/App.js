import React, { Component } from "react";

import styles from "./App.module.css";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

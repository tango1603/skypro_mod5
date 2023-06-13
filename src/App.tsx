import React from "react";
import "./app.scss";
import Bar from "./components/common/bar/Bar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Main />
        <Bar />
        <Footer />
      </div>
    </div>
  );
};

export default App;

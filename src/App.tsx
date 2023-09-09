import "./App.scss";
import Bar from "./bar/Bar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import React from "react";

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);

  /* React.useEffect(() => {
    const timing = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearInterval(timing);
  }, []);
*/
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

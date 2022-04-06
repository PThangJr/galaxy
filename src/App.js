import React, { useState } from "react";
import "./assets/scss/app.scss";
import CountDown from "./components/CountDown";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sale from "./components/Sale";
const App = () => {
  const [countDown, setCountDown] = useState(100);
  const [isCountDownDone, setIsCountDownDone] = useState(true);
  // console.log(moment().format(dateEnd.toString()));

  const renderMain = () => {
    if (isCountDownDone) {
      return (
        <div className="container contain m-auto">
          <Sale />
          <ItemList />
        </div>
      );
    }
    return <CountDown />;
  };
  return (
    <div className="app">
      <div className="wrapper">
        <Header />

        <main className="main">{renderMain()}</main>
        <Footer />
      </div>
    </div>
  );
};

export default App;

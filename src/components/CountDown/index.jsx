import React from "react";
import "./style.scss";
import SaleBoxImg from "./images/salebox.png";
const CountDown = ({ date }) => {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  return (
    <div className="count-down">
      <header className="count-down-header">
        <h3 className="count-down-header__heading">
          <img src={SaleBoxImg} alt="" />
        </h3>
        <p className="count-down-header__desc">Open the box of 100 to sell</p>
      </header>
      <div className="count-down-control">
        <div className="count-down-item">
          <p className="count-down-item__number">{date?.days || 10}</p>
          <p className="count-down-item__text">Days</p>
        </div>
        <div className="count-down-item">
          <p className="count-down-item__number">{date?.hours || 13}</p>
          <p className="count-down-item__text">Hours</p>
        </div>
        <div className="count-down-item">
          <p className="count-down-item__number">{date?.minutes || 10}</p>
          <p className="count-down-item__text">Mins</p>
        </div>
        <div className="count-down-item">
          <p className="count-down-item__number">{date?.second || 10}</p>
          <p className="count-down-item__text">Seconds</p>
        </div>
      </div>
      <div className="deadline">
        <div className="deadline-date">8 May 2022</div>
        <p className="deadline-desc">Coming soon</p>
      </div>
    </div>
  );
};

export default CountDown;

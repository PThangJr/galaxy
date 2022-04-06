import classNames from "classnames";
import React, { useState } from "react";
import IconPrice from "./images/icon-price.png";
import SaleName from "./images/sale-name.png";
import SaleProduct from "./images/sale-product.png";
import "./style.scss";
const Sale = () => {
  const [progress, setProgress] = useState(60);
  const isCompleteProgress = progress === 100;

  return (
    <div className="sale">
      <div className="sale-top">
        <img src={SaleProduct} className="sale-top__product" alt="" />
      </div>
      <div className="sale-detail">
        <img src={SaleName} alt="" />
        <button className="btn btn--primary">DETAIL</button>
      </div>
      <div className="sale-price">
        <img src={IconPrice} alt="" />
        <span className="sale-price__number">125 BUSD</span>
        {/* <span className="sale-price__unit">BUSD</span> */}
      </div>
      <p className="sale-desc">
        Warrior Pack with 5 cards of rare and epic rarity will give you a
        powerful combat troop to fight against your enemy
      </p>

      <div className="sale-progress">
        <p
          style={{ width: `${progress}%` }}
          className="sale-progress__percent"
        ></p>
      </div>
      <p className="sale-progress-info">{progress}/100</p>
      <div className="sale-bottom">
        <button
          className={classNames("btn btn--primary", {
            active: isCompleteProgress,
          })}
        >
          Buy Pack
        </button>
      </div>
    </div>
  );
};

export default Sale;

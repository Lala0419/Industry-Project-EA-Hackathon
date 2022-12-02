import React from "react";
import "./GameList.scss";

export const GameList = ({ img, title, price, discount }) => {
  return (
    <section className="game-list">
      <img src={img} alt="game" className="game-list_img" />
      <div className="like"></div>
      <span className="game-list_title">{title}</span>
      <div>
        <span className="game-list_discount">{discount}</span>
        <span className="game-list_price">{price}</span>
      </div>
    </section>
  );
};

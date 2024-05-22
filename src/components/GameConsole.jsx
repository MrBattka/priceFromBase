import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";

const GameConsole = ({ fullList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const arr = [];

  fullList.map((a) => {
    arr.push({ name: a.Наименование, price: a.Опт });
  });

  const result = arr.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.place === value.place && t.name === value.name)
  );

  let sonyName = /Sony /gi;

  const fixName = (game) => {
    const fixSony = game.name.replace(sonyName, "");
    return changeFlag(fixSony);
  };

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Игровые приставки ▲" : "Игровые приставки ▼"}
          </span>
        )}
      </div>

      {isOpen &&
      <div>
        <div>Playstation 🎮 / Xbox 🎮</div>
        {result.map((gameConsole, i) => (
          <div key={i}>
            {baseFix(gameConsole) &&
              gameConsole.price &&
              (gameConsole.name.indexOf("PlayStation") !== -1 ||
              gameConsole.name.indexOf("DualSense") !== -1 ||
              gameConsole.name.indexOf("Xbox") !== -1) &&
              returnFixPrice(gameConsole, fixName(gameConsole)) + gameConsole.price}
          </div>
        ))}
        <br />
        </div>}
    </div>
  );
};

export default GameConsole;

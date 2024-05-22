import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";

const Samsung = ({ fullList }) => {
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
  
  let samsungName = /Samsung /gi;

  const fixName = (samsung) => {
    const fixSamsung = samsung.name.replace(samsungName, "");
    return changeFlag(fixSamsung);
  };

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Samsung ▲" : "Samsung ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div>
          <div>📲 Samsung Galaxy</div>
          {result.map((galaxy, i) => (
            <div key={i}>
              {baseFix(galaxy) &&
                galaxy.name?.indexOf("Galaxy Tab") == -1 &&
                galaxy.price &&
                galaxy.name.indexOf("Samsung Galaxy") !== -1 &&
                returnFixPrice(galaxy, fixName(galaxy)) + galaxy.price}
            </div>
          ))}
          <br />
          <div>📲 Galaxy Tab</div>
          {result.map((tab, i) => (
            <div key={i}>
              {baseFix(tab) &&
                tab.price &&
                tab.name.indexOf("Samsung Galaxy Tab") !== -1 &&
                returnFixPrice(tab, fixName(tab)) + tab.price}
            </div>
          ))}
          <br />
        </div>
      )}
    </div>
  );
};

export default Samsung;

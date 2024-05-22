import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";

const Yandex = ({ fullList }) => {
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
  
  let yandexName = /Yandex /gi;

  const fixName = (yandex) => {
    const fixYandex = yandex.name.replace(yandexName, "");
    return changeFlag(fixYandex);
  };

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Яндекс / JBL / Shokz ▲" : "Яндекс / JBL / Shokz ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div>
          <div>🔊 Яндекс Станция</div>
          <div>
            {result.map((yandex, i) => (
              <div key={i}>
                {baseFix(yandex) &&
                  yandex.price &&
                  yandex.name.indexOf("Яндекс") !== -1 &&
                  returnFixPrice(yandex, fixName(yandex)) + yandex.price}
              </div>
            ))}
          </div>
          <br />
          <div>🔊 JBL</div>
          <div>
            {result.map((jbl, i) => (
              <div key={i}>
                {baseFix(jbl) &&
                  jbl.price &&
                  jbl.name.indexOf("JBL") !== -1 &&
                  returnFixPrice(jbl, fixName(jbl)) + jbl.price}
              </div>
            ))}
          </div>
          <br />
          <div>Shokz</div>
          <div>
            {result.map((shokz, i) => (
              <div key={i}>
                {baseFix(shokz) &&
                  shokz.price &&
                  shokz.name.indexOf("Shokz") !== -1 &&
                  returnFixPrice(shokz, fixName(shokz)) + shokz.price}
              </div>
            ))}
          </div>
          <br />
        </div>
      )}
    </div>
  );
};

export default Yandex;

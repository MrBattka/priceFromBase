import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";

const OtherBrands = ({ fullList }) => {
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

  let asusName = /Asus /gi;

  const fixName = (other) => {
    const fixAsus = other.name.replace(asusName, "");
    return changeFlag(fixAsus);
  };

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Остальные бренды ▲" : "Остальные бренды ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div>
          <div>📹GoPro</div>
          <div>
            {result.map((goPro, i) => (
              <div key={i}>
                {baseFix(goPro) &&
                  goPro.price &&
                  (goPro.name.indexOf("GoPro") !== -1 ||
                    goPro.name.indexOf("Protective") !== -1 ||
                    goPro.name.indexOf("El Grande") !== -1 ||
                    goPro.name.indexOf("3-Way") !== -1) &&
                  returnFixPrice(goPro, fixName(goPro)) + goPro.price}
              </div>
            ))}
          </div>
          <br />
          <div>Finis</div>
          {result.map((finis, i) => (
            <div key={i}>
              {baseFix(finis) &&
                finis.price &&
                finis.name.indexOf("Finis") !== -1 &&
                returnFixPrice(finis, fixName(finis)) + finis.price}
            </div>
          ))}
          <div>
            <br />
            <div>📲 Asus</div>
            {result.map((asus, i) => (
              <div key={i}>
                {baseFix(asus) &&
                  asus.price &&
                  asus.name.indexOf("Asus") !== -1 &&
                  returnFixPrice(asus, fixName(asus)) + asus.price}
              </div>
            ))}
          </div>
          <br />
          <div>📲 Nothing Phone</div>
          {result.map((nothing, i) => (
            <div key={i}>
              {baseFix(nothing) &&
                nothing.price &&
                nothing.name.indexOf("Nothing") !== -1 &&
                returnFixPrice(nothing, fixName(nothing)) + nothing.price}
            </div>
          ))}
          <br />
          <div>📲 One Plus</div>
          {result.map((onePlus, i) => (
            <div key={i}>
              {baseFix(onePlus) &&
                onePlus.price &&
                onePlus.name.indexOf("OnePlus") !== -1 &&
                returnFixPrice(onePlus, fixName(onePlus)) + onePlus.price}
            </div>
          ))}
          <br />
        </div>
      )}
    </div>
  );
};

export default OtherBrands;

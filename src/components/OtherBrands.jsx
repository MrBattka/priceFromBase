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
  let sonyName = /Sony /gi;
  let corosName = /COROS /gi;

  const fixName = (other) => {
    const fixAsus = other.name.replace(asusName, "");
    const fixSony = fixAsus.replace(sonyName, "");
    const fixCoros = fixSony.replace(corosName, "");
    return changeFlag(fixCoros);
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
          <div>📲 Huawei</div>
          {result.map((huawei, i) => (
            <div key={i}>
              {baseFix(huawei) &&
                huawei.price &&
                huawei.name.indexOf("Huawei") !== -1 &&
                returnFixPrice(huawei, fixName(huawei)) + huawei.price}
            </div>
          ))}
          <br />
          <div>📲 COROS</div>
          {result.map((coros, i) => (
            <div key={i}>
              {baseFix(coros) &&
                coros.price &&
                coros.name.indexOf("COROS") !== -1 &&
                returnFixPrice(coros, fixName(coros)) + coros.price}
            </div>
          ))}
          <br />
          <div>📲 Google</div>
          {result.map((google, i) => (
            <div key={i}>
              {baseFix(google) &&
                google.price &&
                google.name.indexOf("Google") !== -1 &&
                returnFixPrice(google, fixName(google)) + google.price}
            </div>
          ))}
          <br />
          <div>Playstation 🎮 / Xbox 🎮</div>
          {result.map((gameConsole, i) => (
            <div key={i}>
              {baseFix(gameConsole) &&
                gameConsole.price &&
                (gameConsole.name.indexOf("PlayStation") !== -1 ||
                  gameConsole.name.indexOf("DualSense") !== -1 ||
                  gameConsole.name.indexOf("Xbox") !== -1) &&
                returnFixPrice(gameConsole, fixName(gameConsole)) +
                  gameConsole.price}
            </div>
          ))}
          <br />
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

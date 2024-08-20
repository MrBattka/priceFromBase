import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";
import { copyTable } from "../helpers/copy";

const Xiaomi = ({ fullList }) => {
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

  let wifi = /Wifi/gi;
  let wifi2 = /Wi-fi/gi;
  let poco = /Pocophone/gi;
  let note = /Redmi Note/gi;
  let xiaomiName = /Xiaomi /gi;
  let yandexName = /Yandex /gi;

  const fixName = (xiaomi) => {
    const fixWifi = xiaomi.name.replace(wifi, "Wi-Fi");
    const fixWifi2 = fixWifi.replace(wifi2, "Wi-Fi");
    const fixPoco = fixWifi2.replace(poco, "Poco");
    const fixNote = fixPoco.replace(note, "Note");
    const fixXiaomi = fixNote.replace(xiaomiName, "");
    const fixYandex = fixXiaomi.replace(yandexName, "");
    return changeFlag(fixYandex);
  };

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Xiaomi / Yandex / JBL ▲" : "Xiaomi / Yandex / JBL ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div>
          <h4
            onClick={() => {
              copyTable();
            }}
          >
            ❐ Copy
          </h4>
          <table>
            <div>📲 Xiaomi</div>
            {result.map((xiaomi, i) => (
              <div key={i}>
                {baseFix(xiaomi) &&
                  xiaomi.price &&
                  (xiaomi.name.indexOf("Xiaomi") !== -1 ||
                    xiaomi.name.indexOf("Pocophone") !== -1) &&
                  returnFixPrice(xiaomi, fixName(xiaomi)) + xiaomi.price}
              </div>
            ))}
            <br />
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
          </table>
        </div>
      )}
    </div>
  );
};

export default Xiaomi;

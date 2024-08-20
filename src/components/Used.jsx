import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";
import { copyTable } from "../helpers/copy";

const Used = ({ fullList }) => {
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
  let corosName = /COROS /gi;

  const fixName = (used) => {
    const fixWifi = used.name.replace(wifi, "Wi-Fi");
    const fixWifi2 = fixWifi.replace(wifi2, "Wi-Fi");
    const fixCoros = fixWifi2.replace(corosName, "");
    return changeFlag(fixCoros);
  };

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Б/У ▲" : "Б/У ▼"}
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
            <div>📲 Идеальное БУ</div>
            {result.map((used, i) => (
              <div key={i}>
                {used.price &&
                  (used.name.indexOf('"A-"') !== -1 ||
                    used.name.indexOf('"A"') !== -1 ||
                    used.name.indexOf('"A+"') !== -1 ||
                    used.name.indexOf('"B-"') !== -1 ||
                    used.name.indexOf('"B"') !== -1 ||
                    used.name.indexOf('"B+"') !== -1 ||
                    used.name.indexOf('"C-"') !== -1 ||
                    used.name.indexOf('"C"') !== -1 ||
                    used.name.indexOf('"C+"') !== -1) &&
                  returnFixPrice(used, fixName(used)) + used.price}
              </div>
            ))}
            <br />
            <div>Пломбы</div>
            {result.map((seals, i) => (
              <div key={i}>
                {seals.price &&
                  (seals.name?.indexOf("Пломбa") !== -1 ||
                    seals.name?.indexOf("Пломба") !== -1) &&
                  returnFixPrice(seals, fixName(seals)) + seals.price}
              </div>
            ))}
            <br />
          </table>
        </div>
      )}
    </div>
  );
};

export default Used;

import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";

const Used = ({ fullList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const arr = [];

  const copyTable = () => {
    const elTable = document.querySelector("table");

    let range, sel;

    // Ensure that range and selection are supported by the browsers
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      // unselect any element in the page
      sel.removeAllRanges();

      try {
        range.selectNodeContents(elTable);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(elTable);
        sel.addRange(range);
      }

      document.execCommand("copy");
    }

    sel.removeAllRanges();

    console.log("Element Copied! Paste it in a file");
  };

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

import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";

const Samsung = ({ fullList }) => {
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
  let samsungName = /Samsung Galaxy /gi;

  const fixName = (samsung) => {
    const fixWifi = samsung.name.replace(wifi, "Wi-Fi");
    const fixWifi2 = fixWifi.replace(wifi2, "Wi-Fi");
    const fixSamsung = fixWifi2.replace(samsungName, "");
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
          <h4
            onClick={() => {
              copyTable();
            }}
          >
            ❐ Copy
          </h4>
          <table>
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
          </table>
        </div>
      )}
    </div>
  );
};

export default Samsung;

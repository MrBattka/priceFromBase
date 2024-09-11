import React, { useRef, useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";
import { copyTable } from "../helpers/copy";

const Apple = ({ fullList }) => {
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
  let macbook = /MacBook/gi;
  let watch = /Watch/gi;
  let appleName = /Apple /gi;
  let iPhoneName = /iPhone /gi;

  const fixName = (apple) => {
    const fixWifi = apple.name.replace(wifi, "Wi-Fi");
    const fixWifi2 = fixWifi.replace(wifi2, "Wi-Fi");
    const fixMacBook = fixWifi2.replace(macbook, "");
    const fixWatch = fixMacBook.replace(watch, "");
    const fixApple = fixWatch.replace(appleName, "");
    const fixIPhone = fixApple.replace(iPhoneName, "");
    return changeFlag(fixIPhone);
  };

  const refWatchSE = useRef()
  const refWatchS9 = useRef()

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Apple ▲" : "Apple ▼"}
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
            <div>📲 Apple</div>
            {result.map((apple, i) => (
              <div key={i}>
                {baseFix(apple) &&
                  apple.price &&
                  (apple.name.indexOf("AirPods") !== -1 ||
                    apple.name.indexOf("Pencil") !== -1 ||
                    apple.name.indexOf("Apple Magic") !== -1 ||
                    apple.name.indexOf("Apple Battary") !== -1 ||
                    apple.name.indexOf("Apple TV") !== -1 ||
                    apple.name.indexOf("Apple HomePod") !== -1 ||
                    apple.name.indexOf("Apple AirTag") !== -1) &&
                  returnFixPrice(apple, fixName(apple)) + apple.price}
              </div>
            ))}
            <br />
            <div>📲 Apple iPhone</div>
            {result.map((iPhone, i) => (
              <div key={i}>
                {baseFix(iPhone) &&
                  iPhone.price &&
                  iPhone.name.indexOf("iPhone") !== -1 &&
                  returnFixPrice(iPhone, fixName(iPhone)) + iPhone.price}
              </div>
            ))}
            <br />
            {refWatchSE ? <div>⌚️ Apple Watch SE 2023</div> : null}
            {result.map((SE, i) =>
            (
              <>
                {(SE.name.indexOf("SE 2023 Gen") !== -1 ||
                  SE.name.indexOf("Watch SE") !== -1) && <div key={i} ref={refWatchSE}>
                    {baseFix(SE) &&
                      SE.price &&
                      (SE.name.indexOf("SE 2023 Gen") !== -1 ||
                        SE.name.indexOf("Watch SE") !== -1) &&
                      returnFixPrice(SE, fixName(SE)) + SE.price}
                  </div>}
              </>
            ))}
            <br />
            <div>⌚️Apple Watch S8</div>
            {result.map((s8, i) => (
              <div key={i}>
                {baseFix(s8) &&
                  s8.price &&
                  s8.name.indexOf("Apple Watch S8") !== -1 &&
                  returnFixPrice(s8, fixName(s8)) + s8.price}
              </div>
            ))}
            <br />
            {refWatchS9 ? <div>⌚️Apple Watch S9</div> : null}
            {result.map((s9, i) => (
              <div key={i} ref={refWatchS9}>
                {baseFix(s9) &&
                  s9.price &&
                  s9.name.indexOf("Apple Watch S9") !== -1 &&
                  returnFixPrice(s9, fixName(s9)) + s9.price}
              </div>
            ))}
            <br />
            <div>📲 Apple iPad</div>
            {result.map((iPad, i) => (
              <div key={i}>
                {baseFix(iPad) &&
                  iPad.price &&
                  iPad.name.indexOf("iPad") !== -1 &&
                  returnFixPrice(iPad, fixName(iPad)) + iPad.price}
              </div>
            ))}
            <br />
            <div>📲 Apple MacBook</div>
            {result.map((macbook, i) => (
              <div key={i}>
                {baseFix(macbook) &&
                  macbook.price &&
                  macbook.name.indexOf("MacBook") !== -1 &&
                  returnFixPrice(macbook, fixName(macbook)) + macbook.price}
              </div>
            ))}
            <br />
            <div>📲 Apple iMac</div>
            {result.map((iMac, i) => (
              <div key={i}>
                {baseFix(iMac) &&
                  iMac.price &&
                  iMac.name.indexOf("iMac") !== -1 &&
                  returnFixPrice(iMac, fixName(iMac)) + iMac.price}
              </div>
            ))}
            <br />
          </table>
        </div>
      )}
    </div>
  );
};

export default Apple;

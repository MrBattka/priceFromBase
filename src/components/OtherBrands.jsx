import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";
import { copyTable } from "../helpers/copy";

const OtherBrands = ({ fullList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHuawei, setIsHuawei] = useState(false)
  const [isCOROS, setIsCOROS] = useState(false)
  const [isGoogle, setIsGoogle] = useState(false)
  const [isPlaystation, setIsPlaystation] = useState(false)
  const [isGoPro, setIsGoPro] = useState(false)
  const [isFinis, setIsFinis] = useState(false)
  const [isAsus, setIsAsus] = useState(false)
  const [isNothing, setIsNothing] = useState(false)
  const [isOnePlus, setIsOnePlus] = useState(false)
  const [isZTE, setIsZTE] = useState(false)
  const [isDyson, setIsDyson] = useState(false)

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
  let asusName = /Asus /gi;
  let sonyName = /Sony /gi;
  let corosName = /COROS /gi;
  let onePlusName = /OnePlus /gi;
  let ZTEName = /ZTE /gi;
  let dysonName = /Dyson /gi;

  const fixName = (other) => {
    const fixWifi = other.name.replace(wifi, "Wi-Fi");
    const fixWifi2 = fixWifi.replace(wifi2, "Wi-Fi");
    const fixAsus = fixWifi2.replace(asusName, "");
    const fixSony = fixAsus.replace(sonyName, "");
    const fixCoros = fixSony.replace(corosName, "");
    const fixOnePlus = fixCoros.replace(onePlusName, "");
    const fixZTE = fixOnePlus.replace(ZTEName, "");
    const fixDyson = fixZTE.replace(dysonName, "");
    return changeFlag(fixDyson);
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
          <h4
            onClick={() => {
              copyTable();
            }}
          >
            ❐ Copy
          </h4>
          <table>
            {isHuawei && <div>📲 Huawei</div>}
            {result.map((huawei, i) => (
              <div key={i}>
                {baseFix(huawei) &&
                  huawei.price &&
                  huawei.name.indexOf("Huawei") !== -1 &&
                  (isHuawei || setIsHuawei(true)) &&
                  returnFixPrice(huawei, fixName(huawei)) + huawei.price}
              </div>
            ))}
            {isCOROS && <br />}
            {isCOROS && <div>📲 COROS</div>}
            {result.map((coros, i) => (
              <div key={i}>
                {baseFix(coros) &&
                  coros.price &&
                  coros.name.indexOf("COROS") !== -1 &&
                  (isCOROS || setIsCOROS(true)) &&
                  returnFixPrice(coros, fixName(coros)) + coros.price}
              </div>
            ))}
            {isGoogle && <br />}
            {isGoogle && <div>📲 Google</div>}
            {result.map((google, i) => (
              <div key={i}>
                {baseFix(google) &&
                  google.price &&
                  google.name.indexOf("Google") !== -1 &&
                  (isGoogle || setIsGoogle(true)) &&
                  returnFixPrice(google, fixName(google)) + google.price}
              </div>
            ))}
            {isPlaystation && <br />}
            {isPlaystation && <div>Playstation 🎮 / Xbox 🎮</div>}
            {result.map((gameConsole, i) => (
              <div key={i}>
                {baseFix(gameConsole) &&
                  gameConsole.price &&
                  (gameConsole.name.indexOf("PlayStation") !== -1 ||
                    gameConsole.name.indexOf("DualSense") !== -1 ||
                    gameConsole.name.indexOf("Xbox") !== -1) &&
                  (isPlaystation || setIsPlaystation(true)) &&
                  returnFixPrice(gameConsole, fixName(gameConsole)) +
                  gameConsole.price}
              </div>
            ))}
            {isGoPro && <br />}
            {isGoPro && <div>📹 GoPro</div>}
            <div>
              {result.map((goPro, i) => (
                <div key={i}>
                  {baseFix(goPro) &&
                    goPro.price &&
                    (goPro.name.indexOf("GoPro") !== -1 ||
                      goPro.name.indexOf("Protective") !== -1 ||
                      goPro.name.indexOf("El Grande") !== -1 ||
                      goPro.name.indexOf("3-Way") !== -1) &&
                    (isGoPro || setIsGoPro(true)) &&
                    returnFixPrice(goPro, fixName(goPro)) + goPro.price}
                </div>
              ))}
            </div>
            {isFinis && <br />}
            {isFinis && <div>📲 Finis</div>}
            {result.map((finis, i) => (
              <div key={i}>
                {baseFix(finis) &&
                  finis.price &&
                  finis.name.indexOf("Finis") !== -1 &&
                  (isFinis || setIsFinis(true)) &&
                  returnFixPrice(finis, fixName(finis)) + finis.price}
              </div>
            ))}
            <div>
              {isAsus && <br />}
              {isAsus && <div>📲 Asus</div>}
              {result.map((asus, i) => (
                <div key={i}>
                  {baseFix(asus) &&
                    asus.price &&
                    asus.name.indexOf("Asus") !== -1 &&
                    (isAsus || setIsAsus(true)) &&
                    returnFixPrice(asus, fixName(asus)) + asus.price}
                </div>
              ))}
            </div>
            {isNothing && <br />}
            {isNothing && <div>📲 Nothing Phone</div>}
            {result.map((nothing, i) => (
              <div key={i}>
                {baseFix(nothing) &&
                  nothing.price &&
                  nothing.name.indexOf("Nothing") !== -1 &&
                  (isNothing || setIsNothing(true)) &&
                  returnFixPrice(nothing, fixName(nothing)) + nothing.price}
              </div>
            ))}
            {isOnePlus && <br />}
            {isOnePlus && <div>📲 One Plus</div>}
            {result.map((onePlus, i) => (
              <div key={i}>
                {baseFix(onePlus) &&
                  onePlus.price &&
                  onePlus.name.indexOf("OnePlus") !== -1 &&
                  (isOnePlus || setIsOnePlus(true)) &&
                  returnFixPrice(onePlus, fixName(onePlus)) + onePlus.price}
              </div>
            ))}
            {isZTE && <br />}
            {isZTE && <div>📲 ZTE</div>}
            {result.map((ZTE, i) => (
              <div key={i}>
                {baseFix(ZTE) &&
                  ZTE.price &&
                  ZTE.name.indexOf("ZTE") !== -1 &&
                  (isZTE || setIsZTE(true)) &&
                  returnFixPrice(ZTE, fixName(ZTE)) + ZTE.price}
              </div>
            ))}
            {isDyson && <br />}
            {isDyson && <div>📲 Dyson</div>}
            {result.map((dyson, i) => (
              <div key={i}>
                {baseFix(dyson) &&
                  dyson.price &&
                  dyson.name.indexOf("Dyson") !== -1 &&
                  (isDyson || setIsDyson(true)) &&
                  returnFixPrice(dyson, fixName(dyson)) + dyson.price}
              </div>
            ))}
            <br />
          </table>
        </div>
      )}
    </div>
  );
};

export default OtherBrands;

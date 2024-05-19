import React, { useState } from "react";
import { returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";

const GameConsole = ({ fullList }) => {
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

  console.log(result);

  let LLAFlag = /LL\/A/g;
  let RUFlag = /RU/g;
  let EUFlag = /EU/g;
  let KZFlag = /KZ/g;
  let AAFlag = /AA/g;
  let HNAFlag = /HN\/A/g;
  let HNFlag = /HN/g;
  let MYFlag = /MY/gi;
  let CHAFlag = /CH\/A/g;
  let CHFlag = /CH/g;
  let LZFlag = /LZ/gi;
  let HKFlag = /HK/g;
  let VNAFlag = /VN\/A/g;
  let VNFlag = /VN/g;
  let BAAFlag = /BA\/A/g;
  let BAFlag = /BA/g;
  let ZDAFlag = /ZD\/A/g;
  let ZDFlag = /ZD/g;
  let SAFlag = /SA/g;
  let SAAFlag = /SA\/A/g;
  let CNAFlag = /CN\/A/g;
  let CNFlag = /CN/g;
  let USFlag = /US/g;
  let AFRFlag = /AFR/g;
  let AFAFlag = /AFA/g;
  let usb = /🇺🇸B/g;
  let sonyName = /Sony /gi;

  const fixFlags = (apple) => {
    const fixLLA = apple.name.replace(LLAFlag, "🇺🇸");
    const fixRU = fixLLA.replace(RUFlag, "🇷🇺");
    const fixEU = fixRU.replace(EUFlag, "🇪🇺");
    const fixKZ = fixEU.replace(KZFlag, "🇰🇿");
    const fixMY = fixKZ.replace(MYFlag, "🇲🇾");
    const fixAA = fixMY.replace(AAFlag, "🇦🇪");
    const fixHNA = fixAA.replace(HNAFlag, "🇭🇳");
    const fixHN = fixHNA.replace(HNFlag, "🇭🇳");
    const fixCHA = fixHN.replace(CHAFlag, "🇨🇭");
    const fixCH = fixCHA.replace(CHFlag, "🇨🇭");
    const fixLZ = fixCH.replace(LZFlag, "🇨🇱");
    const fixHK = fixLZ.replace(HKFlag, "🇭🇰");
    const fixVNA = fixHK.replace(VNAFlag, "🇻🇳");
    const fixVN = fixVNA.replace(VNFlag, "🇻🇳");
    const fixBAA = fixVN.replace(BAAFlag, "🇬🇧");
    const fixBA = fixBAA.replace(BAFlag, "🇬🇧");
    const fixZDA = fixBA.replace(ZDAFlag, "🇪🇺");
    const fixZD = fixZDA.replace(ZDFlag, "🇪🇺");
    const fixSAA = fixZD.replace(SAAFlag, "🇸🇦");
    const fixSA = fixSAA.replace(SAFlag, "🇸🇦");
    const fixCNA = fixSA.replace(CNAFlag, "🇨🇳");
    const fixCN = fixCNA.replace(CNFlag, "🇨🇳");
    const fixUS = fixCN.replace(USFlag, "🇺🇸");
    const fixAFR = fixUS.replace(AFRFlag, "🇿🇦");
    const fixAFA = fixAFR.replace(AFAFlag, "🇿🇦");

    const fixUsb = fixAFA.replace(usb, "USB");
    const fixSony = fixUsb.replace(sonyName, "");
    return fixSony;
  };

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Игровые приставки ▲" : "Игровые приставки ▼"}
          </span>
        )}
      </div>

      {isOpen &&
      <div>
        <div>Playstation 🎮 / Xbox 🎮</div>
        {result.map((gameConsole, i) => (
          <div key={i}>
            {baseFix(gameConsole) &&
              gameConsole.price &&
              (gameConsole.name.indexOf("PlayStation") !== -1 ||
              gameConsole.name.indexOf("DualSense") !== -1 ||
              gameConsole.name.indexOf("Xbox") !== -1) &&
              returnFixPrice(gameConsole, fixFlags(gameConsole)) + gameConsole.price}
          </div>
        ))}
        <br />
        </div>}
    </div>
  );
};

export default GameConsole;

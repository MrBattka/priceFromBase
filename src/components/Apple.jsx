import React, { useState } from "react";
import { returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";

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
  let macbook = /MacBook/gi;
  let watch = /Watch/gi;
  let appleName = /Apple /gi;

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
    const fixMacBook = fixUsb.replace(macbook, "");
    const fixWatch = fixMacBook.replace(watch, "");
    const fixApple = fixWatch.replace(appleName, "");
    return fixApple;
  };

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
                returnFixPrice(apple, fixFlags(apple)) + apple.price}
            </div>
          ))}
          <br />
          <div>📲 Apple iPhone</div>
          {result.map((iPhone, i) => (
            <div key={i}>
              {baseFix(iPhone) &&
                iPhone.price &&
                iPhone.name.indexOf("iPhone") !== -1 &&
                returnFixPrice(iPhone, fixFlags(iPhone)) + iPhone.price}
            </div>
          ))}
          <br />
          <div>⌚️ Apple Watch SE 2023</div>
          {result.map((SE, i) => (
            <div key={i}>
              {baseFix(SE) &&
                SE.price &&
                SE.name.indexOf("SE 2023 Gen") !== -1 &&
                returnFixPrice(SE, fixFlags(SE)) + SE.price}
            </div>
          ))}
          <br />
          <div>⌚️Apple Watch S9</div>
          {result.map((s9, i) => (
            <div key={i}>
              {baseFix(s9) &&
                s9.price &&
                s9.name.indexOf("Apple Watch S9") !== -1 &&
                returnFixPrice(s9, fixFlags(s9)) + s9.price}
            </div>
          ))}
          <br />
          <div>📲 Apple iPad</div>
          {result.map((iPad, i) => (
            <div key={i}>
              {baseFix(iPad) &&
                iPad.price &&
                iPad.name.indexOf("iPad") !== -1 &&
                returnFixPrice(iPad, fixFlags(iPad)) + iPad.price}
            </div>
          ))}
          <br />
          <div>📲 Apple MacBook</div>
          {result.map((macbook, i) => (
            <div key={i}>
              {baseFix(macbook) &&
                macbook.price &&
                macbook.name.indexOf("MacBook") !== -1 &&
                returnFixPrice(macbook, fixFlags(macbook)) + macbook.price}
            </div>
          ))}
          <br />
          <div>📲 Apple iMac</div>
          {result.map((iMac, i) => (
            <div key={i}>
              {baseFix(iMac) &&
                iMac.price &&
                iMac.name.indexOf("iMac") !== -1 &&
                returnFixPrice(iMac, fixFlags(iMac)) + iMac.price}
            </div>
          ))}
          <br />
        </div>
      )}
    </div>
  );
};

export default Apple;

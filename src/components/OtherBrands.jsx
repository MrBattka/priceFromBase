import React, { useState } from "react";
import { returnFixPrice } from "../helpers/fixFlags";
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
  let asusName = /Asus /gi;

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
    const fixAsus = fixUsb.replace(asusName, "");
    return fixAsus;
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
                  returnFixPrice(goPro, fixFlags(goPro)) + goPro.price}
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
                returnFixPrice(finis, fixFlags(finis)) + finis.price}
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
                  returnFixPrice(asus, fixFlags(asus)) + asus.price}
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
                returnFixPrice(nothing, fixFlags(nothing)) + nothing.price}
            </div>
          ))}
          <br />
        </div>
      )}
    </div>
  );
};

export default OtherBrands;

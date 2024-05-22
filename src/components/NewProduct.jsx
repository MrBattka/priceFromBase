import React, { useState } from "react";
import { returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";

const NewProduct = ({ fullList }) => {
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
    return fixUsb;
  };

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Новый товар ▲" : "Новый товар ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div>
          <div>📲 Новый товар</div>
          {result.map((newProduct, i) => (
            <div key={i}>
              {baseFix(newProduct) &&
                newProduct.price &&
                newProduct.name.indexOf("AirPods") == -1 &&
                newProduct.name.indexOf("Pencil") == -1 &&
                newProduct.name.indexOf("Apple Magic") == -1 &&
                newProduct.name.indexOf("Apple Battary") == -1 &&
                newProduct.name.indexOf("Apple TV") == -1 &&
                newProduct.name.indexOf("Apple HomePod") == -1 &&
                newProduct.name.indexOf("Apple AirTag") == -1 &&
                newProduct.name.indexOf("iPhone") == -1 &&
                newProduct.name.indexOf("SE 2023 Gen") == -1 &&
                newProduct.name.indexOf("Apple Watch S9") == -1 &&
                newProduct.name.indexOf("iPad") == -1 &&
                newProduct.name.indexOf("MacBook") == -1 &&
                newProduct.name.indexOf("iMac") == -1 &&
                newProduct.name.indexOf("GoPro") == -1 &&
                newProduct.name.indexOf("Protective") == -1 &&
                newProduct.name.indexOf("El Grande") == -1 &&
                newProduct.name.indexOf("3-Way") == -1 &&
                newProduct.name.indexOf("Finis") == -1 &&
                newProduct.name.indexOf("Asus") == -1 &&
                newProduct.name.indexOf("Nothing") == -1 &&
                newProduct.name.indexOf("Samsung Galaxy") == -1 &&
                newProduct.name.indexOf("Xiaomi") == -1 &&
                newProduct.name.indexOf("Pocophone") == -1 &&
                newProduct.name.indexOf("Яндекс") == -1 &&
                newProduct.name.indexOf("JBL") == -1 &&
                newProduct.name.indexOf("Shokz") == -1 &&
                newProduct.name.indexOf("PlayStation") == -1 &&
                newProduct.name.indexOf("DualSense") == -1 &&
                newProduct.name.indexOf("Xbox") == -1 &&
                newProduct.name.indexOf("Huawei") == -1 &&
                newProduct.name.indexOf("COROS") == -1 &&
                newProduct.name.indexOf("Google") == -1 &&
                newProduct.name.indexOf("OnePlus") == -1 &&
                returnFixPrice(newProduct, fixFlags(newProduct)) + newProduct.price}
            </div>
          ))}
          <br />
        </div>
      )}
    </div>
  );
};

export default NewProduct;

import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
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

  const fixName = (apple) => {
    return changeFlag(apple.name);
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
                newProduct.name.indexOf("Watch SE") == -1 &&
                newProduct.name.indexOf("ZTE ") == -1 &&
                newProduct.name.indexOf("Dyson") == -1 &&
                newProduct.name.indexOf("Apple Watch S8") !== -1 &&
                returnFixPrice(newProduct, fixName(newProduct)) + newProduct.price}
            </div>
          ))}
          <br />
        </div>
      )}
    </div>
  );
};

export default NewProduct;

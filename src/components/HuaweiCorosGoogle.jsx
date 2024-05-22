import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";

const Coros = ({ fullList }) => {
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
  
  let corosName = /COROS /gi;

  const fixName = (el) => {
    const fixCoros = el.name.replace(corosName, "");
    return changeFlag(fixCoros);
  };

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Huawei / COROS / Google ▲" : "Huawei / COROS / Google ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div>
          <div>📲 Huawei</div>
          {result.map((huawei, i) => (
            <div key={i}>
              {baseFix(huawei) &&
                huawei.price &&
                huawei.name.indexOf("Huawei") !== -1 &&
                returnFixPrice(huawei, fixName(huawei)) + huawei.price}
            </div>
          ))}
          <br />
          <div>📲 COROS</div>
          {result.map((coros, i) => (
            <div key={i}>
              {baseFix(coros) &&
                coros.price &&
                coros.name.indexOf("COROS") !== -1 &&
                returnFixPrice(coros, fixName(coros)) + coros.price}
            </div>
          ))}
          <br />
          <div>📲 Google</div>
          {result.map((google, i) => (
            <div key={i}>
              {baseFix(google) &&
                google.price &&
                google.name.indexOf("Google") !== -1 &&
                returnFixPrice(google, fixName(google)) + google.price}
            </div>
          ))}
          <br />
        </div>
      )}
    </div>
  );
};

export default Coros;

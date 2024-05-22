import React, { useState } from "react";
import { changeFlag, returnFixPrice } from "../helpers/fixFlags";
import { baseFix } from "../helpers/baseFix";
import style from "./styles.module.css";

const Xiaomi = ({ fullList }) => {
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
  
  let poco = /Pocophone/gi;
  let note = /Redmi Note/gi;
  let xiaomiName = /Xiaomi /gi;

  const fixName = (xiaomi) => {
    const fixPoco = xiaomi.name.replace(poco, "Poco");
    const fixNote = fixPoco.replace(note, "Note");
    const fixXiaomi = fixNote.replace(xiaomiName, "");
    return changeFlag(fixXiaomi);
  };

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Xiaomi ▲" : "Xiaomi ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div>
          <div>📲 Xiaomi</div>
          {result.map((xiaomi, i) => (
            <div key={i}>
              {baseFix(xiaomi) &&
                xiaomi.price &&
                (xiaomi.name.indexOf("Xiaomi") !== -1 ||
                  xiaomi.name.indexOf("Pocophone") !== -1) &&
                returnFixPrice(xiaomi, fixName(xiaomi)) + xiaomi.price}
            </div>
          ))}
          <br />
        </div>
      )}
    </div>
  );
};

export default Xiaomi;

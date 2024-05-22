import React, { useState } from "react";
import style from "./styles.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const date = new Date();
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`;
  const day = date.getDate();

  return (
    <div>
      <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Шапка ▲" : "Шапка ▼"}
      </span>
      {isOpen && (
        <div className={style.header}>
          {`${day}.${month}.${year}`}
          <br />
          🧑‍💻Работаем с 9:00 до 20:00
          <br />
          🚀Доставка ‼️
          <br />В наличии в Севастополе
          <br />
          🛃Оплата наличными при получении
          <br />
          <br />
          💬ДЛЯ ЗАКАЗА💬 📞 WhatsApp: https://wa.me/79787922235
        </div>
      )}
    </div>
  );
};

export default Header;

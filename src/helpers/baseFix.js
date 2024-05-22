export const baseFix = (el) => {
  return (
    el.name?.indexOf("Пломбa") == -1 &&
    el.name?.indexOf("Пломба") == -1 &&
    el.name?.indexOf('"A') == -1 &&
    el.name?.indexOf('"B') == -1 &&
    el.name?.indexOf('"C') == -1
  );
};

export const fixApple = (el) => {
  return (
    el.name.indexOf("Pencil") == -1 &&
    el.name.indexOf("AirPods") == -1 &&
    el.name.indexOf("Trackpad") == -1 &&
    el.name.indexOf("iPhone") == -1 &&
    el.name.indexOf("Watch SE 2023") == -1 &&
    el.name.indexOf("Watch S9") == -1 &&
    el.name.indexOf("MacBook") == -1
  );
};

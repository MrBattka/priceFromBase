const flags = [
    "LL/A",
    "RU",
    "EU",
    "KZ",
    "AA",
    "HN",
    "MY",
    "CN",
    "LZ",
    "HK",
    "VN",
    "CH",
    "SA",
    "US",
    "ZA",
    "AFA",
    "AFR",
    "ZD",
    "BA",
    "🇲🇾",
    "🇨🇫",
    "🇰🇿",
    '🇦🇪'
  ];
  
  export const checkFixPrice = (el) => {
    return flags.reduce(
      (acc, current) => acc && el.name.indexOf(current) === -1,
      true
    );
  };
  export const returnFixPrice = (el, prod) => {
    // console.log(prod + "prod");
    if (checkFixPrice(el) || el.name.indexOf('USB') != -1) {
      return `${prod} - `;
    } else {
      return prod;
    }
  };
  
  
  export const checkFixPriceHi = (el) => {
    return flags.reduce(
      (acc, current) => acc && el.Hi.indexOf(current) === -1,
      true
    );
  };
  export const returnFixPriceHi = (el, prod) => {
    // console.log(prod + "prod");
    if (checkFixPriceHi(el)) {
      return `${prod} - `;
    } else {
      return prod;
    }
  };
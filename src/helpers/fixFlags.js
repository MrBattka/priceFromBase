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
  "TH/A",
  "J/A",
  "UK",
  "AF",
];

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
let AFFlag = /AF/g;
let JAFlag = /J\/A/g;
let THFlag = /TH\/A/g;
let UKFlag = /UK/g;

let usb = /🇺🇸B/g;
let AFAEM = /🇿🇦AEM/g;

export const changeFlag = (el) => {
  const fixLLA = el.replace(LLAFlag, "🇺🇸");
  const fixRU = fixLLA.replace(RUFlag, "🇷🇺");
  const fixEU = fixRU.replace(EUFlag, "🇪🇺");
  const fixKZ = fixEU.replace(KZFlag, "🇰🇿");
  const fixMY = fixKZ.replace(MYFlag, "🇲🇾");
  const fixAA = fixMY.replace(AAFlag, "🇦🇪");
  const fixHNA = fixAA.replace(HNAFlag, "🇮🇳");
  const fixHN = fixHNA.replace(HNFlag, "🇮🇳");
  const fixCHA = fixHN.replace(CHAFlag, "🇨🇳");
  const fixCH = fixCHA.replace(CHFlag, "🇨🇳");
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
  const fixAF = fixUS.replace(AFFlag, "🇿🇦");
  const fixJA = fixAF.replace(JAFlag, "🇯🇵");
  const fixTH = fixJA.replace(THFlag, "🇹🇭");
  const fixUK = fixTH.replace(UKFlag, "🇬🇧");

  const fixUsb = fixUK.replace(usb, "USB");
  const fixAFAEM = fixUsb.replace(AFAEM, "AFAEM");

  return fixAFAEM;
};

export const checkFixPrice = (el) => {
  return flags.reduce(
    (acc, current) => acc && el.name.indexOf(current) === -1,
    true
  );
};
export const returnFixPrice = (el, prod) => {
  // console.log(prod + "prod");
  if (checkFixPrice(el) || el.name.indexOf("USB") != -1) {
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

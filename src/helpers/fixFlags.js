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
  "VCA",
  "XA",
  "HU",
  "HUA",
  "B/A",
  "ZDA",
  "AH",
  "KG/A",
  "AN/A",
  "ZP/A",
  "TN/A"
];

let LLAFlag = /LL\/A/g;
let RUFlag = /RU/g;
let RUAFlag = /RU\/A/g;
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
let BandAFlag = /B\/A/g;
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
let HUAFlag = /HU\/A/g;
let HUFlag = /HU/g;
let XAFlag = /X\/A/g;
let VCAFlag = /VC\/A/g;
let AHAFlag = /AH\/A/g;
let KGAFlag = /KG\/A/g;
let ANAFlag = /AN\/A/g;
let ZPAFlag = /ZP\/A/g;
let TNAFlag = /TN\/A/g;
let KAFlag = /K\/A/g;
let PMFlag = /PM\/A/g;
let QLFlag = /QL\/A/g;
let RKFlag = /RK\/A/g;
let HXFlag = /HX\/A/g;
let TWFlag = /TW\/A/g;

let usb = /🇺🇸B/g;
let AFAEM = /🇿🇦AEM/g;

export const changeFlag = (el) => {
  const fixLLA = el.replace(LLAFlag, "🇺🇸");
  const fixRUA = fixLLA.replace(RUAFlag, "🇷🇺");
  const fixRU = fixRUA.replace(RUFlag, "🇷🇺");
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
  const fixBandA = fixBA.replace(BandAFlag, "🇬🇧");
  const fixZDA = fixBandA.replace(ZDAFlag, "🇪🇺");
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
  const fixHUA = fixUK.replace(HUAFlag, "🇭🇺");
  const fixHU = fixHUA.replace(HUFlag, "🇭🇺");
  const fixXA = fixHU.replace(XAFlag, "🇦🇺");
  const fixVCA = fixXA.replace(VCAFlag, "🇨🇦");
  const fixAHA = fixVCA.replace(AHAFlag, "🇦🇪");
  const fixKGA = fixAHA.replace(KGAFlag, "🇪🇺");
  const fixANA = fixKGA.replace(ANAFlag, "🇯🇴");
  const fixZPA = fixANA.replace(ZPAFlag, "🇭🇰");
  const fixTNA = fixZPA.replace(TNAFlag, "🇻🇳");
  const fixKA = fixTNA.replace(KAFlag, "🇪🇺");
  const fixPM = fixKA.replace(PMFlag, "🇪🇺");
  const fixQL = fixPM.replace(QLFlag, "🇯🇵");
  const fixRK = fixQL.replace(RKFlag, "🇪🇺");
  const fixHX = fixRK.replace(HXFlag, "🇦🇿");
  const fixTW = fixHX.replace(TWFlag, "🇹🇼");

  const fixUsb = fixTW.replace(usb, "USB");
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

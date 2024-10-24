export default function getComplexity(complexitySalt){
    let alphabetSalt, numberSalt, symbolSalt;
  if(complexitySalt>=1 && complexitySalt<=5){
    alphabetSalt = 3;
    numberSalt = 9;
    symbolSalt = 3
  }
  if(complexitySalt>=5 && complexitySalt<=10){
    alphabetSalt = 8;
    numberSalt = 9;
    symbolSalt = 5
  }
  if(complexitySalt>=10 && complexitySalt<=15){
    alphabetSalt = 26;
    numberSalt = 9;
    symbolSalt = 9
  }
  return {
    alphabetSalt,
    numberSalt,
    symbolSalt
  }
}
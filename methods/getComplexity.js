export default function getComplexity(complexitySalt){
   let complexity;
  if(complexitySalt>=1 && complexitySalt<=5){
   return "basic"
  }
  if(complexitySalt>=5 && complexitySalt<=10){
    return "mid"
  }
  if(complexitySalt>=10 && complexitySalt<=15){
    return "advanced"
  }
  return complexity;
}
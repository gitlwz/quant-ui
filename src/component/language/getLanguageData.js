import  getCurrentLanguage  from './getCurrentLanguage';
import  language  from './getAllLanguage';
let { getAllLanguage } = language;
export default function(data){
    let currentLanguage = getCurrentLanguage();
    let allLanguageData = getAllLanguage()
    if(currentLanguage === "zh_CN" ){
        return data
    }else{
        return allLanguageData[currentLanguage][data]
    }
}
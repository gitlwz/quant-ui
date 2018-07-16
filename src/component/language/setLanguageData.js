import  getAllLanguage  from './getAllLanguage';
export default function(language){
    let allLanguage = getAllLanguage();
    let arr_allLanguage = Object.keys(allLanguage);
    let arr_language = Object.keys(language);
    arr_language.forEach((l)=>{
        if(!!arr_allLanguage.includes(l)){
            allLanguage[l] = {...allLanguage[l],...language[l]}
        }else{
            allLanguage[l] = {...{},...language[l]}
        }
    })
    window.localStorage.setItem("quant-language",JSON.stringify(allLanguage));
}
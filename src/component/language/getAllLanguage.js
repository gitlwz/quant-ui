let language = {};


function setLanguageData (_language){
    let allLanguage = language;
    let arr_allLanguage = Object.keys(allLanguage);
    let arr_language = Object.keys(_language);
    arr_language.forEach((l)=>{
        if(!!arr_allLanguage.includes(l)){
            allLanguage[l] = {...allLanguage[l],..._language[l]}
        }else{
            allLanguage[l] = {...{},..._language[l]}
        }
    })
    language = allLanguage;
}
function getAllLanguage () {
    return language
}
export default {
    getAllLanguage:getAllLanguage,
    setLanguageData:setLanguageData
}
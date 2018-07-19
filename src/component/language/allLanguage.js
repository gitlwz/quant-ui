    let language =  window.localStorage.getItem("quant-language");
    if(!!language){
        language = JSON.parse(language)
    }
    language = {}


export default language;
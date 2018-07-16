export default function(language){
    let current = window.localStorage.getItem("quant-currentLanguage");
    if(!!current){
        return current
    }
    return "zh_CN"
}
export default function(){
    let language =  window.localStorage.getItem("quant-language");
    if(!!language){
        return JSON.parse(language)
    }
    return {}
}
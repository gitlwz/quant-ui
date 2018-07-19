let current = window.localStorage.getItem("quant-currentLanguage");
if(!current){
    current = "zh_CN"
}
export default current;
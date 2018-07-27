const getCurrentColor = () =>{
    return window.localStorage.getItem("quant-theme")||"default"
}
const setCurrentColor = (color) =>{
    window.localStorage.setItem("quant-theme",color)
}
const refreshColor = () =>{
    window.location.reload()
}
module.exports = {
    getCurrentColor,  //获取当前主题颜色
    refreshColor,    //刷新主题颜色
    setCurrentColor,  //设置当前主题颜色
}
export default {
    getCurrentColor,  //获取当前主题颜色
    refreshColor,    //刷新主题颜色
    setCurrentColor,  //设置当前主题颜色
}
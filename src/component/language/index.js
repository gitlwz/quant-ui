import  getAllLanguage  from './getAllLanguage';
import  getCurrentLanguage  from './getCurrentLanguage';
import  getLanguageData  from './getLanguageData';
import  refreshLanguage  from './refreshLanguage';
import  setCurrentLanguage  from './setCurrentLanguage';
import  setLanguageData  from './setLanguageData';
import  defaultData  from './defaultData';

setLanguageData({
    'en_US':defaultData
})
export default {
    getAllLanguage,     //获取所有语言数据
    getCurrentLanguage,  //获取当前语言类型
    getLanguageData,    //获取翻译当前语言
    refreshLanguage,    //刷新语言
    setCurrentLanguage,  //设置当前语言类型
    setLanguageData,     //设置语言数据
}
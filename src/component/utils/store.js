let store = {
    set:function(key,value){
        window.localStorage.setItem(`quant-${key}`,JSON.stringify(value))
    },
    get:function(key){
        let _value = window.localStorage.getItem(`quant-${key}`);
        return _value&&JSON.parse(_value)
    },
    remove:function(key){
        window.localStorage.removeItem(`quant-${key}`)
    }

}

module.exports = store;
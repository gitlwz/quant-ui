import cloneDeep  from 'lodash/cloneDeep';
/**
 * x、y需要交换的位置索引
 * arr需要交换的数组
 */
function interchange(x,y,arr) {
    let _arr = cloneDeep(arr)
    _arr.splice(x, 1, ..._arr.splice(y, 1, _arr[x]))
    return _arr;
};
module.exports = interchange;
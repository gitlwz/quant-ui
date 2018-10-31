export function getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem("ancoa-layouts")) || {};
        } catch (e) {
            /*Ignore*/
        }
    }
    return ls[key];
}
export function saveToLS(key, value) {
    if (global.localStorage) {
        let ls = global.localStorage.getItem("ancoa-layouts") || "{}"
        ls = JSON.parse(ls)
        ls[key] = value
        global.localStorage.setItem(
            "ancoa-layouts",
            JSON.stringify(ls)
        );
    }
}
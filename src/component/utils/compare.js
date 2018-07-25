export default function compare(origin, target) {
    if (typeof target === 'object')    {
        if (typeof origin !== 'object') return false
        for (let key of Object.keys(target))
            if (!compare(origin[key], target[key])) return false
        return true
    } else return origin === target
}
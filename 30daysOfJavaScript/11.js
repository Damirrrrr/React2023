function memoize(fn) {
    const cache = {}
    
    return function(...args) {
        let key = String(args);
        if(key in cache){
            return cache[key];
        }
        let res = fn(...args);
        cache[key] = res;
        return res;
    }
}
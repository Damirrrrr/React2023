var sortBy = function(arr, fn) {
    const swap = (a, b) => {
        return (fn(a) < fn(b)) ? -1 : 1;
    }
    return arr.sort(swap)
};
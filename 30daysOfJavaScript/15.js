var cancellable = function(fn, args, t) {
    fn(...args);
    let interval = setInterval(() => {
        fn(...args);
    },t);

    var cancelFn = () => clearTimeout(interval);
    return cancelFn
};
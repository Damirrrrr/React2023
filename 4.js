var createCounter = function(init) {
    const x = init;
    return {
        reset: () => {
            return init = x;
        },

        increment: () => {
            return ++init;
        },

        decrement: () => {
            return --init;
        }
    }
};

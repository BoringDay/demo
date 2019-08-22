let obj = {};
obj.a = {
    a1: 1,
    b2: 2,
    c3: 3
};

function proxy(target, sourceKey, key) {
    Object.defineProperty(target, key, {
        configurable: true,
        get() {
            return target[sourceKey][key];
        },
        set(newvVal) {
            target[sourceKey][key] = newvVal;
        }
    });
}

for (let i in obj.a) {
    proxy(obj, "a", i);
}

console.log(obj.a1);

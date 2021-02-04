function add(a, b) {
   return a + b;
}
   
const once = function (func) {
    var resposne;
    return function () {
        if (func) {
            resposne = func.apply(this, arguments);
            func = null;
        }
        return resposne;
    }
};

const onceAdd = once(add);

alert(onceAdd(1, 2));
alert(onceAdd(3, 2));
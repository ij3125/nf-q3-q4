let A = function(callback) {
    return callback();  // 引数の関数を実行してその結果を返す
};

let B = (function() {
    let counter = 0;
    return function() {
        counter++;
        return counter;  // 呼び出されるたびに異なる値を返す
    };
})();

let result1 = A(function() {

return (function(x) {
return x;
})(B());
});

let result2 = (function(x) {

return A(function() {
return x;
});
})(B());

console.log(result1)
console.log(result2)
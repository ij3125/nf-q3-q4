// 関数定義
const f11 = () => {
    console.log("f11 called");
};

const f12 = () => {
    console.log("f12 called");
    throw new Error("Error in f12");
};

const f13 = () => {
    console.log("f13 called");
};

const f14 = (error) => {
    console.log("f14 called with error:", error.message);
};

// p11
console.log("Program 11:");
const p11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        f11();
        f12();
        resolve(); // f12のエラーがキャッチされず、resolveが呼ばれる
    }, 1000);
});
p11.then(() => {
    f13();
}).catch(f14);


// p12
console.log("Program 12:");
const p12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        f11();
        resolve();
    }, 1000);
});
p12.then(() => {
    f12(); // ここでエラーが発生し、catchに進む
    f13();
}).catch(f14);

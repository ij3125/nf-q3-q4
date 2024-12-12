// p21
const p21 = Promise.resolve("Resolved value");

// f21
const f21 = (value) => {
  console.log("f21 received:", value);
  // 非同期エラー
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Error in f21")), 0);
  });
};

// f22
const f22 = (error) => {
  console.log("f22 handled:", error.message);
};

// プログラム21
p21.then(f21).catch(f22)

// プログラム22
p21.then((value) => {f21(value);}).catch(f22)

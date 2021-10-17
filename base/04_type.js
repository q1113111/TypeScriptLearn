// object 表示陣列 不常用
var aa;
aa = {};
//{}用來指定陣列可以包含哪些屬性
// ?表示可以選的
var bb;
bb = { name: "Sam" };
// [propName:string]:any 表示任意屬性都行
var csc;
csc = { name: "Sam", a: 1, b: "南" };
// 箭頭函示方式宣告型別
// 語法: (參數:型別,參數:型別)=>返回值
var fn;
fn = function (n1, n2) {
    return n1 + n2;
};
var fn2 = function (a, b) {
    return a + b;
};
// array 有兩種方式宣告型別
//型別[] 或 Array<型別>
var arr;
arr = ["s", "s"];
var arr2;
arr2 = [1, 2, 3];
// tuple 固定長度類型 多或少都會報錯
var tuple;
tuple = [123, 123, 212];
// enum 枚舉
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
var i;
i = {
    name: "sam",
    gender: gender.male
};
console.log(i.gender === gender.male);

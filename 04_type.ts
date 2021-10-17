// object 表示陣列 不常用
let aa: object;
aa = {};

//{}用來指定陣列可以包含哪些屬性
// ?表示可以選的
let bb: { name: string; age?: number };
bb = { name: "Sam" };

// [propName:string]:any 表示任意屬性都行
let csc: { name: string; [propName: string]: any };
csc = { name: "Sam", a: 1, b: "南" };

// 箭頭函示方式宣告型別
// 語法: (參數:型別,參數:型別)=>返回值
let fn: (a: number, b: number) => number;
fn = (n1: number, n2: number): number => {
  return n1 + n2;
};
const fn2 = (a: number, b: number): number => {
  return a + b;
};

// array 有兩種方式宣告型別
//型別[] 或 Array<型別>
let arr: string[];
arr = ["s", "s"];

let arr2: Array<number>;
arr2 = [1, 2, 3];

// tuple 固定長度類型 多或少都會報錯
let tuple: [number, number];
tuple = [123, 123, 212];

// enum 枚舉

enum Gender {
  male,
  female,
}

let i: { name: string; gender: Gender };
i = {
  name: "sam",
  gender: Gender.male,
};
console.log(i.gender === Gender.male);

// &
let j: { name: string } & { age: number };
j = { name: "sam", age: 55 };

//型別的別名
type myType = 1 | 2 | 3 | 4 | 5;
type obj = { name: string } & { age: number };

const k: myType = 5;

const g: obj = {
  name: "sam",
  age: 66,
};

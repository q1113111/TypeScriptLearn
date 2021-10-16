// 也可以使用值宣告型別 只能用這個值
let num: 10;
num = 10;
num = 11;

// | 或的意思
let sex: "male" | "female";
sex = "male";
sex = "female";

let cc: boolean | string;
cc = true;
cc = "sss";

// any 表示任意類型 盡量不使用
// any 可以給任何型別變數 不會抱錯 
let any: any;
any = 10;
any = "str";
any = true;

let str: string;
str = any;

// unknown 未知 不能賦值給其他人 實際上就是一個安全得any
let e: unknown;
e = 10;
e = "hello";
str = e;

// 若真的要賦值使用typeof as <類別>
let str2: string;
if (typeof e === "string") {
  str2 = e;
}
str2 = e as string;
str2 = <string>e;

// void 用來表示為undefined，表示沒有返回值(空值可以)
function fnVoid():void{
    return true
}

// never 表示沒有返回結果
function fnNenve():never{
    throw new Error('抱錯了')
}
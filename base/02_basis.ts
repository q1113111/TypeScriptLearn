// 宣告一個變數a 同時指定他的類型他的類型為number
// a只能是數字型別
let a:number

a=10
a='hello'  //會報錯 不能傳入字串

let b:string

b='hello'
b=123

// 直接聲明
const c:boolean=true
// 直接給值會自行判斷型別
let d= false
d=true
d=123

// 函式型別 :後面表示 返回值 型別
const sum = (a:number,b:number):number=>{
    return a+b
}
const result = sum(123,'456',789)
<script setup lang="ts">
type myType = {
    name:string,
    age: number
}

const obj: myType = {
  name: 'sam',
  age: 50
}

/**
 * 用接口来定一个class结构，用来包含哪些属性
 * 也可以当成类别宣告去使用
 * 可以重复宣告  eslint会报错
 * 所有方法都是抽象方法
 * 不能给于值
 * class 使用implements 继承
 */
interface myInterface{
    name:string,
    age:number,
}

const obj2:myInterface = {
  name: 'sam',
  age: 10
}

interface myClass{
    name:string,
    sayHello():void
}

class Myclass implements myClass {
    name:string

    constructor (name:string) {
      this.name = name
    }

    sayHello () {
      console.log('hello')
    }
}
</script>

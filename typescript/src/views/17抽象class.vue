<script setup lang="ts">
/**
 * 以abstract开头为抽象类
 * 不能用来new创建对象
 * 抽象是专门用来继承的
 * 可以增加抽象方法
 */
abstract class Aniaml {
    name:string
    age:number

    constructor (name:string, age:number) {
      this.name = name
      this.age = age
    }

    // 须在字类自行定义
   abstract sayhello ():void
}

class Dog extends Aniaml {
  sayhello ():void {
    console.log('汪汪汪')
  }
}
const dog = new Dog('旺財', 5)
dog.sayhello()
</script>

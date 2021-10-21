<script setup lang="ts">
class Aniaml {
    name:string
    age:number

    constructor (name:string, age:number) {
      this.name = name
      this.age = age
    }

    sayhello () {
      console.log('動物在叫')
    }
}

/**
 * Aniaml為父類 Dog為子類
 * 繼承父類所有資訊
 * 子類可以添加其他資訊
 * 子類可以將父類方法重寫
*/
class Dog extends Aniaml {
    sex:boolean

    constructor (name:string, age:number, sex:boolean) {
      // 使用構造函數需要使用super()繼承
      super(name, age)
      this.sex = sex
    }

    run () {
      console.log(this.name + '再跑')
    }

    sayhello (): void {
      console.log('汪汪汪')
      // 引用父類的方法
      super.sayhello()
    }
}
const dog = new Dog('旺財', 5, true)
console.log(dog)
dog.run()
dog.sayhello()
</script>

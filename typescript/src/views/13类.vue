
<script setup lang="ts">
class Person {
    // 定义 实例属性 需要使用new
    name = 'Sam'

    // 使用readolny 只能读取
    readonly age=20

    // 定义方法
    sayHlleo = () => {
      console.log('hello' + this.name)
    }

    // 使用static静态属性 不需要new 直接使用
    static readonly sex = 1

    static sayhello2 = () => {
      console.log('hello2')
    }
}

const per = new Person()
console.log(per)
console.log(Person.sex)
per.sayHlleo()
Person.sayhello2()

</script>

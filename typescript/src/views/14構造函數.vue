<script setup lang="ts">
class Person {
    name:string
    age:number

    constructor (name:string, age:number) {
      this.name = name
      this.age = age
    }

    bark () {
      console.log(this.name)
    }
}
const per = new Person('小白', 4)
const per2 = new Person('大白', 14)
console.log(per)
console.log(per2)
per.bark()
</script>

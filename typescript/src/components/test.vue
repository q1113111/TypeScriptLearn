<template>
  <div class="hello">
    {{ a }}
    {{ test(4, 'ss') }}
  </div>
</template>

<script setup lang="ts">
let a = 0
a = 'sss'
console.log(a)
const test = (a: number, b: number): number => {
  return a + b
}

console.log(test(1, 'ss'))
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

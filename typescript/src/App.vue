<template>
  <div id="nav">
    <router-link to="/13">
      13类
    </router-link> |
    <router-link to="/14">
      14構造函數
    </router-link> |
    <router-link to="/15">
      15繼承
    </router-link> |
    <router-link to="/17">
      17抽象class
    </router-link> |
    <router-link to="/18">
      18接口
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

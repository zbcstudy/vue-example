<template>

<!--  <dev class="home-container">-->
<!--    <el-container class="home-contailer" id="app">-->
<!--      &lt;!&ndash;头部区域&ndash;&gt;-->

<!--      <el-container>-->
<!--        &lt;!&ndash;侧边栏&ndash;&gt;-->
<!--        <el-main>-->
<!--          <router-view></router-view>-->
<!--        </el-main>-->
<!--      </el-container>-->
<!--    </el-container>-->
<!--  </dev>-->
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

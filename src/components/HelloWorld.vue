<template>
  <div class="hello" v-bind:title="msg">
    <h1>{{ msg }}</h1>
    <p v-text="text"></p>
    <p v-html="text"></p>
    三元表达式：{{status ? 'is true': 'is false'}}
    <component-a></component-a>
  </div>
</template>

<script>
import componentA from './componentA'

export default {
  components: {componentA},
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: '<h1>html和text的区别</h1>',
      status: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

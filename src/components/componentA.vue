<template>
    <div>
      {{ msg }}
      <button v-on:click="add">add</button>
    </div>
</template>

<script>
export default {
    name: "componentA",
    data() {
      return {
        msg: 'this is a component with name is a'
      }
    },
    methods:{
      add(){
        alert("aaa")
      }
    }
}
</script>

<style scoped>

</style>

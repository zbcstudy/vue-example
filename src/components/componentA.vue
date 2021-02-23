<template>
    <div>
      {{ msg }}<br>
      <button v-on:click="add">add</button>
    </div>
</template>

<script>
export default {
  name: 'componentA',
  data () {
    return {
      msg: 'this is a component with name is a'
    }
  },
  methods: {
    add () {
      this.msg = this.msg.concat(' add')
    }
  }
}
</script>

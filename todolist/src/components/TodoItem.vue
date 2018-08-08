<template>
    <li @click="listClick($event,index)">{{content}}</li>
</template>

<script>
export default {
  props:['content','index'],//接收父组件传过来的值
  methods:{
    listClick(event,index){
      this.$emit('delete',this.index);//子组件可以使用 $emit 触发父组件的自定义事件。
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

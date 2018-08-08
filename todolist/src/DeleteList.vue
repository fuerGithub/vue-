<template>
  <div><!--模板必须由一个大的div包起-->
      <div>这是DeleteList（vue-cli）练习</div>
        <h4>一、下面是使用vue-cli开发DeleteList</h4>
        <input type="text" v-model="inputVal"/>
        <input type="button" @click="handleSubmit" value="提交"/>
        <ul>
          <todo-item v-for="(item,index) of list" :key="index" :content="item" :index="index" @delete="listClick($event,index)"></todo-item>
        </ul>
    </div>
</template>

<script>
  import TodoItem from './components/TodoItem'//引入todoitem模板
  export default {
    components:{
      'todo-item':TodoItem
    },
    data:function(){
      return {
        inputVal:"",
        list:[]
      }
    },
    methods:{
      handleSubmit(){
        this.list.push(this.inputVal);
        this.inputVal='';
      },
      listClick(event,index){
        //console.log(index)
        //console.log(event.currentTarget);//获取绑定的元素
        //console.log(event.target)//获取选中的元素
        //console.log(event.target.innerText)//获取绑定元素的内容
        this.list.splice(index,1);//删除一个当前索引对应的value
      }
    }
  }
</script>

<style>

</style>


<template>
  <div><!--模板必须由一个大的div包起-->
     <h4>二、下面是使用vue-cli开发Tab切换</h4>
      <p class="tabs">
        <a
          v-for="(tab,index) of tabs"
          :key="index"
          :index="index"
          :class="{cur:index == num}"
          @click="tabClick(index)" href="javascrip:;" class="tab">{{tab}}</a></p>
      <div class="ui-window">
        <ul class="lists">
          <li
            v-for="(list,index) of lists"
            v-show="index == num">{{list}}</li></ul>
      </div>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
          tabs:['模块1','模块2','模块3'],
          lists:['这是模块1','这是模块2','这是模块3'],
          num:0
      }
    },
    methods:{
      tabClick(index){
        this.num = index;//将index索引值赋予num
      }
    }
  }
</script>

<style>
.tabs{
  padding:0;
  margin:0;
}
.tab{
  display:inline-block;
  padding:10px;
  margin-right:10px;
  background:#ff0;
  color:#000;
}
.cur{
  background:#000;
  color:#fff;
}
.ui-window{
  width:200px;
  height:80px;
  border:1px solid #f00;
}
.lists{
  width:600px;
  height:80px;
  padding:0;
  margin:0;
  position:relative;
}
.lists>li{
  width:200px;
  height:100%;
  position:absolute;
}
</style>

<template>
  <div><!--模板必须由一个大的div包起-->
     <h4>三、下面是使用vue-cli开发轮播图</h4>
      <div class="ui-swiper" @mouseover="stop()" @mouseout="play()">
        <div class="ui-wrap">
          <div
            v-for="(item,index) of slides"
            :key="index"
             v-show="index == num" class="ui-slide">{{item}}</div>
        </div>
        <ul class="page">
          <li
            v-for="(item,index) of slides"
            :key="index"
            @click="pageClick(index)"
            :class="{cur:index == num}"></li>
        </ul>
      </div>
  </div>
</template>

<script>
let data=['图片1','图片2','图片3','图片4','图片5','图片6'];
let timer=null;
  export default {
    data:function(){
      return {
        slides:data,
        num:0
      }
    },
    methods:{
      pageClick(index){
        this.num = index
      },
      autoPlay(){
        this.num++;
        if(this.num==this.slides.length){
          this.num = 0;
        }
      },
      play(){
        this.timer = setInterval(this.autoPlay,2500)
      },
      stop(){
        clearInterval(this.timer)
        console.log(this.timer)
      }
    },
    created(){
      this.play()
    }
  }
</script>

<style>
.ui-swiper{
  width:400px;
  height:200px;
  border:1px solid #f00;
  position:relative;
  overflow:hidden;
}
.ui-wrap{
  width:2400px;
  height:200px;
}
.ui-slide{
  width:400px;
  height:200px;
}
.page{
  position:absolute;
  right:10px;
  bottom:0;
}
.page li{
  width:10px;
  height:10px;
  margin-right:10px;
  float:left;
  list-style:none;
  background:#000;
}
.page li.cur{
  background:#f00;
}
</style>

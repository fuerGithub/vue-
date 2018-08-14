// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import DeleteList from './DeleteList'//可重命名 后缀名可带可不带
import Tab from './Tab'//可重命名 后缀名可带可不带
import broad from './broad'//可重命名 后缀名可带可不带
import router from './router'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { DeleteList },//与文件名保持一致
  template: '<DeleteList/>'//与文件名保持一致
})

/*Tab切换demo*/
new Vue({
  el: '#tab',
  components: { Tab },//与文件名保持一致
  template: '<Tab/>'//与文件名保持一致
})

/*轮播图demo*/
new Vue({
  el: '#swiper',
  components: { broad },//与文件名保持一致
  template: '<broad/>'//与文件名保持一致
})

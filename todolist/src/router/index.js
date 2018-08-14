import Vue from 'vue'
import Router from 'vue-router'
import DeleteList from '../components/TodoItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DeleteList',
      component: DeleteList
    }
  ]
})


import Vue from 'vue'
import Router from 'vue-router'

import menuManagerIndex from "@/views/menuManagerIndex";
Vue.use(Router)
const Home = () => import('@/components/Home')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        { path: '' , name:'meneManagerHome' , component:menuManagerIndex}
      ]
    }
  ]
})

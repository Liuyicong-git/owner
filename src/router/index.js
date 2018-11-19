import Vue from 'vue'
import Router from 'vue-router'

import menuManagerIndex from "@/views/menu_manage/index";
import aritcleHome from '@/views/aticle_manage/index'
import Home from '@/views/Home';

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        { path: '' , name:'meneManagerHome' , component:menuManagerIndex},
        { path: '/article/index' , name:'articleHome' , component:aritcleHome }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import MenuManagerIndex from "@/views/menu_manage/index";
import ArticleManage from '@/views/aticle_manage/articleManage'
import ArticleHome from '@/views/aticle_manage/articleHome'
import ArticleDetails from '@/views/aticle_manage/articleDetails'
import Home from '@/views/Home';


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        { path: '' , name:'meneManagerHome' , component:MenuManagerIndex},
        { path: '/article/AritcleWrite' , name:'articleManage' , component:ArticleManage },
        { path: '/article/index' , name:'articleHome' , component:ArticleHome },
        { path: '/article/index/:id' ,  name:'articleDetails' , component:ArticleDetails}
      ]
    }
  ]
})

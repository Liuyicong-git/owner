<template>
  <div class="app-container">
    <el-container>
      <el-aside width="65">
        <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
          <nav-menu :menus="menuList"></nav-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="菜单管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
          <el-tab-pane label="角色管理" name="third"></el-tab-pane>
          <el-tab-pane label="定时任务管理" name="fourth"></el-tab-pane>
        </el-tabs>
        <router-view/>
      </el-main>  
    </el-container>    
  </div>  
</template>

<script>
const menuList = require('../../static/json/permission.json')
import NavMenu from './NavMenu'
export default {
  name: 'Home',
  components:{NavMenu},
  data() {
    return {
       isCollapse:false,
       activeName: 'first',
       menuList:menuList
    };
  },
 
  created(){
    
    //  this.axios.post('/api/add',{
    //   "name":"1",
    //   "title":"test1",
    //   "orderIndex": 1,
    //   "parentId":-1
    // }).then(resp=>{
    //   console.log(resp)
    // })
  },
  methods:{
   
    handleClick(tab, event) {
      console.log(tab, event);
    }
    
  },
  mounted(){
    
  }
};
</script>

<style lang="scss">
  el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

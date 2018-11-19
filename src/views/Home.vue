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
import NavMenu from '@/components/NavMenu'
export default {
  name: 'Home',
  components:{NavMenu},
  data() {
    return {
       isCollapse:false,
       activeName: 'first',
       menuList:[]
    };
  },
 
  created(){
    this.axios.get('/api/menu/all').then(resp=>{
       this.menuList = this.toTreeData(resp.data.obj); 
    })
  },
  methods:{
    toTreeData(target){
      let tree = target.filter( (parent)=>{
        let childArr = target.filter( val =>{
          return val.parentId == parent.id;
        })
        if(childArr.length>0){
          parent.childrens = childArr;
        }
        return parent.parentId ==-1;
      })
      return tree;
    },
    handleClick(tab, event) {
      if(tab.name == 'second'){
        this.$router.push({
          name:'articleHome'
        })
      }
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

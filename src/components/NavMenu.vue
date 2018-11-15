<template>
    <div>
        <div v-for="(item,index) in menus" :key="index">
            <div v-if="item.parentId != -1 ">
                <el-submenu index="1"  >
                    {{item.childrens}}
                    <nav-menu :menus="item.childrens" ></nav-menu>
                </el-submenu>
            </div>   
            <div v-else>
                <el-menu-item index="1"  >
                    <i class="el-icon-setting"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>  
            </div>     
        </div>
    </div>
   

</template>

<script>

export default {
  name: 'navMenu',
  props:['menus'],
  data() {
    return {
       isCollapse: false
    };
  },
 
  created(){
  },
  methods:{
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

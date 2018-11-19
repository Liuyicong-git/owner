<template>
    <div>
        <div v-for="(item,index) in menus" :key="index">
            
            <div v-if="item.childrens && item.childrens.length != 0">
               
                <div>
                    <el-submenu :index="item.id+''"  >
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">{{item.title}}</span>
                        </template>
                        <nav-menu :menus="item.childrens" ></nav-menu>
                    </el-submenu>
                </div>       
                
            </div>   
            <div v-else>
                <el-menu-item :index="item.id+''"  >
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

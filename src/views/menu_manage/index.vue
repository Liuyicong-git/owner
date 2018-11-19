<template>
  <div >
    <div id="menuHomeOption">
         <el-button size="mini"  icon="el-icon-plus" @click="addMenu">新增菜单</el-button>
         <el-button size="mini"  icon="el-icon-delete" @click="deleteMenu">删除菜单</el-button>
    </div>
    <div id="menuHomeContent" style="margin-top:15px;">
        <el-table
          ref="multipleTable"
          :data="menuList"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"/>
            <el-table-column type="index" width="55" label="序号"/>
            <el-table-column prop="title" label="菜单名称" align="center"/>
            <el-table-column prop="parentId" label="父菜单" align="center" />
            <el-table-column prop="name" label="编码" align="center" />
            <el-table-column prop="orderIndex" label="排序" align="center" />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="editMenu(scope.row)">编辑</el-button>
              </template>
            </el-table-column> 
        </el-table>
    </div>  
    <menu-dialog ref="adddialog" @close="closeDialog"></menu-dialog>
  </div>
</template>

<script>
import menuDialog from "./menuDialog"
export default {
  name: 'menuManagerIndex',
  components:{menuDialog},
  data(){
    return {
      menuList:[],
      multipleSelection: [] ,
    }
  },
  created(){
    this.getAllMenus();
  },
  methods:{
    getAllMenus(){
      this.axios.get('/api/menu/all').then(resp =>{
        this.menuList = resp.data.obj;
      })
    },
    addMenu(){
      this.$refs.adddialog.show(null , {method:'post', url: '/api/menu/add'});
    },
    editMenu(row){
      this.$refs.adddialog.show(row , {method:'put', url: '/api/menu/update'} );
    },
    deleteMenu(){
      let idArr = this.multipleSelection.map(val=>val.id);
      idArr = idArr.join(",") 
      this.axios.delete(`/api/menu/delete/${idArr}`).then(resp =>{
        this.$notify({
          title: '消息',
          message: '删除菜单成功',
          type: 'success',
          position: 'top-left'
        });
      })
      this.getAllMenus();
    },
    closeDialog(val){
      this.getAllMenus();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style>
 body{
   margin: 0;
 }
</style>

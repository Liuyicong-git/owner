<template>
  <el-dialog
    title="新增菜单栏"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动区域">
          <el-select v-model="form.parentId" placeholder="请选择上级菜单">
            <el-option label="无上级菜单" value="-1"/>
            <el-option v-for="menu in parentMenuList" :key="menu.id" :label="menu.title" :value="menu.id"/>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单名称">
          <el-input v-model="form.title"/>
        </el-form-item>
        <el-form-item label="序号">
          <el-input v-model="form.orderIndex"/>
        </el-form-item>
        <el-form-item label="编码名称">
          <el-input v-model="form.name"/>
        </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
  name: 'add',
  data(){
    return {
      dialogVisible: false ,
      parentMenuList: [],
      form: {
          parentId: '',
          title: '',
          orderIndex: '',
          name: '',
      },
      requestInfo: ''
    }
  },
  created(){
    this.getAllMenuList();
  },
  methods:{
    getAllMenuList(){
      this.axios.get('/api/menu/all').then(resp =>{
        this.parentMenuList = resp.data.obj;

      })
    },

    show(entity , requestInfo){
      this.form =  !entity ? this.form : entity;
      this.requestInfo = requestInfo;
      this.getAllMenuList();
      this.dialogVisible = true;
    },
    submit(){
      let config = {...this.requestInfo , data: {...this.form}}
      this.axios.request(config).then(resp =>{
        this.$notify({
          title: '消息',
          message: this.requestInfo.methods =='post' ?'新增菜单成功' :'编辑菜单成功',
          type: 'success',
          position: 'top-left'
        });
        this.dialogVisible = false;
        this.$emit("close", this.form);
      })
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}
</script>

<style>
 body{
   margin: 0;
 }
</style>

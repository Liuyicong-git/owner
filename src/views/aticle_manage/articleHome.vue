<template>
  <div>
    <el-table
      :data="articleList"
      style="width: 100%">
      <el-table-column
       type="index"
        label="序号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
      >
        <template slot-scope="scope">
              <router-link :to="'/article/index/'+ scope.row.id"> {{scope.row.title}} </router-link>

          </template>
      </el-table-column>

      <el-table-column
        prop="username"
        label="作者"/>
      <el-table-column label="日期">  
          <template slot-scope="scope">
              忘记写日期了下次补上
          </template>
      </el-table-column>  
    </el-table>
  
  </div>
</template>

<script>
export default {
  name: 'articleHome',
  data(){
    return {
      articleList:[]
    }
  },
  created(){
    this.axios.get('/api/article/all').then(resp=>{
      this.articleList = resp.data.obj;
    })
  }
}
</script>

<style>
  .itemIndex{
    width: 50px;
    height: 30px;
    line-height: 30px;
    float: left;
  }
  .articleContent{
    width: 60%;
    float: left;
    height: 30px;
    line-height: 30px;
  }
  .aritcleUser {
    width: 10%;
    float: left;
    height: 30px;
    line-height: 30px;
  }
  .aritcleDate{
    width: 10%;
    float: left;
    height: 30px;
    line-height: 30px;
  }
</style>

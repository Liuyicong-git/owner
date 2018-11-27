<template>
  <div>
    <h3>{{article.title}}</h3>
    <h4>作者:{{article.username}}</h4>
    <div class="articleContent" v-html="article.content"></div>
        
    <div style="float:right;margin-top:15px;"><el-button type="primary" @click="back">返回</el-button></div>
  </div>
</template>

<script>
export default {
  name: 'articleDetails',
  data(){
    return {
      article:{}
    }
  },
  created(){
    this.axios.get(`/api/article/${this.$route.params.id }`).then(resp=>{
      this.article = resp.data.obj;
    })
  },
  methods:{
    back(){
      this.$router.push( {name: 'articleHome'})
    }
  }
}
</script>

<style scoped>
  .articleContent{
     height: 50vh;
     width: 100%;
     border: 1px solid #5e5e5e;
     box-shadow: 2px 2px 2px #5e5e5e;
  }
</style>

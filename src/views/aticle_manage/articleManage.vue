<template>
  <div >
    <el-form ref="form" :model="form" label-width="130px">
      <el-form-item label="标题">
          <el-input v-model="form.title" class="menuInput"/>
      </el-form-item>
      <el-form-item label="内容">
        <quill-editor  ref="myQuillEditor" :content="form.content"
                    style="height: 70vh; margin-bottom: 54px"
                    :options="editorOption"
                    @change="onEditorChange($event)">
        </quill-editor> 
      </el-form-item>  
      <form action="" method="post" enctype="multipart/form-data" id="uploadFormMulti">
            <input style="display: none" id="quillForm" type="file" name="file_data"
            multiple accept="image/jpg,image/jpeg,image/png,image/gif"
              @change="uploadImg('uploadFormMulti')" /><!--style="display: none"-->
      </form>
      <div style="float:right;">
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button> 取消</el-button>
      </div>  
    </el-form>  
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import toolbarOptions from "../../../static/json/quillEditOptions"
import { quillEditor } from 'vue-quill-editor'
import Quill from 'quill'
// import { ImageResize } from '../modules/ImageResize.js'
// Quill.register('modules/imageResize', ImageResize)
export default {
  name: 'index',
  components: {
    quillEditor
  },
  data () {
    return {
      
      editorOption: {},
      form:{
        title:'' , 
        content: '',
        username:'liuyicong'
      }
    }
  },
  mounted(){
    let vm = this;
    let imgHandle = async function (image) {
      vm.addImgRang = vm.$refs.myQuillEditor.quill.getSelection();
      if(image){
        var fileInput = document.getElementById('quillForm');
        fileInput.click();
      }
    }
    this.$refs.myQuillEditor.quill.getModule("toolbar").addHandler("image", imgHandle);
  },
  methods: {
      // onEditorBlur(quill) {
      //   console.log('editor blur!', quill)
      // },
      // onEditorFocus(quill) {
      //   console.log('editor focus!', quill)
      // },
      // onEditorReady(quill) {
      //   console.log('editor ready!', quill)
      // },
      onEditorChange({ quill, html, text }) {
        // console.log('editor change!', quill, html, text)
        this.form.content = html
      },
      async uploadImg(){
        var vm = this
        vm.imageLoading = true
        var formData = new FormData( document.getElementById('uploadFormMulti'));
        const url = await vm.uploadImgReq(formData)
        
      },
      uploadImgReq(formData){
         let vm = this;
         this.axios.post('/api/file/upload',formData).then(resp=>{
           let url = resp.data.obj;   
           if (url != null && url.length > 0) {
            var value = url
            vm.addImgRange = vm.$refs.myQuillEditor.quill.getSelection()
            value = value.indexOf('http') != -1 ? value : 'http:' + value
            vm.$refs.myQuillEditor.quill.insertEmbed(vm.addImgRange != null?vm.addImgRange.index:0, 'image', value, Quill.sources.USER)
          } else {
            vm.$message.warning("图片增加失败")
          }
          document.getElementById('uploadFormMulti').value=''
            
         })
      },
      submit(){
        this.axios.post('/api/article/add',this.form).then(resp=>{
          console.log(resp)
        })
      }

  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },

}
</script>

<style>
 body{
   margin: 0;
 }
</style>

<template>
  <div >
    <quill-editor  ref="myQuillEditor" :content="content"
                style="height: 200px; margin-bottom: 54px"
                :options="editorOption"
                @change="onEditorChange($event)">
    </quill-editor> 
    <form action="" method="post" enctype="multipart/form-data" id="uploadFormMulti">
          <input style="display: none" id="quillForm" type="file" name="avator"
           multiple accept="image/jpg,image/jpeg,image/png,image/gif"
            @change="uploadImg('uploadFormMulti')" /><!--style="display: none"-->
    </form>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import toolbarOptions from "../../../static/json/quillEditOptions"
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'index',
  components: {
    quillEditor
  },
  data () {
    return {
      content: '<h2>I am Example</h2>',
      editorOption: {
        
      }
    }
  },
  mounted(){
    let vm = this;
    let imgHandle = async function (image) {
      debugger;
      console.log(this);
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
        console.log('editor change!', quill, html, text)
        this.content = html
      },
      uploadImg(){
        alert(1)
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

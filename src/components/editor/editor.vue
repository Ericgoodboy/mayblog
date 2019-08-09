<template>
  <div>
    <div class="title">
      <input placeholder="输入标题" v-model="title" type="text" />
    </div>

    <div @keydown="handleKeydown()" ref="editor" style="text-align:left"></div>
    <div class="form">
      <div class="select">
        <select :v-model="d_type" name="类别">
          <option v-for="(k,v) in mapDtype" :value="k" :key="k.id">
            {{ v }}
          </option>
          <!-- <option value="5">随笔</option> -->
        </select>
      </div>

      <textarea id="hidden" name="content" v-model="editorContent" cols="30" rows="10"></textarea>
      <button @click="save()">保存</button>
      <button @click="submit()">提交</button>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
import axios from "axios";
export default {
  name: "editor",
  data() {
    return {
      editorContent: "",
      txt: "",
      title: "母猪的产后护理",
      d_type: 1,
      id: "",
      mapDtype:{
        1:"前端",
        2:"后端",
        3:2,
        4:3
      }
    };
  },
  methods: {
    getContent: function() {
      window.console.log(this.editorContent);
    },
    getCode() {
      axios({
        method: "post",
        url: "/editor/save",
        data: {
          title: this.title,
          d_type: this.d_type,
          editorContent: this.editorContent,
          user: "mayeye"
        }
      }).then(function(res) {
        window.console.log(res);
        alert("saved");
      });
    },
    save() {
      axios({
        method: "post",
        url: "/editor/save",
        data: {
          title: this.title,
          d_type: this.d_type,
          editorContent: this.editorContent,
          user: "mayeye"
        }
      }).then(function(res) {
        window.console.log(res);
        alert("saved");
      });
    },
    submit() {
      this.save();
      this.$router.push("/");
    },
    handleKeydown() {
      let key = window.event.keyCode;
      if (key == 83 && event.ctrlKey) {
        //== 83 && event.ctrlKey
        window.event.preventDefault(); //关闭浏览器快捷键
        this.save();
      }
    }
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片
    editor.create();
  }
};
</script>

<style scoped>
#hidden {
  display: none;
}
.form {
  margin-top: 30px;
  float: right;
  margin-right: 50px;
}
.form button {
  margin-left: 12px;
  margin-top: 10px;
}
.select {
  display: inline-block;
  width: 300px;
  position: relative;
  vertical-align: middle;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  color: #555;
  border: 1px solid #aaa;
  text-shadow: none;
  border-radius: 4px;
  transition: box-shadow 0.25s ease;
  z-index: 2;
}
.select:hover {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.select:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #ccc;
  top: 14px;
  right: 10px;
  cursor: pointer;
  z-index: -2;
}
.select select {
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  background: transparent;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.select select:focus {
  outline: none;
}

button {
  /* 按钮美化 */
  width: 270px; /* 宽度 */
  height: 40px; /* 高度 */
  border-width: 0px; /* 边框宽度 */
  border-radius: 3px; /* 边框半径 */
  background: #1e90ff; /* 背景颜色 */
  cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
  outline: none; /* 不显示轮廓线 */
  font-family: Microsoft YaHei; /* 设置字体 */
  color: white; /* 字体颜色 */
  font-size: 17px; /* 字体大小 */
}
button:hover {
  /* 鼠标移入按钮范围时改变颜色 */
  background: #5599ff;
}

.title {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  position: relative;
}
.title input {
  width: 100%;
  height: 40px;
  display: block;
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.title:before {
  content: "";
  width: 100px;
  position: absolute;
  left: 50%;
  top: 100%;
  height: 5px;
  background: #1e90ff;
  z-index: inherit;
  transform: translate(-50%, 0);
  transition: 1.5s;
}
.title:hover::before {
  width: 80%;
  height: 1px;
}
</style>
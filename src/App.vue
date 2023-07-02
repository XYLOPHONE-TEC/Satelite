<template>
  <div>
   <Nav/>
  </div>
   <div class="main">
      <Desc/>
      <Select/>
      <Spec/>
      <Code/>
      <Exp/>
      <Editor/>
      <Pre/>
   </div>
   

</template>

<script>
import Nav from './components/navigation.vue'
import Desc from './components/Description.vue'
import Select from  './components/Select.vue'
import Spec from './components/Specific.vue'
import Code from './components/code.vue'
import Exp from './components/explained.vue'
import Editor from './components/editor.vue'
import Pre from './components/Preview.vue'

export default {
  name: "App",
  components:{
    Nav,
    Desc,
    Select,
    Spec,
    Code,
    Exp,
    Pre,
    Editor,

  },
  data() {
    return {
      ispromoted:true,
      num:13
    };
  },
  methods:{
    
  }
};
</script>

<style>
body{
  margin:0;
  padding:0;
  height: 100%;
}
@font-face {
  font-family: "Fira Code";
  src: url("../public/fonts/Fira_Code/FiraCode-VariableFont_wght.ttf")
    format("truetype");
  
}
.main{
  background-image: url('../public/fonts/images/background.jpg');
  background-position: center center;
  background-size: cover;
  background-attachment: static;
  background-repeat: none;
  margin-top:20px;
  height: 92vh;
  width: 100vw;
  position: fixed;
  bottom: 0;

}

#app {
  font-family: Fira Code, monospace;
}

</style>

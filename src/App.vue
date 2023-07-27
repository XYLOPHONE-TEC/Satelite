<template :class="flex">
  <div>
   <Nav/>
  </div>
   <div class="main">
      <Desc/>
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
  
@font-face {
  font-family: "Fira Code";
  src: url("../public/fonts/Fira_Code/FiraCode-VariableFont_wght.ttf")
    format("truetype");
  
}
.flex{
  display:flex;
  flex-direction: column;
}

#app {
  font-family: Fira Code, monospace;
}

</style>

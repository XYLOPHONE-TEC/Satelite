<template>
   <Nav/>
   <div class="main">
      <Desc/>
      <Select/>
      <Spec/>
      <Code/>
      <Exp/>
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
.promoted{
  color:rgb(34, 35, 94);
  text-align: center;
}
.new{
  font-size: 150px;
  font-style: italic;
  
}

#app {
  font-family: Fira Code, monospace;
}

</style>

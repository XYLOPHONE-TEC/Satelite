<template>
   <Nav />
   <Desc />
   <Select />
</template>

<script>

import Desc from './components/Description.vue'
import Nav from './components/Navigation.vue'
import Select from  './components/Select.vue'

export default {
  name: "App",
  components:{
    Nav,
    Desc,
    Select,
    
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

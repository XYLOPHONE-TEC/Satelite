<template>
  <h1 @click="num=5" v-bind:class="ispromoted && ['promoted','new']" v-show="num===13" > promoted</h1>
  <h1 @click="num=13" v-bind:class="ispromoted && ['promoted','new']" v-show="num==5" > click me</h1>
  
</template>

<script>
export default {
  name: "App",
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

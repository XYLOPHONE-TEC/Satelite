<template>
  <h1 v-bind:class="ispromoted && ['promoted','new']" v-if="num===13"> promoted</h1>
  
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
  color:rgb(0, 255, 64);
  text-align: center;
}
.new{
  font-size: 150px;
  font-style: italic;
  
}
.not{
  color:rgb(51, 153, 76)
}
#app {
  font-family: Fira Code, monospace;
}

</style>

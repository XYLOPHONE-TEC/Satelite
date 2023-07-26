<template>
    <div class="select">
        <div class="intro">
            <p>Let's create a :</p>
        </div>
        <div class="input">
        <input v-model="selected" type="text" placeholder="select or type" class="choice-inputs">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" id="select-droper"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg>
        </div>
   </div>
</template>

<script>
    export default {
        name:"Select-C",
        data(){
            return{
                selected:""
            }
        },
        methods: {
            
        },
    }
</script>

<style  scoped>
.select{
    margin-bottom: 20px;
}
.intro{
    background: black;
    color: white;
    width:170px;
    height: 40px;
    margin: auto;
    text-align: left;
    position: relative;
    z-index: 1;
}
.input{
    display: grid;
    grid-template-columns: auto  10%;
    grid-gap:5px;
    justify-content: center;
    position: relative;
    top:-10px;
    z-index: 2;
}
.choice-inputs{
   height: 30px; 
   border: rgb(187, 180, 180) 2px solid;
   border-radius: 5px;
}
.choice-inputs[type='text']{
    background: transparent;
    backdrop-filter: blur(15px);
    color: #06f79b;  
    padding:  0 7px; 
}
::-webkit-input-placeholder { /* Edge */
    color: #06f79b;  
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #06f79b; 
}

::placeholder {
   
    color: #06f79b; 
}


#select-droper{
    color:white;
    border: white 1px solid;
    border-radius: 50%;
    backdrop-filter: blur(1px);
    margin: 6px auto;
}
</style>
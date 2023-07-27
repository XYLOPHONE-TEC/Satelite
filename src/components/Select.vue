<template>
    <div class="select">
        <div class="intro">
            <p>Let's create a :</p>
        </div>
        <div class="input">
        <input v-model="selected" type="text" placeholder="select or type" class="choice-inputs">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" id="select-droper" @click="optionfunc()"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg>
        </div>
        <template v-if="mention">
        <div class="options" id="optionsdiv" >
            <p id="0" class="option">option1</p>
            <p id="1" class="option">option1</p>
            <p id="2" class="option">option1</p>
            <p id="3" class="option">option1</p>
            <p id="4" class="option">option1</p>
            <p id="5" class="option">option1</p>
            <p id="6" class="option">option1</p>
            <p id="7" class="option">option1</p>
            <p id="8" class="option">option1</p>
        </div>
        </template>
   </div>
</template>

<script>
    export default {
        name:"Select-C",
        data(){
            return{
                mention:false
            }
        },
        methods: {
            optionfunc() {
                if (this.mention === true) {
                    this.mention=false;
                } else {
                    this.mention=true;
                }
                } 
        },
    }
</script>

<style  scoped>
.select{
    margin-bottom: 20px;
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
    background: #040344;
    border-radius: 50%;
    backdrop-filter: blur(1px);
    margin:auto;
    width: 20px;
    
}


</style>
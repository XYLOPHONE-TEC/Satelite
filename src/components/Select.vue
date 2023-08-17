<template>
    <div class="select">
        <div class="intro">
            <p>Let's create a :</p>
        </div>
        <div class="input">
        <input  type="text" placeholder="select or type" class="choice-inputs" id="choice-inputs" v-model="inputs" @input="QueryResult(inputs)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" id="select-droper" @click="optionfunc()" @input="QueryResult(inputs)"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg>
        </div>
        <template v-if="mention">
        <div class="options" id="optionsdiv" >
            <p v-for="resultitem in resultList" :key="resultitem.id" @click="Clicked(resultitem.name,resultitem.explaination,resultitem.code)" class="option">{{ resultitem.name }}</p>
        </div>
        </template>
   </div>
   
</template>

<script>
    import userData from '../assets/user.json';
    import {generate} from '../../public/js/generate'
    
    export default {
        name:"Select-C",
        data(){
            return{
                mention:false,
                inputs: "",
                resultList: [],
            }
        },
        methods: {
            // diplayfuntion
            optionfunc() {
                if (this.mention === true) {
                    this.mention=false;
                    this.resultList=[]
                } else {
                    this.mention=true;
                    this.resultList=userData.filter(items =>items.name)
                }
                } ,
                

                // object querying
             QueryResult(query) {
                //set the veiwlis to false
               
                let trimmedQuery = query.trim();
                this.mention=true
                if (trimmedQuery === "") {
                    this.mention=false
                    this.resultList = [];
                    return;
                }
                this.resultList = userData.filter(algo =>
                query.split(" ").some(word => algo.name.toLowerCase().includes(word.toLowerCase())));
                
            },


        //    code display
            Clicked(gottenname,gottenExp,gottencode){
                  this.mention=false
                  generate(gottenname,gottenExp,gottencode)
        
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
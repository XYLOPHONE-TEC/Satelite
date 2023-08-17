<template>
    <div class="start">
        <div class="heading">
            <h1>Markdown Explorer</h1>
        </div>
        <div class="instruction">
               <p>Select from a list of items below to generate the code snippet</p>
        </div> 
        <Select></Select>
    </div>
   
</template>

<script>
import Select from './Select.vue'
    export default {
       
        name:"Desc-C",
        components:{
            Select,
        },
        data(){
            return{
                message:"desciption"
            }
        },methods:{

        }
    }
</script>

<style  scoped>
.start{
    text-align: center;
    margin-top: 20px;
}
 .heading{
    background-image: linear-gradient(to right,#0000, #0000, #3533cd);
    backdrop-filter: blur(15px);
    color:white;
    border-radius: 10px;
    z-index: 1;
    position: relative;
}

.instruction{
    width: 65%;
    background:#1f4675;
    color:white;
    z-index: 2;
    box-shadow:  0 0 10px  #0d798f, 0 0 30px  #0d798f, 0 0 40px #0d798f;
    border-radius: 10px;
}

</style>
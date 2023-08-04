<template>
    <div>
       <form action="" method="get">
        <input type="search" v-model="inputs"  @input="QueryResult(this.inputs)" placeholder="search..." />
        <ul id="result-list"   class="result">
        <li>{{ result }}</li>
       </ul>
       </form>
    </div>
</template>

<script>
import userData from '../assets/user.json'
    export default {
        name:'Pre-C',
        data(){
            return{
                inputs:"",
                result:null,
                Id:null

            }
        },
        methods:{

QueryResult(query) {


    let resultList = document.querySelector(".result");
    this.results= null;
    let trimmedQuery = query.trim();
    if (trimmedQuery === "") {
        // Input is empty
        resultList.innerHTML = ""; 
        return;
    }
    let matchedAlgorithms = userData
        .filter(algo => query.split(" ").some(word => algo.name.toLowerCase().includes(word.toLowerCase())));

    matchedAlgorithms.forEach(algoObj => {
        this.results =algoObj.name;
        this.Id= userData.Id
    });

}
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div class="explaination">
            <div class="exp-heading">
                <p id="exp-heading">Explaination</p>
            </div>
            <div class="exp-content">
                <p id="exp-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam possimus voluptatibus minima distinctio dolore corporis quis sapiente fugiat ipsum.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Exp-C',
        data(){
            return{
                message:'Explained',
                html:"<h1>hello</h1>"

            }
        }
    }
</script>   

<style scoped>
.explaination{
    background:#040f1b;
    margin: 20px auto;
    color: #ffff;
}
.exp-heading{
    background: #1f4675;
}

</style>
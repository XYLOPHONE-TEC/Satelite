<template>
    <div class="nav">
      <ul>
        <li class="logo">
             <img src="../../public/fonts/images/md-removebg-preview.png"  alt=".md"> 
        </li>
      </ul> 
    </div>
        
</template>

<script>
    export default {
        name :"Nav-C",
        data(){
            return{
                
            }
        },
        methods:{

        }
        
    }
</script>

<style scoped>

.nav{
    background-color: #1a0e60;
    margin:0;
    height: 7vh;
}
ul{
    display: flex;
    flex-direction: row;
    height: 5vh;
    margin:0;
    padding:0
}
img{
    width:12%;
    height:6%;
    padding:0;
    position: fixed;
    top:0;
    bottom:0;
    left:0
}
li{
    list-style-type: none;
    text-decoration-color: none;
}
@media only screen and (min-width:1551px){

}

@media only screen and (min-width: 1440)  and ( max-width: 1550px){

}
@media only screen and (min-width:720px ) and (max-width: 1024px){
    img{
    width:70px;
    height:50px;
    padding:0;
    position: fixed;
    top:0;
    bottom:0;
    left:0
}
.nav{
    background-color:green;
    margin:0;
    height: 7vh;
}
    
}
@media only screen and (max-width: 414px)  and (min-width:320px) {
    img{
    width:20%;
    height:6%;
    padding:0;
    position: fixed;
    top:0;
    bottom:0;
    left:0
}
}
</style>
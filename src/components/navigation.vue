<template>
    <div class="nav">
      <ul>
        <li class="logo">
             <img src="../../public/fonts/images/md-removebg-preview.png"  alt=".md">
        </li>
        <div class="dropdowm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
        </div>
      </ul> 
    </div>
        
</template>

<script>
    export default {
        name :"Nav-C",
        data(){
            return{
                drop:false
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
    height: 70px;

}
ul{
    display: flex;
    flex-direction: row;
    height: 5vh;
    margin:auto;
    padding:2px;
    justify-content: space-between;
    height:auto;
}
img{
    width: 50px;
    height: 30px;
    padding:5px;
}
li{
    list-style-type: none;
    text-decoration-color: none;
}
svg{
    width: 35px;
    height:40px;
    padding:auto;
}
@media only screen and (min-width:1551px){
   
}
@media only screen and (min-width: 1025px)  and ( max-width: 1555px){
 
    img{
    width:100px;
    height:50px;
    padding:0;
    }
  .nav{
    height: 10%;
    z-index: 1;
  }
  ul{
    padding: 5px;
  }
  svg{
    width: 40px;
    height:40px;
  }
    
}

@media only screen and (min-width: 721)  and ( max-width: 1024px){
    img{
    width:75px;
    height:55px;
    padding:0;
}



}
@media only screen and (min-width:415px ) and (max-width: 720px){
    img{
    width:70px;
    height:50px;
    padding:0;

}

    
}

</style>
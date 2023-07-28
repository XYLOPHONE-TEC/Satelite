<template>
    
     <div class="code">
      <div class="code-handler">
        <div class="code-title">
      <div class="code-tag">
        <p id="cod">Code</p>
        </div>
       <div class="code-icons">
        <template v-if="copied">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" ><path d="M294-242 70-466l43-43 181 181 43 43-43 43Zm170 0L240-466l43-43 181 181 384-384 43 43-427 427Zm0-170-43-43 257-257 43 43-257 257Z"/></svg>
        </template>
        <template v-else >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" id="copy"><path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z"/></svg>
        </template>
      </div> 
      </div>
      <div class="span">
        <span id="gen-cod"></span><span id="blinker"> &#x258F;</span>
      </div>
      </div>
      <Exp/>
   </div>
</template>

<script>
import Exp from './explained.vue'
    export default {
      name:'Code-C',
      components:{
        Exp,
      },
      data(){
        return{
            copied:false
        }
      },
      methods:{
        
      }  
    }
</script>

<style scoped>
svg{
  width: 25px;
  height: 25px;
  fill: #fff;
  background: #020a16;
  border-radius: 50%;
  padding: 5px;
}
#cod{
  padding: 5px;
  margin: 0;
}
.code-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.code-tag{
  background:#1f4675;
  padding: 5px;
  border-radius: 5px;
  color: #fff;
} 
#gen-cod{
  color: #fff;
  padding: 5px;
  border-radius: 5px;
}
#blinker{
  color:#0d8f59;
  font-size: 20px;
  animation: blinker .7s linear infinite;
  padding: 0 5px;
}
@keyframes blinker {
  100% {
    opacity: 0;
  }
}

</style>
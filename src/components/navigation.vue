<template>
    <div class="nav" >
      <ul>
        <li class="logo">
            <svg id="logo" viewBox="0 0 100 70"  fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="70" rx="20" fill="url(#paint0_linear_0_1)"/>
            <path d="M20.5114 45.2273C19.8106 45.2273 19.2093 44.9763 18.7074 44.4744C18.2055 43.9725 17.9545 43.3712 17.9545 42.6705C17.9545 41.9697 18.2055 41.3684 18.7074 40.8665C19.2093 40.3646 19.8106 40.1136 20.5114 40.1136C21.2121 40.1136 21.8134 40.3646 22.3153 40.8665C22.8172 41.3684 23.0682 41.9697 23.0682 42.6705C23.0682 43.1345 22.9498 43.5606 22.7131 43.9489C22.4858 44.3371 22.178 44.6496 21.7898 44.8864C21.411 45.1136 20.9848 45.2273 20.5114 45.2273ZM29.0838 45V23.1818H32.3224V26.5909H32.6065C33.0611 25.4261 33.795 24.5218 34.8082 23.8778C35.8215 23.2244 37.0384 22.8977 38.4588 22.8977C39.8982 22.8977 41.0961 23.2244 42.0526 23.8778C43.0185 24.5218 43.7713 25.4261 44.3111 26.5909H44.5384C45.0971 25.464 45.9351 24.5691 47.0526 23.9062C48.17 23.2339 49.5099 22.8977 51.0724 22.8977C53.0232 22.8977 54.6188 23.5085 55.8594 24.7301C57.0999 25.9422 57.7202 27.8314 57.7202 30.3977V45H54.3679V30.3977C54.3679 28.7879 53.9276 27.6373 53.0469 26.946C52.1662 26.2547 51.1293 25.9091 49.9361 25.9091C48.402 25.9091 47.2135 26.3731 46.3707 27.3011C45.5279 28.2197 45.1065 29.3845 45.1065 30.7955V45H41.6974V30.0568C41.6974 28.8163 41.295 27.8172 40.4901 27.0597C39.6851 26.2926 38.6482 25.9091 37.3793 25.9091C36.508 25.9091 35.6937 26.1411 34.9361 26.6051C34.188 27.0691 33.5819 27.7131 33.1179 28.5369C32.6634 29.3513 32.4361 30.2936 32.4361 31.3636V45H29.0838ZM72.0881 45.4545C70.2699 45.4545 68.6648 44.9953 67.2727 44.0767C65.8807 43.1487 64.7917 41.8419 64.0057 40.1562C63.2197 38.4612 62.8267 36.4583 62.8267 34.1477C62.8267 31.8561 63.2197 29.8674 64.0057 28.1818C64.7917 26.4962 65.8854 25.1941 67.2869 24.2756C68.6884 23.357 70.3078 22.8977 72.1449 22.8977C73.5653 22.8977 74.6875 23.1345 75.5114 23.608C76.3447 24.072 76.9792 24.6023 77.4148 25.1989C77.8598 25.786 78.2055 26.2689 78.4517 26.6477H78.7358V15.9091H82.0881V45H78.8494V41.6477H78.4517C78.2055 42.0455 77.8551 42.5473 77.4006 43.1534C76.946 43.75 76.2973 44.285 75.4545 44.7585C74.6117 45.2225 73.4896 45.4545 72.0881 45.4545ZM72.5426 42.4432C73.8873 42.4432 75.0237 42.0928 75.9517 41.392C76.8797 40.6818 77.5852 39.7017 78.0682 38.4517C78.5511 37.1922 78.7926 35.7386 78.7926 34.0909C78.7926 32.4621 78.5559 31.0369 78.0824 29.8153C77.6089 28.5843 76.9081 27.6278 75.9801 26.946C75.0521 26.2547 73.9063 25.9091 72.5426 25.9091C71.1222 25.9091 69.9384 26.2737 68.9915 27.0028C68.054 27.7225 67.3485 28.7027 66.875 29.9432C66.411 31.1742 66.179 32.5568 66.179 34.0909C66.179 35.6439 66.4157 37.0549 66.8892 38.3239C67.3722 39.5833 68.0824 40.5871 69.0199 41.3352C69.9669 42.0739 71.1411 42.4432 72.5426 42.4432Z" fill="black"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="0" y1="35.2023" x2="100" y2="35.2023" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFF7AD"/>
            <stop offset="1" stop-color="#FFA9F9"/>
            </linearGradient>
            </defs>
            </svg>
        </li>
        <div class="dropdown">
            <div class="dropdownicons" id="dropicons" >
                 <svg title="speed" @click="speed()" xmlns="http://www.w3.org/2000/svg" class="icons" fill ="currentColor" viewBox="0 -960 960 960" ><path d="M63-537 0-600q93-95 218-147.5T480-800q24 0 54 1.5t62 5.5l-42 86q-18-2-36-2.5t-38-.5q-119 0-225.5 46T63-537Zm123 118-63-63q69-67 165.5-102T508-611l-39 81q-77-2-154.5 29T186-419Zm258 255q-27-11-39.5-41t1.5-59l237-490q3-7 10.5-10t15.5-1q8 2 13 9t3 15L547-206q-8 32-41 42.5t-62-.5Zm330-255q-16-17-44.5-37T681-485l21-86q35 12 73 38.5t62 50.5l-63 63Zm123-118q-39-38-85-69t-88-50l22-90q65 27 116 63.5t98 82.5l-63 63Z"/></svg>
                 <svg @click="mode()" xmlns="http://www.w3.org/2000/svg"  class="icons"  fill ="currentColor" viewBox="0 -960 960 960" ><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.667 16.5Q688.667-384 660-384q-114.689 0-195.345-80.655Q384-545.311 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 87.5 212.5T480-180Zm-4-297Z"/></svg>
               
                <svg @click="others()" xmlns="http://www.w3.org/2000/svg"  class="icons" fill=" currentColor" viewBox="0 -960 960 960" ><path d="M149.825-280Q137-280 128.5-288.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137-450 128.5-458.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137-620 128.5-628.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5ZM290-280v-60h550v60H290Zm0-170v-60h550v60H290Zm0-170v-60h550v60H290Z"/></svg>
            </div>
            <svg @click="dropdownfunc()" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 -960 960 960" id="droper"><path  d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
        </div>
      </ul> 
    </div>
    <hr>
    <template v-if="alert">
        <div class="alert">
        <ol>
           <li class="lists" id="alerttitle">Built by</li>
           <li class="lists"><a :href="urlkalungi">Kalungi Rasuli</a></li>
           <li class="lists"><a :href="urlxylophone">Xylophone-tec</a></li>
           <li class="lists"> <a :href="twitter">Twitter</a></li>
           <li class="lists"> <a :href="refactory">Academy</a></li>
           <!-- <li class="lists"><a href="#">Donate</a></li> -->
        </ol>
     <button class="close" @click="close()" >CLOSE</button>
   </div>  
    </template>
</template>

<script>
import {speedchar} from '../../public/js/generate'
    export default {
        name :"Nav-C",
        data(){
            return{
                drop:false,
                alert:false,
                urlxylophone:'https://github.com/XYLOPHONE-TEC/Markdown',
                urlkalungi:'https://github.com/kalungirasuli',
                twitter:'https://twitter.com/KalungiRasuli',
                refactory:'https://www.refactory.ug/',
                message:'By Clicking the speed icon '
             
            }
        },
       
        methods:{
           
            dropdownfunc() {
                var x = document.getElementById("dropicons");
                if (x.className === "dropdownicons") {
                    x.className += " responsive";
                } else {
                     x.className = "dropdownicons";
                 }
                } ,
                speed(){
                    speedchar()
                },
                others(){
                    if(!this.alert){
                        this.alert=true
                        let main = document.querySelector('.main');
                        main.classList.add('disabled-main');
                    }
                },
                close(){
                    if(this.alert){
                        this.alert=false
                        let main = document.querySelector('.main');
                        main.classList.remove('disabled-main');
                    }
                },
                mode(){
                    alert("Still in development")
                },

        }
        
    }
</script>

<style scoped>

.nav{
    background-color: #1a0e60;
    margin:0;
    height: 40px;

}
ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 2px 5px;
}

li{
    list-style-type: none;
    text-decoration-color: none;
}
svg{
    width: 30px;
    height:30px;
    padding:0 20px;
    color:#ffff
}
#logo{
    width: 40px;
    height:35px;
    padding: 0;
    
}
hr{
    margin:0;
    height:3px;
    background-color:#ffffff;
}
p{
    padding:10px 0;
    color: #ffff;

}
.dropdown{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
   
} 
#droper{
    display: none;
}




    /* media queries for tablets */
@media screen and (max-width: 768px) {
    .dropdownicons{
        display: none;
    }
    #droper{
        display: block;
    }
    .dropdownicons.responsive {
        display: flex;
        flex-direction: column;
        position:absolute;
        top :45px;
        right:0;
        background-image: linear-gradient(to right, #ff5757,#8c52ff);
        width:50px;
        border-radius: 10px;
        align-items: center;
        justify-content: space-between; 
        z-index:3; 
    }
   .dropdownicons.responsive .icons{
    background-color:#040344;
    border-radius: 50%;
    padding:5px;
    margin:5px

   }

  }

</style>
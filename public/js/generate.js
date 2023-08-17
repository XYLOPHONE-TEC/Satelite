let deteminedspeed = true
let i=100
 export function speedchar(){
    if(deteminedspeed){
    i-=20
    deteminedspeed=false
    alert("Hi there, by clicking the speed icon you have set the character generation speed to 0ms")
    }else{
    i=20
    deteminedspeed=true
    alert("Hi there, by clicking the speed icon you have set the character generation speed to 20ms")
   }
 }

export function generate(gotname,gottexplain,gotcode){
    let textposition = 0;
    let charterposition=0
    let speed = i;
        function getcode(arrays,explaination,code) {
            let message = arrays;
            let details=explaination
            let snippet=code
            document.querySelector('#choice-inputs').value= message
            document.querySelector('#gen-cod').innerHTML = snippet.substring(0, textposition);
            document.querySelector('#exp-content').innerHTML=details.substring(0,charterposition)+''
            if (textposition !== snippet.length) {
               textposition++
               setTimeout( function(){getcode(gotname,gottexplain,gotcode)}, speed);
            }
            if(charterposition!== details.length){
                charterposition++
                setTimeout(function(){getcode(gotname,gottexplain,gotcode)},speed)
            }
            
            
        }
        getcode(gotname,gottexplain,gotcode)
}

let deteminedspeed = true
let i=20
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

export function generate(gotcode,gottexplain){
    let textposition = 0;
    let charterposition=0
    let speed = i;
        function getcode(arrays,explaination) {
            let message = arrays;
            let details=explaination
            document.querySelector('#choice-inputs').value= message
            document.querySelector('#gen-cod').innerHTML = message.substring(0, textposition);
            document.querySelector('#exp-content').innerHTML=details.substring(0,charterposition)
            if (textposition !== message.length) {
               textposition++
               setTimeout( function(){getcode(gotcode,gottexplain)}, speed);
            }
            if(charterposition!== details.length){
                charterposition++
                setTimeout(function(){getcode(gotcode,gottexplain)},speed)
            }
            
            
        }
        getcode(gotcode,gottexplain)
}

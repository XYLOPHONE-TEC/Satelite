      
 
export function generate(gotcode,gottexplain){
    let textposition = 0;
    let charterposition=0
    let speed = 100;
        function getcode(arrays,explaination) {
            let message = arrays;
            let details=explaination
            
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

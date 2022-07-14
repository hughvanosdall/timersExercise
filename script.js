function countdown(num){
    let interval = setInterval( function() {
        if (num != 1){
            num--;
            console.log(num)
        } else {
            console.log("DONE!");
            clearInterval(interval)
        }
     }, 1000);}

function randomGame(){
    let ranNum = 0;
    let tries = 0;
    let interval = setInterval(function(){
        tries++;
        ranNum = Math.random();
        if (ranNum > 0.75){
            console.log("Tries: " + tries)
            clearInterval(interval)
        }
    }, 1000)
}
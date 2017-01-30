var jameel={
name="jameel",
    wakeup = function(isSuc,isFail){
var didWakeup=false;
  if(didWakeup){
  console.log("i have woken up");
  isSuc();
}else{
console.log("i decided to go to sleep");
  isFail();}
}

};
setTimeout(function coffee(){
  (console.log("ddrink coffeee");
},2000)
function.dream(){
console.log("dreams of dancing");


}

jameel.wakeup(coffee,dream);
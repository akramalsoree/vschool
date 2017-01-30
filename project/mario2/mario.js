
document.getElementById("but").addEventListener("click",mar);
function mar  ()  {
 
     var nb1= document.getElementById("nb1").value;
    var tot1 = Number(nb1*5);
document.getElementById("tnb1").value= Number(tot1);
   var nb2= document.getElementById("nb2").value;
    var tot2 =Number(nb2*7);
document.getElementById("tnb2").value= Number(tot2);
    
   var nb3= document.getElementById("nb3").value;
    var tot3 =Number(nb3*11);
    document.getElementById("tnb3").value= Number(tot3);
 

document.getElementById("res").value= Number(tot1+tot2+tot3); 
  
}

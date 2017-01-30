
$("#but").click(function(){
 
         var nb1= $("#nb1").val();
    var tot1 = Number(nb1*5);
    
$("#tnb1").val(Number(tot1));
 
    
   var nb2=$("#nb2").val();
    var tot2=Number(nb2*7);
$("#tnb2").val(Number(tot2));
    
   var nb3= $("#nb3").val();
    var tot3 =Number(nb3*11);
    $("#tnb3").val(Number(tot3));
 

$("#res").val(Number(tot1+tot2+tot3)); 
   
    });
$("#tnb1").change(function(){
     
});

$("#tnb1").on("input",function(){
   
    nb1 = nb1*5;
  
})
 
   

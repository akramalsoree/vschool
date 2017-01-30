function deleteItem(itemid){
  $(itemid).remove();
}
$("#submit").click(function(){
  var item = $("#item").val();

 $("#outpot").append("<li id=" + item + "><button id=" + item + " onclick=  'deleteItem(" + item + ")' > X </button>" + item + "</li>");
 
})

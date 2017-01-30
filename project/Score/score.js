console.log("cxxxxxxxxxxxxxx");
var people = [];


$("#but").click(function() {
  people.push({
    name: $("#name").val(),
    game: $("#game").val(),
   date: $("#date").val(),
    high:$("#high").val(), 
  });
  render();
  $("#name").val("");
  $("#game").val("");
    $("#date").val(""); 
    $("#high").val("");
});






var render = function() {
  people.sort(function(a, b) {
    return a.highScore - b.highScore
  });
  for(var i = 0; i < people.length; i++) {
         $(".output").append(
             '<tr><td>'+people[i].name + '</td><td>' + people[i].game + '</td><td>' +people[i].date+'</td><td>' +people[i].high+'</td></tr>');
   };
}

















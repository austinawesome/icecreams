$(document).ready(function() {
var icecreams=["vanilla","chocolate","strawberry"];
icecreams.forEach(function(icecream) {
// alert("my favorite icecreams are " + icecream+ ".")
var result = "favorites are " +icecream+ ".";
$("#output ul").append("<li>" + result +"</li>");
alert(icecream);
  });
});

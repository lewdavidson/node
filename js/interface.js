
var Calculator = require('./../js/scripts.js').calculatorModule;

$(document).ready(function(){
  $("#userInput").submit(function(event){
    event.preventDefault();

    var goal = $("#goal").val();
    var simpleCalc = new Calculator("hot pink");
    var output = simpleCalc.pingPong(goal);

    output.forEach(function(element){
      $("#solution").append("<li>" + element +"</li>");
    });

  });
});

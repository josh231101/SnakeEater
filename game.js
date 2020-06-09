//GLOBAR VARS//
var foodEaten = 1;
var move = [0, 0];
var topPosition = 20 * Math.floor((Math.random() * 19));
var leftPosition = 20 * Math.floor((Math.random() * 19));
var canMove = false;
var play = false;

//BTN PLAY ACITON//
$("button").click(function() {
  if (!play) {
    randomFood();
    $("h1").text("Food Eaten: " + foodEaten);
    $(".invisible").css("visibility", "visible");
    canMove = true;
    console.log($(".invisible").css("top") + ", " + $(".invisible").css("left"));
    play = true;
  } else {}
});

function randomFood() {
  $("#food").css("top", topPosition + "px");
  $("#food").css("left", leftPosition + "px");
  $("#food").removeClass("no-food");
  $("#food").addClass("food");
  console.log(  $("#food").css("top")+ ","+ $("#food").css("left"))
}
function checkIfEaten(){
  var topFoodPosition = $("#food").css("top");
  var topUserPosition = $("#snake").css("top");
  var leftFoodPosition= $("#food").css("left");
  var leftUserPosition= $("#snake").css("left");
  //1. Comprobar si las posiciones son las mismas
  if((topUserPosition === topFoodPosition) && (leftUserPosition === leftFoodPosition)){
    //1. Reproducir un sonido corto
    var bite = new Audio("sounds/bite.mp3");
    bite.play();
    //2. Subir el nivel del usuario
    foodEaten++;
    //3.Mostrarlo
    $("h1").text("Food Eaten " + foodEaten);
    var topFood = 20 * Math.floor((Math.random() * 19));
    var leftFood = 20 * Math.floor((Math.random() * 19));
    $("#food").css("top",topFood+"px");
    $("#food").css("left",leftFood+"px");
  }else{}
  //4. Crear una nueva comida
}

$(document).keydown(function(e) {
  if (canMove) {
    switch (e.originalEvent.key) {
      case "ArrowDown":
        if ($(".invisible").css("top") != "380px") {
          move[0] += 20;
          $(".invisible").css("top", move[0] + "px");
          console.log($(".invisible").css("top") + ", " + $(".invisible").css("left"));
          checkIfEaten();
        } else {
          break;
        }
        break;
      case "ArrowUp":
        if ($(".invisible").css("top") != "0px") {
          move[0] -= 20;
          $(".invisible").css("top", move[0] + "px");
          console.log($(".invisible").css("top") + ", " + $(".invisible").css("left"));
          checkIfEaten();
        } else {
          break;
        }
        break;
      case "ArrowLeft":
        if ($(".invisible").css("left") != "0px") {
          move[1] -= 20;
          $(".invisible").css("left", move[1] + "px");
          console.log($(".invisible").css("top") + ", " + $(".invisible").css("left"));
          checkIfEaten();
        } else {
          break;
        }
        break;
      case "ArrowRight":
        if ($(".invisible").css("left") != "380px") {
          move[1] += 20;
          $(".invisible").css("left", move[1] + "px");
          console.log($(".invisible").css("top") + ", " + $(".invisible").css("left"));
          checkIfEaten();
        } else {
          break;
        }
        break;
    }
  } else {}
});

//GLOBAR letS//
let foodEaten = 0;
let move = [0, 0];
let canMove = false;
let canPlay = true;
const myAudio = new Audio('sounds/bgmusic.mp3');
const bite = new Audio("sounds/bite.mp3");

const randomPosition = () =>{
  return 20 * Math.floor((Math.random() * 19));
}
let topPosition = randomPosition();
let leftPosition =randomPosition();

//CREATION OF A NEW APPLE
const randomFood= ()=> {
  $("#food").css("top",`${topPosition}px`);
  $("#food").css("left", `${leftPosition}px`);
  $("#food").removeClass("no-food");
  $("#food").addClass("food");
}
//BTN PLAY ACITON//
$("button").click(() =>{
  if (canPlay) {
    canPlay = false
    myAudio.play();
    randomFood();
    $("h1").text(`Apples: ${foodEaten}`);
    $(".snake").css("visibility", "visible");
    $(".btn-game").text('Stop');
    $(".btn-game").css('background','red');
    canMove = true;
    play = true;
  } else {
    // The user is playing we have to restart the game
    $("h1").text(`SNAKE GAME`);
    $(".btn-game").css('background','#92CD41');
    $(".snake").css("visibility", "hidden");
    $("#food").addClass("no-food");
    topPosition = randomPosition();
    leftPosition = randomPosition();
    myAudio.pause();
    canPlay = true
    canMove = false
    foodEaten = 0
    $(".btn-game").text('Start Playing'); 
  }
});
//EVERY MOVEMENT OF THE SNAKE WE CHECK IF THE FOOD AND SNAKE ARE ON THE SAME POSITION
const checkIfEaten = () => {
  let topFoodPosition = $("#food").css("top");
  let topUserPosition = $("#snake").css("top");
  let leftFoodPosition= $("#food").css("left");
  let leftUserPosition= $("#snake").css("left");
  //1. Comprobar si las posiciones son las mismas
  if((topUserPosition === topFoodPosition) && (leftUserPosition === leftFoodPosition)){
    //1. Reproducir un sonido corto
    bite.play();
    //2. Subir el nivel del usuario
    foodEaten++;
    //3.Mostrarlo
    $("h1").text(`Apples: ${foodEaten}`);
    let topFood = randomFood();
    let leftFood = randomFood();
    $("#food").css("top",`${topFood}px`);
    $("#food").css("left",`${leftFood}px`);
  }
}
//KEY EVENTS
$(document).keydown((e)=> {
  if (canMove) {
    const keyPressed =e.originalEvent.key;
    switch (keyPressed) {
      case "ArrowDown":
        if ($(".snake").css("top") != "380px") {
          move[0] += 20;
          $(".snake").css("top",`${move[0]}px`);
        }
        break;
      case "ArrowUp":
        if ($(".snake").css("top") != "0px") {
          move[0] -= 20;
          $(".snake").css("top",`${move[0]}px`);
        }
        break;
      case "ArrowLeft":
        if ($(".snake").css("left") != "0px") {
          move[1] -= 20;
          $(".snake").css("left",`${move[1]}px`);
        }
        break;
      case "ArrowRight":
        if ($(".snake").css("left") != "380px") {
          move[1] += 20;
          $(".snake").css("left",`${move[1]}px`);
        }
        break;
    }
    checkIfEaten();
  }
});

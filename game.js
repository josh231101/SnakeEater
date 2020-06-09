var level = 1;
var move = [0,0];
var top = Math.floor((Math.random() * 380));
var left =Math.floor((Math.random() * 380));
var canMove = false;
$("button").click(function(){
  $("h1").text("LEVEL: " + level);
  $(".invisible").css("visibility","visible");
  canMove = true;
  console.log($(".invisible").css("top") + ", " + $(".invisible").css("left"));
});

$(document).keydown(function(e){
  if(canMove){
    switch(e.originalEvent.key){
      case "ArrowDown":
          if($(".invisible").css("top") != "380px"){
            move[0]+=20;
            $(".invisible").css("top", move[0] + "px");
            console.log($(".invisible").css("top") + ", " + $(".invisible").css("left"));
          }else{break;}
        break;
      case "ArrowUp":
        if($(".invisible").css("top") != "0px"){
          move[0]-=20;
          $(".invisible").css("top", move[0] + "px");
          console.log($(".invisible").css("top") + ", " + $(".invisible").css("left"));

        }else{break;}
        break;
      case "ArrowLeft":
        if($(".invisible").css("left") != "0px"){
          move[1]-=20;
          $(".invisible").css("left", move[1] + "px");
          console.log($(".invisible").css("top") + ", " + $(".invisible").css("left"));
        }else{break;}
        break;
      case "ArrowRight":
      if($(".invisible").css("left") != "380px"){
        move[1]+=20;
        $(".invisible").css("left", move[1] + "px");
        console.log($(".invisible").css("top") + ", " + $(".invisible").css("left"));
      }else{break;}

        break;

    }
  }else{

  }
  });

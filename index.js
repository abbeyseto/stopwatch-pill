var canvas = document.getElementById("screen");
var c = canvas.getContext("2d");
var state;
var hours = 0;
var minutes = 0;
var seconds = 0;
function updates(){
  c.clearRect(0,0,canvas.width,canvas.height);
  c.font = "40px Arial";
  c.fillText(hours+"hr: "+minutes+"min: "+seconds+"secs",canvas.width/10,canvas.height/1.8);
  c.fillStyle = "black";
  if(state == "stop"){
    clearInterval(checkT);
    state = "";
  }else if(state == "start"){
    checkT = setInterval(check,1000);
    state = "";
  }else if(state == "reset"){
    seconds = 0;
    minutes = 0;
    hours = 0;
    state = "";
  }
}
function check(){
  if(seconds == 59 && minutes != 59){
    seconds = 00;
    minutes++;
  }else if(minutes == 59 && seconds == 59){
    minutes = 0;
    seconds = 0;
    hours++;
  }
  seconds++;
}

var update = setInterval(updates,100);
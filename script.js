var h_button;
var h_in;
var f_button;
var f_in;
var f_out;
var text;
var restyleButton;

var fortunes = ["The early bird gets the worm, but the second mouse gets the cheese.",
  "Be on the alert to recognize your prime at whatever time of your life it may occur.",
  "Your road to glory will be rocky, but fulfilling.",
  "Courage is not simply one of the virtues, but the form of every virtue at the testing point.",
  "Patience is your alley at the moment. Don’t worry!",
  "Nothing is impossible to a willing heart.",
  "Don’t worry about money. The best things in life are free.",
  "Don’t pursue happiness – create it.",
  "Courage is not the absence of fear; it is the conquest of it.",
  "Nothing is so much to be feared as fear.",
  "All things are difficult before they are easy.",
  "The real kindness comes from within you.",
  "A ship in harbor is safe, but that’s not why ships are built."]

document.addEventListener("DOMContentLoaded", function(){

  h_button = document.getElementById("half_button");
  h_in = document.getElementById("half_input");
  f_in = document.getElementById("fortune_input");
  f_button = document.getElementById("fortune_button");
  f_out = document.getElementById("fortune_output");
  text = document.getElementById("result_text");
  restyleButton = document.getElementById("restyle_button");

  h_button.addEventListener("click", function(){
      half(h_in.value);
    });

  f_button.addEventListener("click", function(){
      fortune(f_in.value);
    });

  restyleButton.addEventListener("click", restyle);
    });

function half(num){
  var half_num = num / 2;
  alert("Half of " + num.toString() + " is " + half_num.toString());
}

function fortune(name_input){
  var r = Math.random()*255;
  var g = Math.random()*255;
  var b = Math.random()*255;
  var outputColorString = "rgb(" + r + "," + g + "," + b + ")";
  text.style.color = outputColorString;
  var result = name_input + ", " + fortunes[Math.floor(Math.random() * fortunes.length)];
  text.innerText = result;
  return result;
}

function restyle(){
  var r = Math.random()*255;
  var g = Math.random()*255;
  var b = Math.random()*255;
  var outputColorString = "rgb(" + r + "," + g + "," + b + ")";
  text.style.color = outputColorString;
  text.style.fontSize = (Math.random() * (30 - 10) + 10) + "px";
  text.style.padding = (Math.random() * (50 - 10) + 10) + "px";
 }

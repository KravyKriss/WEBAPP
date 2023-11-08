

function XY() {
alert("");

}

function next(){

  n = document.getElementById("next").innerText;
  p = document.getElementById("previous").innerText;
  navigation = document.getElementById("next");
  previous =  document.getElementById("previous");
  first = document.getElementById("theory1");
  second = document.getElementById("theory2");
  third = document.getElementById("theory3");
  fourth = document.getElementById("theory4");
  fifth = document.getElementById("theory5");
  sixth = document.getElementById("theory6");



  switch (n) {
    case "→2":
    first.style.display = "none";
    second.style.display = "block";
    navigation.innerText = "→3";
    previous.innerText = "←1";

  break;

      case "→3":
      second.style.display = "none";
      third.style.display = "block";
      navigation.innerText = "→4";
      previous.innerText = "←2";

  break;

  case "→4":
  third.style.display = "none";
  fourth.style.display = "block";
  navigation.innerText = "→5";
  previous.innerText = "←3";


  break;

  case "→5":
  fourth.style.display = "none";
  fifth.style.display = "block";
  navigation.innerText = "→6";
  previous.innerText = "←4";
  break;

  case "→6":
  fifth.style.display = "none";
  sixth.style.display = "block";
  navigation.innerText = "К тестированию";
  previous.innerText = "←5";


  break;

  case "К тестированию":
  document.getElementById("r_u_ready").style.display = "table";
  break;
  }

}


function prev() {

  n = document.getElementById("next").innerText;
  p = document.getElementById("previous").innerText;
  navigation = document.getElementById("next");
  previous =  document.getElementById("previous");
  first = document.getElementById("theory1");
  second = document.getElementById("theory2");
  third = document.getElementById("theory3");
  fourth = document.getElementById("theory4");
  fifth = document.getElementById("theory5");
  sixth = document.getElementById("theory6");


  switch (p) {
    case "←1":
    second.style.display = "none";
    first.style.display = "block";
    previous.innerText = "Назад к меню";
    navigation.innerText = "→2";

      break;
    case "←2":
    third.style.display = "none";
    second.style.display = "block";
    previous.innerText = "←1";
    navigation.innerText = "→3";
  break;
  case "←3":

  fourth.style.display = "none";
  third.style.display = "block";
  previous.innerText = "←2";
  navigation.innerText = "→4";

  break;

  case "←4":
  fifth.style.display = "none";
  fourth.style.display = "block";
  previous.innerText = "←3";
  navigation.innerText = "→5";
  break;

  case  "←5":
  sixth.style.display = "none";
  fifth.style.display = "block";
  previous.innerText = "←4";
  navigation.innerText = "→6";
  break;
  }

}


function rezult()
{

var X = Number(document.getElementById("X").value);
var XY = document.getElementById("point");


document.getElementById("rez").innerText = X+1;

var x = 170 + 20*X;
var y = 160 - 20*(X+1);

XY.setAttribute("cx", x);
XY.setAttribute("cy", y);

if (X > 6.5 || X < -6.5){alert("Упс! Наш график слишком маленький, и ваше число такое большое, что его не видно на прямой, но точка принадлежит прямой :)");}

}


function no(){
window.location.href = '../3_Limits/Limits.html';
document.getElementById("r_u_ready").style.display = "none";
}

function yes() {

window.location.href = 'Practice/Limits_practice.html';

}

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function minusSlides(n) {
  showSlides(slideIndex -= n);
}

function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("parts_of_example");


  if (n > 3) {slideIndex = 3;}
  if (n < 1) {slideIndex = 1;}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";

  }

  slides[slideIndex-1].style.display = "block";

}

function show_parts_solve_problem_to_inf(){

i_parts = document.getElementById("theory_N_2");
i_parts.style.display = "block";

z_parts = document.getElementById("theory_N_3");
z_parts.style.display = "none";

message = document.getElementById("theory_N_4");
message.style.display = "none";

}


function show_parts_solve_problem_to_zero(){

z_parts = document.getElementById("theory_N_3");
z_parts.style.display = "block";

i_parts = document.getElementById("theory_N_2");
i_parts.style.display = "none";

message = document.getElementById("theory_N_4");
message.style.display = "none";

}

function turn() {



const answers = document.getElementsByClassName("solve");


for (let i = 0; i < answers.length; i++) {


  answers[i].style.backgroundColor = "DeepPink";

}


}

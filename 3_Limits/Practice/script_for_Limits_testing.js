// alert("А вот и тестирование. Обратите внимание, что перейти к следующему вопросу можно только после дачи правильного на текущий вопрос :)");

function show_rezult() {

var users_answer = document.getElementById("nine");

if (users_answer.value == "9"){
testing_P_2_correct.style.visibility = "visible";
testing_P_2_not_correct.style.visibility = "hidden";
OK.setAttribute('disabled', true);
OK.innerText = "✓";

}

if (users_answer.value != "9") {

testing_P_2_not_correct.style.visibility = "visible";
}

}

function show_rezult_2(){

const group_radiobuttons = document.getElementsByName("choosing_answer");


  for (const i of group_radiobuttons){
if(i.className == "wrong" && i.checked){

testing_I_1_not_correct.style.visibility = "visible";
  alert(i.value);

}
if(i.className == "right" && i.checked){

testing_I_1_correct.style.visibility = "visible";
testing_I_1_not_correct.style.visibility = "hidden";
choose_this.setAttribute('disabled', true);
choose_this.value = "✓";

}
  }

}

function check_filled_in(){

if (four.value == "4"){

if (minus_three.value == "-3" || minus_three.value == "6"){

if (six.value == "6" || six.value == "-3"){

testing_Z_1_correct.style.visibility = "visible";
testing_Z_1_not_correct.style.visibility = "hidden";


sub_filling_in.setAttribute('disabled', true);
sub_filling_in.innerText = "✓";


}
else {
testing_Z_1_not_correct.style.visibility = "visible";

}
}
else {
testing_Z_1_not_correct.style.visibility = "visible";

}
}

else {
testing_Z_1_not_correct.style.visibility = "visible";

}


}

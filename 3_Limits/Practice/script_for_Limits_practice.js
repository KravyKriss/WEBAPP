function show_next_question(){

  first.innerText = "Какой из лимитов записан правильно?";

var f = document.getElementById("first_answer");
f.innerText = "lim (x+2)";

var t = document.getElementById("third_answer");
t.innerText = "Никакой";

let go_next = document.getElementById("arrow_for_next_set_of_questions");
go_next.style.visibility = "hidden";

var s = document.getElementById("second_answer");
s.innerText = "limit (√x)";



if (first.innerText == "Какой из лимитов записан правильно?"){
t.setAttribute("class", "right");
f.setAttribute("class", "wrong");
}


go_next.onclick = function() {

first.innerText = "Как решается неопределённость вида 0/0?";
f.innerText = "";
s.innerText = "Разложением на множители";
t.innerText = "Молча";

t.onclick = function(){alert("Вы и правда готовы! Перенаправляем Вас на страницу для тестирования");


  window.location.href = 'Limits_testing.html';



}


}




}

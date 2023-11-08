function GetInformation()
{
var modal = document.getElementById("second_table");
modal.style.display = "table";
}

function Close() {
var modal = document.getElementById("second_table");
modal.style.display = "none";
}

function OpenGameWindow() {
var table_th = document.getElementById("game_table");
var table_f = document.getElementById("main");
table_f.style.display = "none";
table_th.style.display = "table";
}

function Derivatives() {

window.location.href = '../1_Derivatives/Derivatives.html';

}

function Integral() {
window.location.href = '../2_Integral/Integral.html';
}

function Limits(){
window.location.href = '../3_Limits/Limits.html';



}

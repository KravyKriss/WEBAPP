function back() {
window.location.href = '../0_Main_menu_page/Main_menu.html';
}
function next() {
  n = document.getElementById("next").innerText;
navigation = document.getElementById("next");
  switch (n) {
    case "→2":
    theory2_2.style.display = "table";
    theory2_1.style.display = "none";
    navigation.innerText = "→3";
break;}}

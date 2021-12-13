player1_name = localStorage.getItem("input_no1");
player2_name = localStorage.getItem("input_no2");

player1_score = 0;
player2_score = 0;

document.getElementById("input_no1").innerHTML = input_no1 + "=";
document.getElementById("input_no2").innerHTML = input_no2 + "=";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn = " + input_no1;
document.getElementById("player_answer").innerHTML = "Answer turn = " + input_no2;


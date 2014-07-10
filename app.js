//$(document).ready(function(){

function Question(quest, one, two, three, four, correct){
	this.quest = quest;
	this.one = one;
	this.two = two;
	this.three = three;
	this.four = four;
	this.correct = correct;
}

var Aquestion = new Question("Who did Roger Federer beat to win his first Grand Slam?","Marc Philipousis","David Ferrer","Andre Agassi","Juan Carlos Ferrero","Marc Philipousis");
 
 var Bquestion = new Question("Who of these players was the youngest to hold the number 1 ranking?",
 "Boris Becker",
 "John McEnroe",
 "Leyton Hewitt",
 "Andre Agassi",
 "Leyton Hewitt");
 
 var Cquestion = new Question("Which of these players won three Grand Slams in 2002",
 "Martina Hingis",
 "Kim Clijsters",
 "Serena Williams",
 "Justine Henin",
 "Serena Williams");
 
 var Dquestion = new Question("Who ended up winning the longest tennis match ever played ?",
 "John Isner",
 "Tommy Haas",
 "Tommy Robredo",
 "Nicolas Mahut",
 "John Isner");
 
 var arr = [];
 arr[0] = Aquestion;
 arr[1] = Bquestion;
 arr[2] = Cquestion;
 arr[3] = Dquestion;
 
 console.log(arr);
 
var a = Aquestion.quest;
$("p.question").text(a);
$(".one").text(Aquestion.one);
$(".two").text(Aquestion.two);
$(".three").text(Aquestion.three);
$(".four").text(Aquestion.four);

//});
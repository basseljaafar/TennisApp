$(document).ready(function(){

function Question(quest, one, two, three, four, correct){
	this.quest = quest;
	this.one = one;
	this.two = two;
	this.three = three;
	this.four = four;
	this.correct = correct;
}

var Aquestion = new Question("Who did Roger Federer beat to win his first Grand Slam?", "Marc Philipousis", "David Ferrer", "Andre Agassi", "Juan Carlos Ferrero", "Marc Philipousis");
var a = Aquestion.quest;
$("p.question").text(a);
$(".one").text(Aquestion.one);
$(".two").text(Aquestion.two);
$(".three").text(Aquestion.three);
$(".four").text(Aquestion.four);

});
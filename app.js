var logos = [];
logos[0] = ".AustralianLogo";
logos[1] = ".RolandLogo";
logos[2] = ".WimbledonLogo";
logos[3] = ".USLogo";

var bgs = [];
bgs[0] = "Abg";
bgs[1] = "Rbg";
bgs[2] = "Wbg";
bgs[3] = "Ubg";

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
 
 
/*var a = Aquestion.quest;
$("p.question").text(a);
$(".one").text(Aquestion.one);
$(".two").text(Aquestion.two);
$(".three").text(Aquestion.three);
$(".four").text(Aquestion.four);*/


$(document).ready(function(){

$(".start").show();
$("#borg").fadeIn(50).delay(1000).fadeOut(50);
$("#mcenroe").delay(1100).fadeIn(50).delay(1000).fadeOut(50);
$("#connors").delay(2200).fadeIn(50).delay(1000).fadeOut(50);
$("#becker").delay(3300).fadeIn(50).delay(1000).fadeOut(50);
$("#edberg").delay(4400).fadeIn(50).delay(1000).fadeOut(50);
$("#sampras").delay(5500).fadeIn(50).delay(1000).fadeOut(50);
$("#agassi").delay(6600).fadeIn(50).delay(1000).fadeOut(50);
$("#nadal").delay(7700).fadeIn(50).delay(1000).fadeOut(50);
$("#king").delay(8800).fadeIn(50).delay(1000).fadeOut(50);
$("#ball").delay(9900).fadeIn(50);
$("#quiz").delay(9900).fadeIn(50);
$("#click").delay(10500).fadeIn(50);

$("#ball").on("click", function(){

$(".start").hide();
$("#click").hide();
$(".main").show();
});

/*$("div").on("click",".bullet", function(){ //not working!! turn ball yellow

alert("hello");
$(this).animate({"background":"yellow"});
});*/


var i = 0;

if(i==0){
	$(".bg").addClass(bgs[i]);										//set background color
	$(logos[0]).animate({"opacity":"1"});							//set logo opacity
};

var a = Aquestion.quest;
$("p.question").text(arr[i].quest);
$(".one").text(arr[i].one);
$(".two").text(arr[i].two);
$(".three").text(arr[i].three);
$(".four").text(arr[i].four);







});
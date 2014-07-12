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

colors = [];
colors[0]="#0033FF";
colors[1]="#CC0000";
colors[2]="#009900";
colors[3]="#006699";

cups = [];
cups[0] = ".Australian";
cups[1] = ".Roland";
cups[2] = ".Wimbledon";
cups[3] = ".US";

function Question(quest, one, two, three, four, correct){
	this.quest = quest;
	this.one = one;
	this.two = two;
	this.three = three;
	this.four = four;
	this.correct = correct;
}

var addTournament = function(i){
	
	$("p.question").text(arr[i].quest);
	$(".one").text(arr[i].one);
	$(".two").text(arr[i].two);
	$(".three").text(arr[i].three);
	$(".four").text(arr[i].four);
	$(".bg").addClass(bgs[i]);										//set background color
	$(logos[i]).animate({"opacity":"1"});							//set logo opacity
	$(".bullet").removeClass("yellow");
};

var removeTournament = function(i){
	$(logos[i]).animate({"opacity":"0.4"});
};

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
$("#mcenroe").delay(1110).fadeIn(50).delay(1000).fadeOut(50);
$("#connors").delay(2220).fadeIn(50).delay(1000).fadeOut(50);
$("#becker").delay(3330).fadeIn(50).delay(1000).fadeOut(50);
$("#edberg").delay(4440).fadeIn(50).delay(1000).fadeOut(50);
$("#sampras").delay(5550).fadeIn(50).delay(1000).fadeOut(50);
$("#agassi").delay(6660).fadeIn(50).delay(1000).fadeOut(50);
$("#nadal").delay(7770).fadeIn(50).delay(1000).fadeOut(50);
$("#king").delay(8880).fadeIn(50).delay(1000).fadeOut(50);
$("#ball").delay(10090).fadeIn(50);
$("#quiz").delay(10100).fadeIn(50);
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

$(".bullet").on("click", function(){
$(".bullet").removeClass("yellow");
$(this).addClass("yellow");
});

$("ul").on("click", "li", function(){
$(".bullet").removeClass("yellow");
if($(this).hasClass("one")){
	$(".uno").addClass("yellow");
} else if ($(this).hasClass("two")){
			$(".dos").addClass("yellow");
		} else if ($(this).hasClass("three")){
				$(".tres").addClass("yellow");
				} else if ($(this).hasClass("four")){
							$(".quatro").addClass("yellow");
						}
});

var i = 0;
addTournament(i);



$(".submit").on("click", function(){
	if($(".uno").hasClass("yellow") && arr[i].one == arr[i].correct){
		
			$(cups[i]).addClass("disp");
		
	} else if($(".dos").hasClass("yellow") && arr[i].two ==arr[i].correct){
		
			$(cups[i]).addClass("disp");
			
	} else if ($(".tres").hasClass("yellow") && arr[i].three == arr[i].correct){
				
			$(cups[i]).addClass("disp");
				
	} else if ($(".quatro").hasClass("yellow") && arr[i].four == arr[i].correct){
				
			$(cups[i]).addClass("disp");
				
			};
	i++;
	if(i!=4){
		
		removeTournament(i-1);
		addTournament(i);
		
	}
});







/*if(i==0){
	$(".bg").addClass(bgs[i]);										//set background color
	$(logos[0]).animate({"opacity":"1"});							//set logo opacity
};


$("p.question").text(arr[i].quest);
$(".one").text(arr[i].one);
$(".two").text(arr[i].two);
$(".three").text(arr[i].three);
$(".four").text(arr[i].four);*/







});
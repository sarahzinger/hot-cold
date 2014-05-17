$(document).ready(function(){
/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);
	});
/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

//global var
var counter =0;
var secretNum;
var userGuessNum;

//function that generates a secret num
var makeSecretNum = function(){
	secretNum= Math.floor(Math.random()*101);
};

//new game function
var newGame = function(){

	counter=0;
	$('#count').empty().append(counter);
	$("#guessList").empty();
	$("#feedback").empty().append("Make Your Guess!");

	makeSecretNum();
};

//function to give feedback
var feedbacker = function(feedback){
	$("#feedback").empty().append(feedback);
};

//function to record and count guesses
var upTheCount = function(){
	counter++;
	$('#count').empty().append(counter);
	$("#guessList").append(userGuessNum+ ", ");
};

//on clicking the guess button...
$(document).on("click","#guessButton",function(event){
	
	//prevents the page from reloading 
	event.preventDefault();
	
	//gets number from user
	userGuessNum = $("#userGuess").val();
	userGuessNum = +userGuessNum;
	
	//evaluates if the number is invalid, a winner, hot, cold or inbetween
		//and tells the user so.
	if (isNaN(userGuessNum)||userGuessNum<1||userGuessNum>100){
		alert("That's not a valid number, please pick a number between 1-100");
	}
	else if (userGuessNum==secretNum){
		feedbacker("Congrats! You Win!!"+ "<br>"+"Better press new game, up at the top-right");
		counter++;
		$('#count').empty().append(counter);
		$("#guessList").append(userGuessNum);
	}
	else if(secretNum-5<userGuessNum&&secretNum+5>userGuessNum) {
		feedbacker("SO HOT!!");
		upTheCount();
	}
	else if(secretNum-10<userGuessNum&&secretNum+10>userGuessNum){
		feedbacker("warm!");
		upTheCount();
	}
	else if (secretNum-25<userGuessNum&&secretNum+25>userGuessNum){
		feedbacker("lukewarm :/");
		upTheCount();
	}
	else if (secretNum-50<userGuessNum&&secretNum+50>userGuessNum){
		feedbacker("It's cold in here! Try again");
		upTheCount();
	}
	else if (secretNum-99<userGuessNum&&secretNum+99>userGuessNum){
		feedbacker("ICE Cold. Try again!");
		upTheCount();
	}

});

newGame();

//clicking new button triggers new game
$(document).on("click",".new", newGame);
    
});




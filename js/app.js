$(document).ready(function(){
/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);
	});
/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});


var counter =0;

//generates a secret num
var secretNum = Math.floor(Math.random()*101);

//on guess...
$(document).on("click","#guessButton",function(event){
	//prevents the page from reloading 
	event.preventDefault();
	//gets number from user
	var userGuessNum = $("#userGuess").val();
	userGuessNum = +userGuessNum;
	
	
	
	//if it's not a number it tells us
	if (isNaN(userGuessNum)||userGuessNum<1||userGuessNum>100){
		alert("not a valid number");
	}
	else if (userGuessNum==secretNum){
		$("#feedback").empty().append("Congrats! You Win!!"+ "<br>"+"Better press new game, up at the top-right");
	}
	else if(secretNum-5<userGuessNum&&secretNum+5>userGuessNum) {
		//gives feedback
		$("#feedback").empty().append("SO HOT");
		//updates count
		counter++;
		$('#count').empty().append(counter);
		//need to write down number...
		$("#guessList").append(userGuessNum+ ", ");
	}
	else if(secretNum-10<userGuessNum&&secretNum+10>userGuessNum){
		$("#feedback").empty().append("warm :) keep trying!");
		$("#guessList").append(userGuessNum+ ", ");
		counter++;
		$('#count').empty().append(counter);
	}
	else if (secretNum-25<userGuessNum&&secretNum+25>userGuessNum){
		$("#feedback").empty().append("a little on the chilly side there, but keep trying!");
		$("#guessList").append(userGuessNum+ ", ");
		counter++;
		$('#count').empty().append(counter);
	}
	else if (secretNum-50<userGuessNum&&secretNum+50>userGuessNum){
		$("#feedback").empty().append("Dang, you're cold. Better try again!");
		$("#guessList").append(userGuessNum+ ", ");
		counter++;
		$('#count').empty().append(counter);
	}
	else if (secretNum-99<userGuessNum&&secretNum+99>userGuessNum){
		$("#feedback").empty().append("Ice Cold. Try again!");
		$("#guessList").append(userGuessNum+ ", ");
		counter++;
		$('#count').empty().append(counter);
	}

});
$(document).on("click",".new",function(){
	location.reload();
});
    
});




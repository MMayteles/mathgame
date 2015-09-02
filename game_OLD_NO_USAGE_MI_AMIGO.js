$(".user_num").prop('disabled', true); //Disable the answer input field
function chooseMode() {
	$('.number').text("00");
	$("#overlay").fadeIn();
	$('.gameMode').fadeIn('slow');
}
chooseMode();



$( ".double" ).click(function() {
	$('.gameMode').fadeOut('fast');
	$('.countdown').hide();
	$("#countdownBox").fadeIn();
	$('.instructions').fadeIn('slow');
	$('.start_btn_holder').fadeIn('slow');
	$(".start_game_btn").focus();
	$(".start_game_btn").click(function() {
		evalNum("double");
	});
	//
});
$( ".triple" ).click(function() {
	$('.gameMode').fadeOut('fast');
	$('.countdown').hide();
	$("#countdownBox").fadeIn();
	$('.instructions').fadeIn('slow');
	$('.start_btn_holder').fadeIn('slow');
	$(".start_game_btn").focus();
  	//evalNum("triple");
});
$( ".half" ).click(function() {
	$('.gameMode').fadeOut('fast');
	$('.countdown').hide();
	$("#countdownBox").fadeIn();
	$('.instructions').fadeIn('slow');
	$('.start_btn_holder').fadeIn('slow');
	$(".start_game_btn").focus();
  	//evalNum("half");
});


/*
$('.double').click(function() {
	$('.gameMode').fadeOut('fast');
	$('.countdown').hide();
	$("#countdownBox").fadeIn();
	$('.instructions').fadeIn('slow');
	$('.start_btn_holder').fadeIn('slow');
	$(".start_game_btn").focus();
});
*/

//function hideButton() {
//	event.preventDefault();
//	$('.start_btn_holder').fadeOut('fast');
//		setTimeout(function(){
//	        starTimer();
//	    }, 300);
//}


function starTimer() {
	$('.instructions').hide();
	//$("#overlay").fadeIn();
	//$("#countdownBox").fadeIn('slow');
	//$('.countdown').css( "font-size", "80px" );
	//$('.countdown').css( "line-height", "100px" );
	//$('.countdown').css( "padding", "50px 0" );
	$('.countdown').fadeIn();
			$('.user_num').focus();
	$("#overlay").fadeIn('slow');
	$("#countdownBox").fadeIn('slow');
	var counter = 4;
	$('.countdown').text("3");
	var interval = setInterval(function() {
    counter--;
    if (counter == 3) {
    	$('.countdown').text("2");
    } else if (counter == 2) {
    	$('.countdown').text("1");
    } else if (counter == 1) {
    	$('.countdown').text("GO!");
    	$("#overlay").fadeOut('slow');
    	$("#countdownBox").fadeOut('slow');
    	$(".user_num").prop('disabled', false);
    	startGame();
    	$('.user_num').focus();
    } else if (counter == 0) {
    	//startGame();
        clearInterval(interval);
    }
}, 1000);
}
points = 0;
x_strike_out = 0;
function updatePoints(answer) {
	if (answer == 1) {
		x_strike_out = 0;
		if (points >= 0) {
			points++
		} else {
			points = 0
		}
	} else {
		x_strike_out++
		if (x_strike_out < 3) {
			if (points > 0) {
				points--
			} else {
				points = 0
			}
		} else {
			x_strike_out = 0;
			yourOut();
		}
	}
	$('.score').text("Score: " + points)
}
//function startGame() {
//	ranNumber = Math.floor((Math.random() * 100) + 2);
//	$('.number').text(ranNumber);
//}
function evalNum(mode) {
	event.preventDefault();
	chosen_num = $('.user_num').val();
	if (mode = "double") {
		alert("chose double");
		$('.start_btn_holder').fadeOut('fast');

		setTimeout(function(){
	    
		starTimer();
	    }, 300);
		
		ranNumber = Math.floor((Math.random() * 100) + 2);
		$('.number').text(ranNumber);
		

		if (chosen_num == (ranNumber * 2)) {
		//alert("Succes!!!");
		updatePoints(1);
		//startGame();
		//$('.score').text("Score: " + points)
		$('.user_num').val("");
		} else {
		updatePoints(0);
		//$('.score').text("Score: " + points)
		$('.user_num').val("");
		startGame();
		} 
	} else if (mode = "triple") {
		if (chosen_num == (ranNumber * 3)) {
		//alert("Succes!!!");
		updatePoints(1);
		startGame();
		//$('.score').text("Score: " + points)
		$('.user_num').val("");
		} else {
		updatePoints(0);
		//$('.score').text("Score: " + points)
		$('.user_num').val("");
		startGame();
		}
	} else {
		if (chosen_num == (ranNumber / 2)) {
		//alert("Succes!!!");
		updatePoints(1);
		startGame();
		//$('.score').text("Score: " + points)
		$('.user_num').val("");
		} else {
		updatePoints(0);
		//$('.score').text("Score: " + points)
		$('.user_num').val("");
		startGame();
	}

	}
}
function yourOut() {
	//$('.yourout').fadeIn('slow');
	$('.yourout').animate({"top":"50%"}, 200);
	$('.yourout').animate({"top":"30%"}, 200);
	$('.yourout').animate({"top":"60%"}, 200);
	$('.yourout').animate({"top":"50%"}, 150);
	$(".user_num").prop('disabled', true);
	setTimeout(function() {
		$('.yourout').animate({"top":"-20%"}, 800);
	}, 2000);
	setTimeout(function() {
		chooseMode();
	}, 2000);
	
}








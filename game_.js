$(".user_num").prop('disabled', true); //Disable the answer input field

function chooseMode() { //Function is called onLoad of the page
	$('.number').text("00");
	$("#overlay").fadeIn();
	$('.gameMode').fadeIn('slow');
}//ChooseMode()

$( ".double" ).click(function() {
		startGame("double");
		mode = "double";
});
$( ".triple" ).click(function() {
		startGame("triple");
		mode = "triple";
});
$(".answerForm").submit(function(){
	initiateGameplay(mode)
});


function startGame(mode) {
	$('.countdown').hide();
	$('.gameMode').fadeOut('fast');
	$("#countdownBox").fadeIn();
	$('.instructions').fadeIn('slow');
	$('.mode_txt').html(mode);
	$('.start_btn_holder').fadeIn('slow');
	$(".start_game_btn").focus();

	if (mode === "double") {
		$(".start_game_btn").click(function() {
		countDown("double");
	});
	} else if (mode === "triple") {
		$(".start_game_btn").click(function() {
		countDown("triple");
	});
	}
} //StratGame()


function countDown(mode) {
	event.preventDefault();
	$('.start_btn_holder').fadeOut('fast');

		setTimeout(function(){
		    $('.instructions').hide();
			$('.countdown').fadeIn();
			$("#overlay").fadeIn('slow');
			$("#countdownBox").fadeIn('slow');
		}, 300);//setTimeout()

	var counter = 4;
	$('.countdown').text("3");
	var interval = setInterval(function() {
    counter--;

	if (counter == 1) {
	$(".countdown").fadeOut(10,function() {
     $('.countdown').text("GO!").fadeIn(8);
	});
		$("#overlay").fadeOut('slow');
		$("#countdownBox").fadeOut('slow');
		$(".user_num").prop('disabled', false);
		resetNumber();
		$('.user_num').focus();
	} else if (counter == 0) {
		initiateGameplay(mode);
		clearInterval(interval);
	} else {
		$(".countdown").fadeOut(function() {
    		$('.countdown').html(counter - 1).fadeIn();
		});
	}
	}, 1000);
} //CountDown()

function resetNumber() {
	ranNumber = Math.floor((Math.random() * 100) + 2);
	$('.number').text(ranNumber);
} //resetNumber()
//what is this?
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
		$('.wrong').fadeIn( 'fast' );
		setTimeout(function() {
			$('.wrong').fadeOut( 'fast' );
		}, 400);
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
}//updatePoints()

function initiateGameplay(mode) {

	event.preventDefault();

	var supercalifagulastic = (mode === 'double') ? 2 : 3 ;

	chosen_num = $('.user_num').val();
	if (chosen_num >= 0) {
		if (chosen_num == (ranNumber * supercalifagulastic)) {
			updatePoints(1);
			resetNumber();
			$('.user_num').val("");
		} else {
			updatePoints(0);
			$('.user_num').val("");
			resetNumber();
		}
	}
} //initiateGameplay()

function yourOut() {
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
	
}//YourOut()
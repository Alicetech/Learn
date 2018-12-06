"use strict";

$(function(){
	$("#rolldice").click(function(){

		var roll=Math.ceil(Math.random()*6);
		$("#diceoutcome").text(roll);


	})
	
})


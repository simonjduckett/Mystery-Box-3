window.onload = function () {

	localStorage.c = Number(localStorage.c)+1


	var scoresarea = document.getElementById("playerscores");

	let finalscore = JSON.parse(localStorage.playerscore);
	document.getElementById("yourscore").innerHTML = "Your Score is " + finalscore;

	var bestscore = 0;


	if (localStorage.getItem("bestscore") === null) {
	  localStorage.bestscore = JSON.stringify(finalscore);
	}
	else {
		bestscore = JSON.parse(localStorage.bestscore);
	}


	if (finalscore > bestscore) {
		bestscore = finalscore;
		scoresarea.innerHTML = "New High Score " + "<br>" + bestscore + " is your best score" + "<br>" + "<br>";
		localStorage.bestscore = JSON.stringify(finalscore);
	}
	else
	{
		bestscore = JSON.parse(localStorage.bestscore);
		scoresarea.innerHTML = "Highest score is " + bestscore + "<br>" + "<br>";
	}


	for(i = 1; i < 200; i++){

		if(localStorage.getItem(i)){
			scoresarea.innerHTML += "<br>" + localStorage.getItem(i);

			// var scores = [];

			// scores.push(localStorage.getItem(i));
		}

		//take each variable and save into an array, then sort from highest to lowest.

		
		
		
	}



	document.getElementById("add").onclick = function() {

		var playername = document.getElementById("player").value;//getting the name typed in.

		var x = localStorage.getItem("c");
		localStorage.setItem(x, playername + " " + finalscore);
		scoresarea.innerHTML += "<br>" + localStorage.getItem(x);


	}




		// document.getElementById("restart").onclick = function() {

		// 	window.location.replace("game.html");
			
		// }

}









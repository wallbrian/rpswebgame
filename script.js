function start(){
	
	var myChoice;
	var compChoice;
	var compMove;

	//Player choice
	for (let i = 0; i <3; i++) {
		
	myChoice=prompt("Choose! Rock, Paper or scissors?");
	
		if (myChoice == "Rock"){
			 myChoice == "Rock";
		} 
		else if (myChoice == "Paper") {
	           myChoice = "Paper";
	    }
		else if (myChoice == "Scissors"){
				myChoice = "Scissors";
		}
		
	//Computer move
	
		const array = ['Rock', 'Paper', 'Scissors'];
		const randomIndex = Math.floor(Math.random() * array.length);
		compChoice = array[randomIndex];
	   
	   //Result
	   
		if(compChoice == myChoice){
		document.getElementById("winner").innerHTML="You both chose "+compChoice+".It's a tie!";
		}
		else if(compChoice == "Rock" && myChoice == "Paper"){
		document.getElementById("winner").innerHTML="You chose "+myChoice+", Computer chose +"+compChoice+", Player wins!";
		}
		else if(compChoice == "Rock" && myChoice == "Scissors"){
		document.getElementById("winner").innerHTML="You chose "+myChoice+", Computer chose "+compChoice+", Computer wins!";
		}
		else if(compChoice == "Scissors" && myChoice == "Rock"){
		document.getElementById("winner").innerHTML="You chose "+myChoice+", Computer chose "+compChoice+", Player wins!";
		}
		else if(compChoice == "Scissors" && myChoice == "Paper"){
		document.getElementById("winner").innerHTML="You chose "+myChoice+", Computer chose "+compChoice+", Computer wins!";
		}
		else if(compChoice == "Paper" && myChoice == "Scissors"){
		document.getElementById("winner").innerHTML="You chose "+myChoice+", Computer chose "+compChoice+", Player wins!";
		}
		else if(compChoice == "Paper" && myChoice == "Rock"){
		document.getElementById("winner").innerHTML="You chose "+myChoice+", Computer chose "+compChoice+", Computer wins!";
		}
		
		
	}
}

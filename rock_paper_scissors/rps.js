var userchoice = prompt("what is your choice?");

function computer() {

  compchoice = Math.floor(Math.random() * 3)

  if (compchoice == 0) {
    return "rock"
  }
  else if (compchoice == 1) {
    return "paper"
  }
  else if (compchoice == 2) {
    return "scissors"
  }
  else {
    return "does not compute.."
  }
}
function winner(userchoice, computerChoice) {
  if (userchoice == "rock" && computerChoice == "rock" ) {
    return "This is a tie!"
  }
  else if (userchoice == "rock" && computerChoice == "paper") {
    return "You Lose :("
  }
  else if (userchoice == "rock" && computerChoice == "scissors") {
    return "You Win :)"
  }
  else if (userchoice == "paper" && computerChoice == "rock") {
    return "You Win :)"
  }
  else if (userchoice == "paper" && computerChoice == "paper") {
    return "This is a tie!"
  }
  else if (userchoice == "paper" && computerChoice == "scissors") {
    return "You Lose :("
  }
  else if (userchoice == "scissors" && computerChoice == "scissors") {
    return "This is a tie!"
  }
  else if (userchoice == "scissors" && computerChoice == "rock") {
    return "You Lose :("
  }
  else if (userchoice == "scissors" && computerChoice == "paper") {
    return "You Win :)"
  }
  else{
    return "nope!"
  }
}
var result = winner(userchoice, computerChoice);
if (result== "You Win :)") {
  document.getElementById("gif").src = "https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif";
}
else if (result== "You Lose :(") {
    document.getElementById("gif").src = "https://media.giphy.com/media/CWN0uW6ELn3pK/giphy.gif";
}
else {
  document.getElementById("gif").src = "https://media.giphy.com/media/SW3PNayoSGXao/giphy.gif";
}
var computerChoice = computer();

alert("Computer chose: " + computerChoice)
alert(winner(userchoice, computerChoice));
document.getElementById("output").innerHTML = winner(userchoice, computerChoice);

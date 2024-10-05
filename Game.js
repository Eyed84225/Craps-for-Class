window.alert('Hello')

function rollDice(){
  var die1 = Math.floor(Math.random() * 6) +1;
  var die2 = Math.floor(Math.random() * 6) +1;
  console.log("Your first roll was " + die1)
  console.log("Your second Roll was " + die2)
  var sum = die1 + die2
window.alert("Your first role was" + " " + die1)
window.alert("Your Second role was" + " " + die2)
window.alert("Making your total" + " " + sum)
  
  console.log("That makes your total " + sum)
  if (sum == 7) { 
    console.log("Nice try, but you fail")
    window.alert("meaning you falied, Press the button to play again")
  } else if(sum == 11) { 
    console.log("Nice try, but you fail")
    window.alert("meaning you falied, Press the button to play again")
  }
  else {
    console.log("you won")
    window.alert("meaning you Won, Press the button to play again")

  }

}



const number = Math.floor(Math.random() * 10 + 1);
let guesses = 0;



document.getElementById("button").onclick =  function(){
    let UserInput = document.getElementById("input").value;
    guesses += 1;
    if (UserInput == number){
         document.getElementById("answer").innerHTML = "you guessed that right, your input "+ UserInput +" is the same with the number i picked, " + number + " .Took you just " + guesses +" guess(es)"; 
    }
    else if (UserInput > number){
        document.getElementById("answer").innerHTML = "your guess " + UserInput + " is greater than what i picked";
    }
    else if (UserInput < number){
        document.getElementById("answer").innerHTML = "your guess " + UserInput+ " is less than what i picked";
    }
    else if (UserInput >= 10){
        document.getElementById("answer").innerHTML = "Seriously :( , well i prepared for you so pls choose a number between 1 and 10 ok?  ";
    }
    
}
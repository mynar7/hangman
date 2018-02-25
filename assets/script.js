var hangman = {
    words: [
        "greyhame",
        "stormcrow",
        "mithrandir",
        "gandalfthegrey",
        "gandalfthewhite"
    ],

    guesses: [],
    

    //play method for initializing the game
    play: function() {
        //clear guesses
        hangman.guesses = [];
        //reset buttons
        hangman.resetBtns();
        //get a word
        hangman.currentWord = hangman.getWord(hangman.words);
        console.log(hangman.currentWord);
        
        //get blanks to display
        var x = "*";
        for (i = 0, j = hangman.currentWord.length - 1; i < j; i++) {
            x+="*";            
        }
        hangman.blankWord = x;
        document.getElementById("current").innerHTML = hangman.addSpaces(hangman.blankWord);
        
        console.log(hangman.blankWord);
    },
    //randomizes the array and returns a word
    getWord: function() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    },

    guessWord: function() {
        //turn strings into actual arrays
        var current = hangman.currentWord.split("");
        var blank = hangman.blankWord.split("");
        var char;
        //iterate over guesses
        for (i = 0, j = hangman.guesses.length; i < j; i++) {
            //grab each guess char
            char = hangman.guesses[i];
            console.log(char);
            //check guess char over each char in current[]
            for(a = 0, b = current.length; a < b; a++) {
                if (char == current[a]) {
                    blank[a] = current[a];
                    current[a] = "_";
                }
            }
        }
        //reconstruct blank guesses array into string
        var x = "";
        for (i = 0, j = blank.length; i < j; i++) {
            x += blank[i];            
        }       
        hangman.blankWord = x;

        //update board
        document.getElementById("current").innerHTML = hangman.addSpaces(hangman.blankWord);
    },

    addSpaces: function(str) {
        var x = str.split("");
        var y = ""
        for (i = 0, j = x.length; i < j; i++) {
            y += x[i];
            if (i != j-1 ) {
                y+= " ";
            }
        }
        return y;
    },
    
    //this method takes a clicked button and converts it to a char to check against the current word
    clickGuess: function(e) {
        //get clicked button char
        var x = e.target.innerHTML.toLowerCase()
        //add to guesses, if statement prevents pc user from adding to array with clicks and keystrokes
        if (hangman.guesses.indexOf(x) == -1) {
            hangman.guesses.push(x);
        }
        console.log(x);
        //disable clicked button
        e.target.setAttribute("disabled", "true");
        console.log(hangman.guesses);
        hangman.guessWord();
        
    },

    //takes pressed keys
    keyGuess: function(event) {
        var x = event.key.toLowerCase();
        console.log(x);

        //ensure pressed key is not already guessed
        if (hangman.guesses.indexOf(x) == -1) {
            hangman.guesses.push(x);
        }
        console.log(hangman.guesses);
        hangman.guessWord();
        
    },
    
    //enables all buttons
    resetBtns: function() {
        console.log("reset");
        var x = document.getElementById("keys").querySelectorAll('button');
        console.log(x);
        for (i = 0, j = x.length; i < j; i++) {
            console.log(x[i]);
            x[i].removeAttribute("disabled");
        }
    },

    //disables all buttons
    disableBtns: function() {
        console.log("disable");
        var x = document.getElementById("keys").querySelectorAll('button');
        console.log(x);
        for (i = 0, j = x.length; i < j; i++) {
            console.log(x[i]);
            x[i].setAttribute("disabled", "true");
        }
    },     
    
}//end hangman object

//old way of grabbing buttons clicked
// document.getElementById("keys").onclick = hangman.clickGuess;

//new awesome way of grabbing clicked buttons
var x = document.getElementById("keys").querySelectorAll("button");
console.log(x);
for (i = 0, j = x.length; i < j; i++){
    x[i].addEventListener('click', hangman.clickGuess);
}


document.getElementById("reset").onclick = hangman.play;
document.getElementById("skip").onclick = hangman.disableBtns;
document.onkeypress = hangman.keyGuess;

hangman.play();


var hangman = {
    words: [
        "Greyhame",
        "Stormcrow",
        "Mithrandir",
        "GandalftheGrey",
        "GandalftheWhite"
    ],

    guesses: [],
    

    //play method for initializing the game
    play: function() {
        //clear guesses
        hangman.guesses = [];
        //reset buttons
        hangman.resetBtns();
        //get a word
        this.currentWord = hangman.getWord(this.words);
        console.log(this.currentWord);
        
        //get blanks to display
        var x = "*";
        for (i = 0, j = this.currentWord.length - 1; i < j; i++) {
            x+="*";            
        }
        hangman.blankWord = x;
        
        console.log(hangman.blankWord);
    },
    //randomizes the array and returns a word
    getWord: function() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    },
    
    //this method takes a clicked button and converts it to a char to check against the current word
    clickGuess: function(e) {
        //get clicked button char
        var x = e.target.innerHTML.toLowerCase()
        //add to guesses
        hangman.guesses.push(x);
        console.log(x);
        //disable clicked button
        e.target.setAttribute("disabled", "true");
        console.log(hangman.guesses);
        
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
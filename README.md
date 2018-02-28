# Hangman-Game

For this project I used HTML, CSS, and Javascript (no bootstrap!) to create a hangman game website that can be played on desktop as well as PC.

The game was designed for mobile first, and then upscaled to a desktop size using media queries in CSS. The images used for the hangman character were created with MS paint 3D.

For the graphics, css was used to hide the mobile keyboard when upscaled to desktop size, and also show instructions to direct the user to type in guesses. The mobile keyboard was coded entirely with percentages to ensure that the keyboard displays correctly on all devices. The keyboard container is coded with 100% width, and each key is set to 9.9%, which keeps the 'p' button from wrapping to the next line. Whenever a key button is clicked, the key is disabled, giving a nice visual representation of guesses aside from the printed letters above.

For the game logic, I used strictly javascript and no jQuery. Also, the game was coded using JSON except for the event handlers that attach to kb input as well as keystrokes.

The game picks a random word out of a 3000 word array and then checks user guesses against the randomly chosen word. After each user input, the game updates the board to show the user's guess as well as updates the blank spaces to reflect a correct guess, or the image to add parts to the hangman figure. If the user wins, the image is changed to a separate image of the hangman free of the gallows and giving an enthusiastic thumbs up for a job well done.

Also, there is a skip and define button. "Skip" functions as a give up that instantly ends the game and displays the random word, also enabling the "define" button. "Define" takes the randomly chosen word and appends it to a URL string for merriam-webster's dictionary website, so that when the button is pressed it opens a new tab with the URL for that word's definition page.

# Hangman Project

This Hangman project was developed as part of my coursework at the University of Minnesota Coding Bootcamp. It stands out as one of the most enjoyable and engaging projects I have worked on. I take great pride in this project and regularly revisit it to incorporate enhancements and updates as my coding skills and knowledge evolve. This continuous improvement approach allows me to refine the functionality, optimize the performance, and implement new features, ensuring that the project grows alongside my knowledge as a programmer.

## Github Pages Deployment:
https://rpotesmangra11.github.io/hangman-js/

## Find JavaScript for this project there:
https://github.com/rpotesmangra11/hangman-js/blob/master/assets/js/app.js

## Introduction

Hangman is a classic word-guessing game where players try to guess the hidden word one letter at a time. This project was created bootcamp requirement and showcases my ability to build interactive web applications using JavaScript, HTML, and CSS.

## Installation

To get a local copy of this project up and running, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rpotesmangra11/hangman-project.git

## How to Play Hangman

Hangman is a classic word-guessing game where players try to guess a hidden word one letter at a time. Here are the rules of the game:

1. **Objective:**
   - The objective of the game is to guess the hidden word before you run out of guesses.

2. **Gameplay:**
   - At the start of the game, a Reggaeton song name is selected at random, and its letters are represented by blank spaces.
   - Players guess letters one at a time.
   - If a guessed letter is in the word, it is revealed in the correct position(s).
   - If a guessed letter is not in the word, a part of the hangman is drawn.

3. **Winning the Game:**
   - The game is won if the player correctly guesses all the letters in the song name before the hangman drawing is completed.

4. **Losing the Game:**
   - The game is lost if the player makes too many incorrect guesses.

5. **Strategy Tips:**
   - Start by guessing common vowels (e.g., 'A', 'E', 'I', 'O', 'U').
   - Next, guess common consonants (e.g., 'R', 'S', 'T', 'L', 'N').
   - Use the revealed letters to narrow down possible word options.

Enjoy the game!


## Changelog

### [Unreleased]

### [1.1.0] - 2024-06-02

#### Changes Made

- **Viewport Responsiveness:**
  - Improved the responsiveness of the application to ensure better usability on various screen sizes.

- **Added Song Names for Non-Spanish Speakers:**
  - Included song names in the interface to aid non-Spanish speakers in understanding the game content.

- **Fixed Image Reset Issue:**
  - Resolved an issue where the album image did not reset when starting a new game.

- **Tested Keydown for Press, Keyup Works Better:**
  - Initially tested using the `keydown` event for key presses, but switched to `keyup` as it prevents multiple guesses when holding down a key.

- **Cleared Album Art on Game Reset:**
  - Added `$("#albumIMG").html("");` to the reset function to clear the album art when the next game starts.

 ## Planned Future Enhancements

 -Play song when user guesses the song name correctly (ETA undetermined)  
 -I would like to have an actual hangman character or something revealed with every failed guess (ETA undetermined)

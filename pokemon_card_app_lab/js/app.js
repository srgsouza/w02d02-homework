// The Game object
// NOTE: Think about the best datatype(number, string, array, object) for each part and whether you need to create a method.

// The game should be able to:

// keep a library of all the Pokemon cards that can be played(see the array in the "The Cards" section)
// know what cards have been played
// know how many cards are left to be played overall
// track points for both the player and the computer Note: Points are determine by the following: If the player's card beats the computer's card, the player gets one point(and vice versa).If there is a tie, no one gets a point.
// track rounds
// track number of rounds won for both player and computer
// automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// determine the winner of each play
// stop once there are no cards left or not enough to deal 3 to each the player and computer
// The Player object
// The player should be able to:
// see their stats: their points and how many rounds they've won.
// see what cards they have been dealt by the game that round.
// pick a card from the hand that has been dealt to them.Play this card agaist the computer's card. Do this again (3 times total) until the round end.
// recieive new cards given to them by the game each round.
// see the cards that they have played in the past.

// player stats , info
const player = {
  pointsWon: 0,
  roundsWon: 0,
  hand: []
}

// computer status, info
const computer = {
  pointsWon: 0,
  roundsWon: 0,
  hand: []
}

const game = {
  // ramdom number generator
  randomNum(randomMax){
        // integer between min and max (included)
    return Math.floor(Math.random() * (randomMax + 1))
  },

  // All available cards
  allCards: [{ name: "Bulbasaur", damage: 60 }, { name: "Caterpie", damage: 40 }, { name: "Charmander", damage: 60 }, { name: "Clefairy", damage: 50 }, { name: "Jigglypuff", damage: 60 }, { name: "Mankey", damage: 30 }, { name: "Meowth", damage: 60 }, { name: "Nidoran - female", damage: 60 }, { name: "Nidoran - male", damage: 50 }, { name: "Oddish", damage: 40 }, { name: "Pidgey", damage: 50 }, { name: "Pikachu", damage: 50 }, { name: "Poliwag", damage: 50 }, { name: "Psyduck", damage: 60 }, { name: "Rattata", damage: 30 }, { name: "Squirtle", damage: 60 }, { name: "Vulpix", damage: 50 }, { name: "Weedle", damage: 40 }],
  
  dealtCards: [],  // Tracks cards dealt to players (removed from allCards)

  // function to pick a card and track arrays of cards
  getCard() {
    // randomMin = 0;
    randomMax = game.allCards.length - 1;  // sets the max number for the number generator function
    randomIndex = game.randomNum(randomMax);  // gets a random number (to set a random array index value)
    let card = this.allCards.splice(randomIndex, 1)[0]; // remove/delete an item from allCards 
    return card;
  },

  // deals 3 cards to each player
  deal() {
    for (let i = 0; i < 3; i += 1) {
      player.hand.push(this.getCard());
      // console.log(`player.hand is ${JSON.stringify(player.hand)}`);
      computer.hand.push(this.getCard());
      // console.log(`computer.hand is ${JSON.stringify(player.hand)}`);
    }
    console.log(`player.hand is ${JSON.stringify(player.hand)}`);
    console.log(`computer.hand is ${JSON.stringify(computer.hand)}`);
  },

  // compare cards and set score
  compareAndScore() {    
    for (let i = 0; i < 3; i += 1) {      
      if (player.hand[i].damage > computer.hand[i].damage) {
        player.pointsWon += 1;
      } else if (player.hand[i].damage < computer.hand[i].damage) {
        computer.pointsWon += 1;
      }
    }
    console.log(`# player.pointsWon   is: ${player.pointsWon}`);
    console.log(`# computer.pointsWon is: ${computer.pointsWon}`);
    
    if (player.pointsWon > computer.pointsWon) {
      console.log(`## Player won round with ${player.pointsWon} points`);
      player.roundsWon += 1;
    } else if (player.pointsWon < computer.pointsWon) {
      console.log(`## Computer won round with ${computer.pointsWon} points`);
      computer.roundsWon += 1;
    } else {
      console.log(`## Round was a tie`); 
    }
  },
  
  scoreRounds() {
    console.log('####################### ... AND THE FINAL SCORE IS ..... ');
    
    if (player.roundsWon > computer.roundsWon) {
      console.log(`Player WON ${player.roundsWon} rounds out of 3!!`);
    } else if (computer.roundsWon > player.roundsWon) {
      console.log(`Computer WON ${computer.roundsWon} rounds out of 3!!`);
    } else {
      console.log(`Game was a tie!!`);
    }
  },

  resetRound() {
    player.hand = [];
    computer.hand = [];
    player.pointsWon = 0;
    computer.pointsWon = 0;
  }
}

// Main game function
while (game.allCards.length > 5) {
  game.deal();
  game.compareAndScore();
  game.resetRound();
}
game.scoreRounds();




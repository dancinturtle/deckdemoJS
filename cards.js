function Card(suit, value, name){
    this.name = name;
    this.suit = suit;
    this.val = value;
    this.show = function(){
        console.log(this)
    }
}
function Discarded(){
    this.discarded = [];
}
function Deck(){
    this.deck = [];
    // this.discard = [];
    // make 52 intances from the Card object constructor and push them into this.deck
    // loop through 4 different suits
    // loop through the 13 values
    var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    var namearray = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    for(i=0; i<suits.length; i++){
        for(j=1; j<14; j++){
            this.deck.push(new Card(suits[i], j, namearray[j-1]));
        }
    }
    this.deal = function(){
        // remove a card from our deck
        if(this.deck.length > 0){
            return this.deck.pop();
        }
        return null
        // return the card that we removed from the deck
    }
}
function Player(name){
    this.name = name;
    // each player should have a hand
    this.hand = [];
    this.take = function(deck){
        // call the deck's deal() method
        var takencard = deck.deal();
        if(takencard){
            this.hand.push(takencard);
        }
        return this;
        // get a card returned to us
        // push that card into our hand
    }
    this.discard = function(idx, pile){
        // idx is the position in the array , eg, 1 , 2 ,3 ,4
        // store whatever is in the final position in the player's hand in temp
        var temp = this.hand[this.hand.length - 1];
        console.log("52", temp);
        this.hand[this.hand.length - 1] = this.hand[idx];
        console.log("54", temp)
        this.hand[idx] = temp;
        var removedcard = this.hand.pop();
        pile.discarded.push(removedcard);

        // take a card from the player's hand
        // put it in the discarded pile
    }

}

var mydeck = new Deck();
var discardPile = new Discarded();

// console.log(mydeck);
// mydeck.deck[5].show();
var player1 = new Player("Kermit");
player1.take(mydeck).take(mydeck).take(mydeck);
console.log(player1.hand);
player1.discard(0, discardPile); // discard the K of clubs
console.log(player1.hand);
console.log("the discard Pile:", discardPile);





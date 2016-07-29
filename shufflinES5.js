//creates deck of unique set of cards
//n is a number
function createDeck(n) {
  if (n.constructor !== Number)
    return 'Please provide a number to create your deck of unique cards.';
  if (n < 0)
    return 'Please provide a number greater than zero.';
  var array = [];
  for (var i = 1; i <= n; i ++) {
    array.push(i);
  }
  return array;
}

//if createDeck was implemented differently, the unique deck of cards might not be in order
//wanted an array of the same length, but gave a deck of cards from 1....n
function seqDeck(deck) {
  if (deck.constructor !== Array)
    return 'Please provide an array to create an ordered deck of cards.';
  var array = [];
  for (var i = 1; i <= deck.length; i ++) {
    array.push(i);
  }
  return array;
}

//figures out how many times a card moves positions before it goes back to its original position
//returns an array of how many times each card moved positions - but gets rid of all numbers that have been repeated
function moveCardPositions(deck, cut) {
  if (deck.constructor !== Array)
    return 'Please provide an array to figure out how many shuffles it takes for each card to return to its original position.';
  if (cut.constructor !== Number)
    return 'Please provide a number to indicate where to cut the deck.';
  if (deck.length < cut)
    return 'The deck created is smaller than the cut size provided.';
  if (cut < 0)
    return 'Please provide a cut size greater than zero.';
  if (cut === deck.length || cut === 0)
    return '0 shuffles!';

  var firstShuffle = true,
      origDeckStr = deck.join(','),
      currentDeckStr = '',
      pattern = [],
      deckLength = deck.length,
      deckCutRemainder = deckLength - cut;


  while(origDeckStr !== currentDeckStr) {
    var deckShuffling = deck.map(function(cardPos, i) {
      if ((cut <= deckLength/2 && cardPos <= cut) || (cut > deckLength/2 && cardPos <= deckCutRemainder)) {
        if (firstShuffle || cardPos !== i + 1) {
          if (!pattern[i]) pattern[i] = 1;
          else pattern[i] ++;
          return cardPos * 2;
        } else {
          return cardPos;
        }
      }
      if ((cut <= deckLength/2 && cardPos > cut  && cardPos <= deckCutRemainder) || (cut > deckLength/2 && cardPos > deckCutRemainder && cardPos <= 2*deckCutRemainder)) {
        if (firstShuffle || cardPos !== i + 1) {
          if (!pattern[i]) pattern[i] = 1;
          else pattern[i] ++;
          if (cut <= deckLength/2)
            return cardPos + cut;
          else
            return 2*cardPos - 2*deckCutRemainder - 1;
        } else {
          return cardPos;
        }
      }
      if ((cut <= deckLength/2 && cardPos > deckCutRemainder && cardPos <= deckLength) || (cut > deckLength/2 && cardPos > deckCutRemainder*2 && cardPos <= deckLength)) {
        if (firstShuffle || cardPos !== i + 1) {
          if (!pattern[i]) pattern[i] = 1;
          else pattern[i] ++;
          if (cut <= deckLength/2)
            return cardPos - (deckCutRemainder) + cardPos - (deckCutRemainder + 1);
          else
            return cardPos;
        } else {
          return cardPos;
        }
      }
    });
    firstShuffle = false;
    deck = deckShuffling;
    currentDeckStr = deckShuffling.join(',');
  }
  return removeDup(pattern);
}


//removes all the duplicate numbers from the array and returns out an array of unique numbers
function removeDup(array) {
  if (array.constructor !== Array)
    return 'Please provide an array to that has elements that duplicate.';
  var unique = [array[0]];
  for (var i = 1; i < array.length; i ++) {
    for (var j = 0; j < unique.length; j ++) {
      if (array[i] === unique[j])
        break;
    }
    if (j === unique.length)
      unique.push(array[i]);
  }
  return unique;
}

//formula to find lcd (a*b)/GCD(a,b)
//returns the number of shuffles it takes to get cards back to its original position
function numOfShuffles(array) {
  if (array.constructor !== Array)
    return 'Please provide an array.';
  var greatestComDem;
  return array.reduce(function(a, b) {
    greatestComDen = gcd(a, b);
    return (a * b) / greatestComDen;
  }) + ' shuffles!';
}

//finds the greatest common denominator between two numbers
function gcd(num1, num2) {
  if (num1.constructor !== Number || num2.constructor !== Number)
    return 'Please provide two numbers to find greatest common denominator';
  if (num1 < 0 || num2  < 0)
    return 'Please provide numbers greater than or equal to zero.';

  if(num2 === 0) return num1;

  var remainder;
  if (num1 > num2) {
    remainder = num1 % num2;
    return gcd(num2, remainder);
  } else {
    remainder = num2 % num1;
    return gcd(num1, remainder);
  }
}

var orderedDeck = seqDeck(createDeck(1002));
var numShufflesBackOrigPos = moveCardPositions(orderedDeck, 101);
console.log(numShufflesBackOrigPos);
var numShuffles = numOfShuffles(numShufflesBackOrigPos);
console.log(numShuffles);


// go through the array
  // at each element, want to find where it's next position will be
  //keep going until the element is back to its original position
  //when back to original position stop trying to find next position because already found pattern

//is number back to its original index

//find least common denom between the set of numbers
// recursively find the gcd between a pair of numbers

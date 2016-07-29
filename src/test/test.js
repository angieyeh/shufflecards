import test from 'tape';
import {createDeck, seqDeck, moveCardPositions, removeDup, numOfShuffles, gcd} from './../shufflin'

test('createDeck', t => {
  let deck1 = createDeck(5);
  let deck2 = createDeck('funwithstring');
  let deck3 = createDeck(-10)
  t.plan(4);
  t.equal(typeof createDeck, 'function');
  t.deepEqual(deck1, [1,2,3,4,5]);
  t.equal(deck2, 'Please provide a number to create your deck of unique cards.');
  t.equal(deck3, 'Please provide a number greater than zero.')
});

test('seqDeck', t => {
  let deck1 = seqDeck([1,2,3,4,5]);
  let deck2 = seqDeck(90);
  t.plan(3);
  t.equal(typeof seqDeck, 'function');
  t.deepEqual(deck1, [1,2,3,4,5]);
  t.equal(deck2, 'Please provide an array to create an ordered deck of cards.')
});

test('moveCardPositions', t => {
  let deck = createDeck(1002);
  let string = 'string'
  t.plan(8);
  t.equal(typeof moveCardPositions, 'function');
  t.deepEqual(moveCardPositions([1,2,3,4,5,6,7,8,9,10], 3), [7,3])
  t.deepEqual(moveCardPositions(seqDeck(deck), 101), [235,230,206,50,232,40,9]);
  t.deepEqual(moveCardPositions(seqDeck(deck), 700), [220,110,20,10,4,1]);
  t.equal(moveCardPositions(seqDeck(deck), 1003), 'The deck created is smaller than the cut size provided.')
  t.equal(moveCardPositions(seqDeck(deck), -10), 'Please provide a cut size greater than zero.');
  t.equal(moveCardPositions(string, 10), 'Please provide an array to figure out how many shuffles it takes for each card to return to its original position.')
  t.equal(moveCardPositions(seqDeck(deck), string), 'Please provide a number to indicate where to cut the deck.')
});

test('removeDup', t => {
  let arr1 = [1,2,3,3,3,4,5,5];
  let arr2 = [11,21,21,3,3,4,2,2,2,2,3,4,4,4,4,10];
  t.plan(4);
  t.equal(typeof removeDup, 'function');
  t.deepEqual(removeDup(arr1), [1,2,3,4,5]);
  t.deepEqual(removeDup(arr2), [11,21,3,4,2,10]);
  t.equal(removeDup('Justkiddingnotanarray'), 'Please provide an array to that has elements that duplicate.')
});

test('numOfShuffles', t => {
  let deck = seqDeck(createDeck(1002));
  let shufflesPattern = moveCardPositions(deck, 101);
  let shufflin = numOfShuffles(shufflesPattern);
  let deck2 = seqDeck(createDeck(50));
  let shufflesPattern2 = moveCardPositions(deck2, 15);
  let shufflin2 = numOfShuffles(shufflesPattern2);
  t.plan(4);
  t.equal(typeof numOfShuffles, 'function');
  t.equal(shufflin, '5812104600 shuffles!');
  t.equal(shufflin2, '828 shuffles!');
  t.equal(numOfShuffles('avariableisavariableisavariable'), 'Please provide an array.')
});

test('gcd', t => {
  let gcd20_90= gcd(20, 90);
  let gcd230_235 = gcd(230, 235);
  let gcd22_88 = gcd(22, 88);
  let gcdString_100 = gcd('whyastringyousay', 100);
  let gcdneg1_1 = gcd(-1, 1);

  t.plan(6);
  t.equal(typeof gcd, 'function');
  t.equal(gcd20_90, 10);
  t.equal(gcd230_235, 5);
  t.equal(gcd22_88, 22);
  t.equal(gcdString_100, 'Please provide two numbers to find greatest common denominator');
  t.equal(gcdneg1_1, 'Please provide numbers greater than zero.');
});

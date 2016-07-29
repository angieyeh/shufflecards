'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _shufflin = require('./../shufflin');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('createDeck', function (t) {
  var deck1 = (0, _shufflin.createDeck)(5);
  var deck2 = (0, _shufflin.createDeck)('funwithstring');
  var deck3 = (0, _shufflin.createDeck)(-10);
  t.plan(4);
  t.equal(typeof _shufflin.createDeck === 'undefined' ? 'undefined' : _typeof(_shufflin.createDeck), 'function');
  t.deepEqual(deck1, [1, 2, 3, 4, 5]);
  t.equal(deck2, 'Please provide a number to create your deck of unique cards.');
  t.equal(deck3, 'Please provide a number greater than zero.');
});

(0, _tape2.default)('seqDeck', function (t) {
  var deck1 = (0, _shufflin.seqDeck)([1, 2, 3, 4, 5]);
  var deck2 = (0, _shufflin.seqDeck)(90);
  t.plan(3);
  t.equal(typeof _shufflin.seqDeck === 'undefined' ? 'undefined' : _typeof(_shufflin.seqDeck), 'function');
  t.deepEqual(deck1, [1, 2, 3, 4, 5]);
  t.equal(deck2, 'Please provide an array to create an ordered deck of cards.');
});

(0, _tape2.default)('moveCardPositions', function (t) {
  var deck = (0, _shufflin.createDeck)(1002);
  var string = 'string';
  t.plan(8);
  t.equal(typeof _shufflin.moveCardPositions === 'undefined' ? 'undefined' : _typeof(_shufflin.moveCardPositions), 'function');
  t.deepEqual((0, _shufflin.moveCardPositions)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), [7, 3]);
  t.deepEqual((0, _shufflin.moveCardPositions)((0, _shufflin.seqDeck)(deck), 101), [235, 230, 206, 50, 232, 40, 9]);
  t.deepEqual((0, _shufflin.moveCardPositions)((0, _shufflin.seqDeck)(deck), 700), [220, 110, 20, 10, 4, 1]);
  t.equal((0, _shufflin.moveCardPositions)((0, _shufflin.seqDeck)(deck), 1003), 'The deck created is smaller than the cut size provided.');
  t.equal((0, _shufflin.moveCardPositions)((0, _shufflin.seqDeck)(deck), -10), 'Please provide a cut size greater than zero.');
  t.equal((0, _shufflin.moveCardPositions)(string, 10), 'Please provide an array to figure out how many shuffles it takes for each card to return to its original position.');
  t.equal((0, _shufflin.moveCardPositions)((0, _shufflin.seqDeck)(deck), string), 'Please provide a number to indicate where to cut the deck.');
});

(0, _tape2.default)('removeDup', function (t) {
  var arr1 = [1, 2, 3, 3, 3, 4, 5, 5];
  var arr2 = [11, 21, 21, 3, 3, 4, 2, 2, 2, 2, 3, 4, 4, 4, 4, 10];
  t.plan(4);
  t.equal(typeof _shufflin.removeDup === 'undefined' ? 'undefined' : _typeof(_shufflin.removeDup), 'function');
  t.deepEqual((0, _shufflin.removeDup)(arr1), [1, 2, 3, 4, 5]);
  t.deepEqual((0, _shufflin.removeDup)(arr2), [11, 21, 3, 4, 2, 10]);
  t.equal((0, _shufflin.removeDup)('Justkiddingnotanarray'), 'Please provide an array to that has elements that duplicate.');
});

(0, _tape2.default)('numOfShuffles', function (t) {
  var deck = (0, _shufflin.seqDeck)((0, _shufflin.createDeck)(1002));
  var shufflesPattern = (0, _shufflin.moveCardPositions)(deck, 101);
  var shufflin = (0, _shufflin.numOfShuffles)(shufflesPattern);
  var deck2 = (0, _shufflin.seqDeck)((0, _shufflin.createDeck)(50));
  var shufflesPattern2 = (0, _shufflin.moveCardPositions)(deck2, 15);
  var shufflin2 = (0, _shufflin.numOfShuffles)(shufflesPattern2);
  t.plan(4);
  t.equal(typeof _shufflin.numOfShuffles === 'undefined' ? 'undefined' : _typeof(_shufflin.numOfShuffles), 'function');
  t.equal(shufflin, '5812104600 shuffles!');
  t.equal(shufflin2, '828 shuffles!');
  t.equal((0, _shufflin.numOfShuffles)('avariableisavariableisavariable'), 'Please provide an array.');
});

(0, _tape2.default)('gcd', function (t) {
  var gcd20_90 = (0, _shufflin.gcd)(20, 90);
  var gcd230_235 = (0, _shufflin.gcd)(230, 235);
  var gcd22_88 = (0, _shufflin.gcd)(22, 88);
  var gcdString_100 = (0, _shufflin.gcd)('whyastringyousay', 100);
  var gcdneg1_1 = (0, _shufflin.gcd)(-1, 1);

  t.plan(6);
  t.equal(typeof _shufflin.gcd === 'undefined' ? 'undefined' : _typeof(_shufflin.gcd), 'function');
  t.equal(gcd20_90, 10);
  t.equal(gcd230_235, 5);
  t.equal(gcd22_88, 22);
  t.equal(gcdString_100, 'Please provide two numbers to find greatest common denominator');
  t.equal(gcdneg1_1, 'Please provide numbers greater than zero.');
});
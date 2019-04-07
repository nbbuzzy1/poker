
//full deck
let deck = [
  'AS.jpg',
  'AC.jpg',
  'AD.jpg',
  'AH.jpg',
  'KS.jpg',
  'KC.jpg',
  'KD.jpg',
  'KH.jpg',
  'QS.jpg',
  'QC.jpg',
  'QD.jpg',
  'QH.jpg',
  'JS.jpg',
  'JC.jpg',
  'JD.jpg',
  'JH.jpg',
  'TS.jpg',
  'TC.jpg',
  'TD.jpg',
  'TH.jpg',
  '9S.jpg',
  '9C.jpg',
  '9D.jpg',
  '9H.jpg',
  '8S.jpg',
  '8C.jpg',
  '8D.jpg',
  '8H.jpg',
  '7S.jpg',
  '7C.jpg',
  '7D.jpg',
  '7H.jpg',
  '6S.jpg',
  '6C.jpg',
  '6D.jpg',
  '6H.jpg',
  '5S.jpg',
  '5C.jpg',
  '5D.jpg',
  '5H.jpg',
  '4S.jpg',
  '4C.jpg',
  '4D.jpg',
  '4H.jpg',
  '3S.jpg',
  '3C.jpg',
  '3D.jpg',
  '3H.jpg',
  '2S.jpg',
  '2C.jpg',
  '2D.jpg',
  '2H.jpg'
]

//random card one
let cardOne = deck[Math.floor(Math.random() * 52)];

//random card two (minus card one from deck)
deck.splice(deck.indexOf(cardOne), 1);
let cardTwo = deck[Math.floor(Math.random() * 51)];

//display random cards
const getCardOne = () => {
  document.getElementById("displayCardOne").innerHTML = ('<img src="' + 'assets/images/' + cardOne + '" width="250px">')
}
const getCardTwo = () => {
  document.getElementById("displayCardTwo").innerHTML = ('<img src="' + 'assets/images/' + cardTwo + '" width="250px">')
}

//set up position and display position name
let position = Math.floor(Math.random() * 8);
let positionName = ['Under the Gun', 'Under the Gun +1', 'Under the Gun +2', 'Lowjack', 'Highjack', 'Cutoff', 'Button', 'Small Blind'];
const showPosition = () => {
  document.getElementById("displayPosition").innerHTML = positionName[position];
}
getCardOne()
getCardTwo()
showPosition()

//set up complete hand for comparison purposes
let suited = '';
let offsuit = '';
let completeHand = '';
let completeHand2 = '';
const cardComparison = () => {
  if (cardOne[1] === cardTwo[1]) {
    suited = "s";
  } else if (cardOne[0] === cardTwo[0]) {
    offsuit ='';
    suited = '';
  } else if (cardOne[1] !== cardTwo[1]) {
    offsuit = "o";
  }
  completeHand = cardOne[0] + cardTwo[0] + suited + offsuit;
  completeHand2 = cardTwo[0] + cardOne[0] + suited + offsuit;
}
cardComparison();

//analyzing whether raise or fold was correct or wrong
let count = 0;
let longestStreak = 0;
let result = document.getElementById("displayResult");
result.addEventListener('animationend', function() {
  result.classList.remove('flashit');
});
const correct = () => {
  result.innerHTML = "Correct!";
  result.classList.add('flashit');
  count++;
  if (count > longestStreak) {
    longestStreak = count;
  }
  document.getElementById("winStreak").innerHTML = "Count: " + count;
  document.getElementById("longestStreak").innerHTML = "Longest Win Streak: " + longestStreak;
}
const wrong = () => {
  result.innerHTML = "Wrong!";
  result.classList.add('flashit');
  count = 0;
  document.getElementById("winStreak").innerHTML = "";
}

//user clicks raise button
let raiseButton = document.getElementById("raiseBTN")
raiseButton.addEventListener("click", function(){
  if (table[position].includes(completeHand) || table[position].includes(completeHand2)) {
    correct();
  } else {
    wrong();
  }
  newGame();
});

//user clicks fold button
let foldButton = document.getElementById("foldBTN")
foldButton.addEventListener("click", function(){
  if (!table[position].includes(completeHand) && !table[position].includes(completeHand2)) {
    correct();
  } else {
    wrong();
  }
  newGame();
});

//start over
let startOver = document.getElementById("startOver")
startOver.addEventListener("click", function() {
  count = 0;
  longestStreak = 0;
  document.getElementById("winStreak").innerHTML = "";
  document.getElementById("displayResult").innerHTML = "";
  document.getElementById("longestStreak").innerHTML = "";
  newGame();
})

//new game
const newGame = () => {
  deck = [
    'AS.jpg',
    'AC.jpg',
    'AD.jpg',
    'AH.jpg',
    'KS.jpg',
    'KC.jpg',
    'KD.jpg',
    'KH.jpg',
    'QS.jpg',
    'QC.jpg',
    'QD.jpg',
    'QH.jpg',
    'JS.jpg',
    'JC.jpg',
    'JD.jpg',
    'JH.jpg',
    'TS.jpg',
    'TC.jpg',
    'TD.jpg',
    'TH.jpg',
    '9S.jpg',
    '9C.jpg',
    '9D.jpg',
    '9H.jpg',
    '8S.jpg',
    '8C.jpg',
    '8D.jpg',
    '8H.jpg',
    '7S.jpg',
    '7C.jpg',
    '7D.jpg',
    '7H.jpg',
    '6S.jpg',
    '6C.jpg',
    '6D.jpg',
    '6H.jpg',
    '5S.jpg',
    '5C.jpg',
    '5D.jpg',
    '5H.jpg',
    '4S.jpg',
    '4C.jpg',
    '4D.jpg',
    '4H.jpg',
    '3S.jpg',
    '3C.jpg',
    '3D.jpg',
    '3H.jpg',
    '2S.jpg',
    '2C.jpg',
    '2D.jpg',
    '2H.jpg'
  ];
  cardOne = deck[Math.floor(Math.random() * 52)];
  deck.splice(deck.indexOf(cardOne), 1);
  cardTwo = deck[Math.floor(Math.random() * 51)];
  getCardOne();
  getCardTwo();
  suited = '';
  offsuit = '';
  completeHand = '';
  completeHand2 = '';
  cardComparison();
  completeHand = cardOne[0] + cardTwo[0] + suited + offsuit;
  completeHand2 = cardTwo[0] + cardOne[0] + suited + offsuit;
  position = Math.floor(Math.random() * 8);
  showPosition();
};

//the correct raising hands for each position in the array
const table = [
  [
    'AA', 
    'AKs', 
    'AQs', 
    'AJs', 
    'ATs', 
    'A5s', 
    'AKo', 
    'KK',
    'KQs',
    'KJs',
    'KTs',
    'AQo',
    'QQ',
    'QJs',
    'QTs',
    'JJ',
    'JTs',
    'J9S',
    'TT',
    'T9s',
    '99',
    '98s',
    '88',
    '77'
  ],
  [
    'AA', 
    'AKs', 
    'AQs', 
    'AJs', 
    'ATs', 
    'A5s', 
    'AKo', 
    'KK',
    'KQs',
    'KJs',
    'KTs',
    'AQo',
    'QQ',
    'QJs',
    'QTs',
    'JJ',
    'JTs',
    'J9S',
    'TT',
    'T9s',
    '99',
    '98s',
    '88',
    '77'
  ],
  [
    'AA', 
    'AKs', 
    'AQs', 
    'AJs', 
    'ATs', 
    'A9s',
    'A8s',
    'A5s',
    'A4s', 
    'AKo', 
    'KK',
    'KQs',
    'KJs',
    'KTs',
    'K9s',
    'AQo',
    'QQ',
    'QJs',
    'QTs',
    'Q9s',
    'AJo',
    'JJ',
    'JTs',
    'J9S',
    'TT',
    'T9s',
    '99',
    '98s',
    '88',
    '77'
  ],
  [
    'AA', 
    'AKs', 
    'AQs', 
    'AJs', 
    'ATs', 
    'A9s',
    'A8s',
    'A7s',
    'A6s',
    'A5s',
    'A4s',
    'A3s',
    'A2s', 
    'AKo', 
    'KK',
    'KQs',
    'KJs',
    'KTs',
    'K9s',
    'AQo',
    'KQo',
    'QQ',
    'QJs',
    'QTs',
    'Q9s',
    'AJo',
    'JJ',
    'JTs',
    'J9S',
    'TT',
    'T9s',
    'T8s',
    '99',
    '98s',
    '88',
    '87s',
    '77',
    '76s',
    '66',
    '55'
  ],
  [
    'AA', 
    'AKs', 
    'AQs', 
    'AJs', 
    'ATs', 
    'A9s',
    'A8s',
    'A7s',
    'A6s',
    'A5s',
    'A4s',
    'A3s',
    'A2s', 
    'AKo', 
    'KK',
    'KQs',
    'KJs',
    'KTs',
    'K9s',
    'AQo',
    'KQo',
    'QQ',
    'QJs',
    'QTs',
    'Q9s',
    'AJo',
    'KJo',
    'QJo',
    'JJ',
    'JTs',
    'J9S',
    'ATo',
    'TT',
    'T9s',
    'T8s',
    '99',
    '98s',
    '88',
    '87s',
    '77',
    '76s',
    '66',
    '65s',
    '55',
    '44',
  ],
  [
    'AA', 
    'AKs', 
    'AQs', 
    'AJs', 
    'ATs', 
    'A9s',
    'A8s',
    'A7s',
    'A6s',
    'A5s',
    'A4s',
    'A3s',
    'A2s', 
    'AKo', 
    'KK',
    'KQs',
    'KJs',
    'KTs',
    'K9s',
    'K8s',
    'AQo',
    'KQo',
    'QQ',
    'QJs',
    'QTs',
    'Q9s',
    'Q8s',
    'AJo',
    'KJo',
    'QJo',
    'JJ',
    'JTs',
    'J9S',
    'J8s',
    'ATo',
    'KTo',
    'QTo',
    'JTo',
    'TT',
    'T9s',
    'T8s',
    '99',
    '98s',
    '88',
    '87s',
    '86s',
    '77',
    '76s',
    '66',
    '65s',
    '55',
    '54s',
    '44',
    '33',
    '22'
  ],
  [
    'AA', 
    'AKs', 
    'AQs', 
    'AJs', 
    'ATs', 
    'A9s',
    'A8s',
    'A7s',
    'A6s',
    'A5s',
    'A4s',
    'A3s',
    'A2s', 
    'AKo', 
    'KK',
    'KQs',
    'KJs',
    'KTs',
    'K9s',
    'K8s',
    'K7s',
    'K6s',
    'K5s',
    'K4s',
    'K3s',
    'AQo',
    'KQo',
    'QQ',
    'QJs',
    'QTs',
    'Q9s',
    'Q8s',
    'Q7s',
    'Q6s',
    'Q5s',
    'AJo',
    'KJo',
    'QJo',
    'JJ',
    'JTs',
    'J9S',
    'J8s',
    'J7s',
    'J6s',
    'ATo',
    'KTo',
    'QTo',
    'JTo',
    'TT',
    'T9s',
    'T8s',
    'T7s',
    'T6s',
    'A9o',
    'K9o',
    'Q9o',
    'J9o',
    'T9o',
    '99',
    '98s',
    '97s',
    '96s',
    'A8o',
    '88',
    '87s',
    '86s',
    '85s',
    'A7o',
    '77',
    '76s',
    '75s',
    'A6o',
    '66',
    '65s',
    '64s',
    'A5o',
    '55',
    '54s',
    'A4o',
    '44',
    '43s',
    'A3o',
    '33',
    'A2o',
    '22'
  ],
  [
    'AA', 
    'AKs', 
    'AQs', 
    'AJs', 
    'ATs', 
    'A9s',
    'A8s',
    'A7s',
    'A6s',
    'A5s',
    'A4s',
    'A3s',
    'A2s', 
    'AKo', 
    'KK',
    'KQs',
    'KJs',
    'KTs',
    'K9s',
    'K8s',
    'K7s',
    'K6s',
    'K5s',
    'K4s',
    'K3s',
    'K2s',
    'AQo',
    'KQo',
    'QQ',
    'QJs',
    'QTs',
    'Q9s',
    'Q8s',
    'Q7s',
    'Q6s',
    'Q5s',
    'Q4s',
    'AJo',
    'KJo',
    'QJo',
    'JJ',
    'JTs',
    'J9S',
    'J8s',
    'J7s',
    'J6s',
    'ATo',
    'KTo',
    'QTo',
    'JTo',
    'TT',
    'T9s',
    'T8s',
    'T7s',
    'T6s',
    'A9o',
    'K9o',
    'Q9o',
    'J9o',
    'T9o',
    '99',
    '98s',
    '97s',
    '96s',
    '95s',
    'A8o',
    '88',
    '87s',
    '86s',
    '85s',
    '84s',
    'A7o',
    '77',
    '76s',
    '75s',
    '74s',
    'A6o',
    '66',
    '65s',
    '64s',
    '63s',
    'A5o',
    '55',
    '54s',
    '53s',
    'A4o',
    '44',
    '43s',
    'A3o',
    '33',
    '32s',
    'A2o',
    '22'
  ]
]





const fs = require('fs');

const bubbleSort = (hands) => {
  let swapped;
  do {
    swapped = false;
    for (let interval = 0; interval < hands.length - 1; interval++) {
      const currentHand = hands[interval].split(' ');
      const nextHand = hands[interval + 1].split(' ');
      const currentCardValues = currentHand[0];
      const nextCardValues = nextHand[0];

      if (currentCardValues > nextCardValues) {
        let temp = hands[interval];
        hands[interval] = hands[interval + 1];
        hands[interval + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return hands;
};

try {
  const hands = fs.readFileSync('strings.txt', 'utf8').split('\r\n');
  const sortedArray = bubbleSort(hands);
  console.log(sortedArray);
} catch (error) {
  console.error(error);
}

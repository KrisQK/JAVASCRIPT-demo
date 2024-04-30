const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
//-----低效率
// cards.sort(() => Math.random() - 0.5);

//Fisher-Yates shuffle algorithm

shuffle(cards);

// cards.sort();
console.log(cards);
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}

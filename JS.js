const emojis = ["😍", "😍", "😜", "😜", "😂", "😂", "😎", "😎", "😡", "😡", "😭", "😭", "🥶", "🥶", "🤯", "🤯"];
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.classList.add('item');

  box.addEventListener('click', function (e) {
    if (!box.classList.contains('boxOpen')) {
      box.classList.add('boxOpen');

      const openBoxes = document.querySelectorAll('.boxOpen');
      if (openBoxes.length === 2) {
        const [box1, box2] = openBoxes;
        if (box1.innerHTML === box2.innerHTML) {
          box1.classList.remove('boxOpen');
          box2.classList.remove('boxOpen');
          box1.classList.add('boxMatch');
          box2.classList.add('boxMatch');

          if (document.querySelectorAll('.boxMatch').length === emojis.length) {
            // All boxes have been matched
            alert('Congratulations! You have won the game.');
            resetGame();
          }
        } else {
          setTimeout(() => {
            box1.classList.remove('boxOpen');
            box2.classList.remove('boxOpen');
          }, 500);
        }
      }
    }
  });

  box.innerHTML = shuffleEmojis[i];
  document.querySelector('.container .game').appendChild(box);
}

function resetGame() {
  const gameContainer = document.querySelector('.container .game');
  gameContainer.innerHTML = ''; // Clear the game container

  // Reshuffle emojis and create new boxes
  shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);
  for (let i = 0; i < emojis.length; i++) {
    const box = document.createElement('div');
    box.classList.add('item');

    box.addEventListener('click', function (e) {
      // Same click event logic as above
    });

    box.innerHTML = shuffleEmojis[i];
    gameContainer.appendChild(box);
  }
}

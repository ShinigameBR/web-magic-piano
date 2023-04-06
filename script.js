const buttons = document.querySelectorAll('.key');

function playSound(note) {
  var audio = new Audio(`sounds/key${note}.mp3`);
  audio.play();
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    playSound(button.dataset.note);
  });
});

document.addEventListener('keydown', function(event) {
  buttons.forEach(button => {
    if (event.key === button.querySelector('span').innerText) {
      playSound(button.dataset.note);
    }
  });
});
const buttons = document.querySelectorAll('.key');



function playSound(note) {
  var audio = new Audio(`sounds/key${note}.mp3`);
  audio.play();
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    playSound(button.dataset.note);
    if (button.classList.contains('white')) {
      button.style.backgroundColor = '#aaa'
      setTimeout(function() {
        button.style.backgroundColor = '#fff'
      }, 100)
    }else if (button.classList.contains('black')) {
      button.style.backgroundColor = '#333';
      setTimeout(function() {
        button.style.backgroundColor = '#222';
      }, 100)
    } 
  });
});

document.addEventListener('keydown', function(event) {
  buttons.forEach(button => {
    if (event.key === button.querySelector('span').innerText) {
      playSound(button.dataset.note);
      if (button.classList.contains('white')) {
        button.style.backgroundColor = '#aaa'
        setTimeout(function() {
          button.style.backgroundColor = '#fff'
        }, 100)
      }else if (button.classList.contains('black')) {
        button.style.backgroundColor = '#333';
        setTimeout(function() {
          button.style.backgroundColor = '#222';
        }, 100)
      }   
    }
  });
});
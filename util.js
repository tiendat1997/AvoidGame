function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomColorRGB() {
  return `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)} )`;
}

function showPlayAlert() {
  swal({
    title: "AVOID AVOID",
    text: "--- 1 MINUTE, 30 SECONDS to WIN ---",
    icon: "game-icon.png",
    iconWidth: '100',
    iconHeight: '100',
    button: {
      text: "Play",
      closeModal: true,
    },
    closeOnClickOutside: false
  }).then((value) => {
    startGame();
  });
}

function showLoseAlert() {
  swal({
    title: `Your score: ${score}`,
    icon: "lose-icon.jpg",
    button: {
      text: "Replay",
      closeModal: true
    },
    dangerMode: true,
    closeOnClickOutside: false
  })
    .then((value) => {
      showPlayAlert();
    });
}

function showWinAlert() {
  swal({
    title: "^^ YOU WON ^^",    
    icon: "success",    
  }).then((value) => {
    showPlayAlert();
  });
}
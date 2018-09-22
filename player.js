// PLAYER OBJECT
function Player() {
    // Properties
    var x = window.innerWidth / 2;
    var y = 200;
    var playerColor = 'red';
    var radius = 25;
    var speed = 5;
    // Method
    this.draw = draw;
    function draw() {
      graph.beginPath();
      graph.fillStyle = playerColor;
      graph.arc(x, y, radius, 0, 2 * Math.PI);
      graph.fill();
      this.isHit();
      // Check Hit
    }
    this.setX = setX;
    function setX(newX) {
      x = newX;
    }
    this.setY = setY;
    function setY(newY) {
      y = newY;
    }
    this.getSpeed = getSpeed;
    function getSpeed() {
      return speed;
    }
    this.getX = getX;
    function getX() {
      return x;
    }
    this.getY = getY;
    function getY() {
      return y;
    }
    this.getR = getR;
    function getR() {
      return radius;
    }
    this.isHit = isHit;
    // Check Hit by ball --> Game Over
    function isHit() {
      for (var i = 0; i < ball.length; i++) {
        if (Math.sqrt(Math.pow(Math.abs(x - ball[i].getX()), 2) + Math.pow(Math.abs(y - ball[i].getY()), 2)) <= (radius + ball[i].getRadius())) {
          clearInterval(theInterval);
          clearInterval(ballInterval);
          if (score < 90) {
            // show alert loose
            showLoseAlert();
          }
          else {
            showWinAlert();
          }
        }
      }
    }
  }
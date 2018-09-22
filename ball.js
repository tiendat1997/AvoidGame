// BALL OBJECT
function Ball(newX, newY, newR) {
    // Properties
    var x = newX;
    var y = newY;
    var dx = 0;
    var dy = 3;
    var radius = newR;
    var counter = 0;
    var ballColor = getRandomColorRGB();
    // Method
    this.draw = draw;
    function draw() {
      graph.beginPath();
      graph.save();
      graph.fillStyle = ballColor;
      graph.globalAlpha = "0.8";
      graph.arc(x, y, radius, 0, Math.PI * 2);
      graph.fill();
      graph.closePath();
      graph.restore();
    }
    this.setX = setX;
    function setX(newX) {
      x = newX;
    }
    this.setY = setY;
    function setY(newY) {
      y = newY;
    }
    this.setRadius = setRadius;
    function setRadius(newR) {
      radius = newR;
    }
    this.getX = getX;
    function getX() {
      return x;
    }
    this.getY = getY;
    function getY() {
      return y;
    }
    this.getRadius = getRadius;
    function getRadius() {
      return radius;
    }
    this.move = move;
    function move() {
      // increase x, y
      x += dx;
      y += dy;
      // Bounce on a right and left
      if (x + dx + radius > WIDTH || x + dx - radius < 0) {
        dx = -dx;
        dy = getRandomInt(-8, 8);
        counter++;
        if (counter % 4 == 0) {
          duplicateBall(this, x, y);
        }
        ballColor = getRandomColorRGB();
      }
      // Bounce if ball hits the top or hits the bottom
      if (y + dy - radius < 0 || y + dy + radius > HEIGHT) {
        dy = -dy;
        dx = getRandomInt(-8, 8);
        counter++;
        if (counter % 4 == 0) {
          duplicateBall(this, x, y);
        }
        ballColor = getRandomColorRGB();
      }
    }
  }
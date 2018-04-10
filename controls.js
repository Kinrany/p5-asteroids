const THRUST = 87;     // W
const TURN_LEFT = 65;  // A
const SHOOT = 83;      // S
const TURN_RIGHT = 68; // D

function keyPressed() {
  switch (keyCode) {
    case SHOOT:
      Bullet.Spawn(ship);
  }
}

function mouseClicked() {
  Asteroid.Spawn(mouseX, mouseY);
}
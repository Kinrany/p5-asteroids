const THRUST = 87;     // W
const TURN_LEFT = 65;  // A
const SHOOT = 83;      // S
const TURN_RIGHT = 68; // D

function updateControls(dt) {
  if (keyIsDown(TURN_RIGHT)) {
    Ship.ship.angle += 3 * dt;
  }
  if (keyIsDown(TURN_LEFT)) {
    Ship.ship.angle -= 3 * dt;
  }
  Ship.ship.thrust_on = keyIsDown(THRUST);
}

function keyPressed() {
  switch (keyCode) {
    case SHOOT:
      Bullet.Spawn(Ship.ship);
  }
}

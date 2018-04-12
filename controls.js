function thrust() {
  return keyIsDown(87); // W
}

function turn_left() {
  return keyIsDown(65); // A
}

function turn_right() {
  return keyIsDown(68); // D
}

function shoot() {
  return keyIsDown(83); // S
}

function updateControls(dt) {
  Ship.ship.thrust_on = thrust();

  if (turn_right()) {
    Ship.ship.turn_right(dt);
  }
  
  if (turn_left()) {
    Ship.ship.turn_left(dt);
  }

  if (shoot()) {
    Ship.ship.shoot();
  }
}

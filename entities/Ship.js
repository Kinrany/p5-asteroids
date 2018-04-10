function Ship() {
  Impulse.call(this);

  this.angle = 0;

  this.update = function (dt) {
    this.updatePosition(dt);
  };

  this.draw = function () {
    Relative(this.pos.x, this.pos.y, this.angle, this.shape);
  };

  this.shape = function () {
    fill("blue");
    triangle(20, 0, -10, -10, -10, 10);

    if (keyIsDown(THRUST)) {
      fill("yellow");
      triangle(-20, 0, -10, -5, -10, 5);
    }
  };
}

Ship.Spawn = function () {
  let ship = new Ship();
  ship.pos = createVector(width / 2, height / 2);
  entities.add(ship);
  return ship;
};
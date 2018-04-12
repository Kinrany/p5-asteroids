function Ship() {
  Impulse.call(this, 10);

  this.angle = 0;
  this.thrust_on = false;

  this.update = function (dt) {
    this.updatePosition(dt);

    if (this.thrust_on) {
      this.vel.add(createVector(100, 0)
        .rotate(this.angle).mult(dt));
    }
  };

  this.draw = function () {
    pushRelative(this.pos.x, this.pos.y, this.angle);
    {
      fill("blue");
      triangle(20, 0, -10, -10, -10, 10);
  
      if (this.thrust_on) {
        fill("yellow");
        triangle(-20, 0, -10, -5, -10, 5);
      }
    }
    pop();
  };
}

Ship.ship = null;

Ship.Spawn = function () {
  let ship = new Ship();
  ship.pos = createVector(width / 2, height / 2);
  Ship.ship = ship;
  return ship;
};
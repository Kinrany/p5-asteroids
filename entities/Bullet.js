function Bullet() {
  Impulse.call(this);

  this.update = function (dt) {
    this.updatePosition(dt);
  };

  this.draw = function () {
    pushRelative(this.pos.x, this.pos.y, 0);
    {
      fill("yellow");
      ellipse(0, 0, 10, 10);
    }
    pop();
  };
}

const bullets = [];

Bullet.Spawn = function (ship) {
  let bullet = new Bullet();
  bullet.pos = ship.pos.copy();
  bullet.vel = createVector(150, 0).rotate(ship.angle);
  bullets.push(bullet);
  return bullet;
};
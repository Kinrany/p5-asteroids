function Bullet() {
  Impulse.call(this);

  this.update = function (dt) {
    this.updatePosition(dt);
  };

  this.draw = function () {
    Relative(this.pos.x, this.pos.y, 0, this.shape);
  };

  this.shape = function () {
    fill("yellow");
    ellipse(0, 0, 10, 10);
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
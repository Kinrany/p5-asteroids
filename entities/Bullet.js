function Bullet() {
  Impulse.call(this);

  this.radius = 5;

  this.update = function (dt) {
    this.updatePosition(dt);
  };

  this.draw = function () {
    pushRelative(this.pos.x, this.pos.y, 0);
    {
      fill("yellow");
      ellipse(0, 0, this.radius * 2, this.radius * 2);
    }
    pop();
  };
}

Bullet.bullets = [];

Bullet.Spawn = function (ship) {
  let bullet = new Bullet();
  bullet.pos = ship.pos.copy();
  bullet.vel = createVector(150, 0).rotate(ship.angle);
  Bullet.bullets.push(bullet);
  return bullet;
};
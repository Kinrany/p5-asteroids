function Asteroid() {
  Impulse.call(this, 30);
  
  this.angle = 0;
  this.ang_vel = 0;

  this.update = function (dt) {
    this.updatePosition(dt);
    this.angle += this.ang_vel * dt;
  };

  this.draw = function () {
    Relative(this.pos.x, this.pos.y, this.angle, this.shape);
  };

  this.shape = function () {
    fill("grey");
    ellipse(0, 0, 30, 50);
  };
}

Asteroid.Spawn = function (x, y) {
  let asteroid = new Asteroid();
  asteroid.pos = createVector(x, y);
  asteroid.vel = createVector(100, 0).rotate(random(360));
  asteroid.ang_vel = random(PI * 2);
  entities.add(asteroid);
  return asteroid;
};
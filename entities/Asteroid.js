function Asteroid() {
  Impulse.call(this, 30);
  
  this.angle = 0;
  this.ang_vel = 0;

  this.radius = 15;

  this.update = function (dt) {
    this.updatePosition(dt);
    this.angle += this.ang_vel * dt;
  };

  this.draw = function () {
    pushRelative(this.pos.x, this.pos.y, this.angle);
    {
      fill("grey");
      ellipse(0, 0, this.radius * 2, this.radius * 2 + 20);
    }
    pop();
  };
}

let asteroids = [];

Asteroid.Spawn = function (x, y) {
  let asteroid = new Asteroid();
  asteroid.pos = createVector(x, y);
  asteroid.vel = createVector(100, 0).rotate(random(360));
  asteroid.ang_vel = random(PI * 2);
  asteroids.push(asteroid);
  return asteroid;
};
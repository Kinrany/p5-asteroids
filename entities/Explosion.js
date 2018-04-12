function Explosion(lifespan) {
  Impulse.call(this);

  this.created_at = time();
  
  this.radius = function() {
    return 10 + 20 * (this.time_passed() / lifespan);
  }

  this.time_passed = function () {
    return time() - this.created_at;
  }

  this.time_left = function () {
    return (this.created_at + lifespan) - time();
  }

  this.update = function (dt) {
    if (this.time_passed() > lifespan) {
      Explosion.explosions = Explosion.explosions.filter(e => e != this);
    }
  };

  this.draw = function () {
    pushRelative(this.pos.x, this.pos.y, 0);
    {
      const fade = this.time_left() / lifespan; // from 1 to 0
      fill(255, 255 * fade, 0, 255 * fade);
      stroke(0, 0, 0, 255 * fade);
      const diameter = this.radius() * 2;
      ellipse(0, 0, diameter, diameter);
    }
    pop();
  }
}

Explosion.explosions = [];

Explosion.Spawn = function (x, y) {
  const explosion = new Explosion(1);
  explosion.pos = createVector(x, y);
  Explosion.explosions.push(explosion);
  return explosion;
}
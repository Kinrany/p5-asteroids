"use strict";

function entities() {
  return [Ship.ship].concat(Asteroid.asteroids, Bullet.bullets, Explosion.explosions);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Ship.Spawn();
}

function update() {
  const dt = deltaTime();

  updateControls(dt);

  for (let e of entities()) {
    e.update(dt);
  }
  
  asteroidsSpawn();
  bulletsExplode();
  explosionsKillAsteroids();
}

function draw() {
  update();

  background(32);

  for (let e of entities()) {
    e.draw();
  }

  fill("white");
  textSize(20);
  text("Управление -- WASD", 10, 20);
}

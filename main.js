"use strict";

function entities() {
  return [ship].concat(Asteroid.asteroids, Bullet.bullets);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Ship.Spawn();
}

function update() {
  const dt = getDeltaTime();

  updateControls(dt);

  for (let e of entities()) {
    e.update(dt);
  }

  bulletsKillAsteroids();
}

function draw() {
  update();

  background(32);

  for (let e of entities()) {
    e.draw();
  }

  fill("white");
  text("Управление -- WASD + мышь", 10, 20);
}

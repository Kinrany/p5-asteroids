"use strict";

function entities() {
  return [ship].concat(asteroids, bullets);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Ship.Spawn();
}

let last_update;
function update() {
  let current_update = millis() / 1000;
  if (last_update === undefined) {
    last_update = current_update;
  }
  let dt = current_update - last_update;
  last_update = current_update;

  updateControls(dt);

  for (let e of entities()) {
    e.update(dt);
  }

  let _ = { bullets, asteroids } = bulletsKillAsteroids(bullets, asteroids);
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

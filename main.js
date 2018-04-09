"use strict";

const entities = new Set();
let ship;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = Ship.Spawn();
}

function draw() {
  background(32);

  for (let e of entities) {
    e.update(millis() / 1000);
  }
  for (let e of entities) {
    e.draw();
  }

  fill("white");
  text("Управление -- WASD + мышь", 10, 20);
}

function mouseClicked() {
  Asteroid.Spawn(mouseX, mouseY);
}

function keyPressed() {
  if (keyCode == SHOOT) {
    Bullet.Spawn(ship);
  }
}
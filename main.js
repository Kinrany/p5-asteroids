"use strict";

const entities = new Set();
let ship;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = Ship.Spawn();
}

function update() {
  for (let e of entities) {
    e.update(millis() / 1000);
  }
}

function draw() {
  update();

  background(32);

  for (let e of entities) {
    e.draw();
  }

  fill("white");
  text("Управление -- WASD + мышь", 10, 20);
}

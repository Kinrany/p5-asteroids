"use strict";

// controls

const THRUST = 87;     // W
const TURN_LEFT = 65;  // A
const SHOOT = 83;      // S
const TURN_RIGHT = 68; // D

// helper functions

function Delta(f) {
  let last_update;
  return function (current_update) {
    if (last_update === undefined) {
      last_update = current_update;
    }
    let dt = current_update - last_update;
    last_update = current_update;
    return f.call(this, dt);
  };
}

function WrapAroundTheScreen(offset = 0) {
  if (this.pos.x < -offset) {
    this.pos.x += width + offset;
  } else if (this.pos.x > width + offset) {
    this.pos.x -= width + offset;
  }
  if (this.pos.y < -offset) {
    this.pos.y += height + offset;
  } else if (this.pos.y > height + offset) {
    this.pos.y -= height + offset;
  }
}

function Relative(x, y, angle, f) {
  push();
  translate(x, y);
  rotate(angle);
  let result = f.call(this);
  pop();
  return result;
}

// entity mixins

function Velocity(screenWrapOffset = 0) {
  this.pos = createVector(0, 0);
  this.vel = createVector(0, 0);

  this.updatePosition = function (dt) {
    this.pos.add(this.vel.copy().mult(dt));
    WrapAroundTheScreen.call(this, screenWrapOffset);
  }
}

function Angle() {
  this.angle = 0;
}

function AngularVelocity() {
  Angle.call(this);

  this.ang_vel = 0;

  this.updateAngle = function (dt) {
    this.angle += this.ang_vel * dt;
  }
}

// game entity classes

function Asteroid() {
  Velocity.call(this, 30);
  AngularVelocity.call(this);

  this.update = Delta(function (dt) {
    this.updatePosition(dt);
    this.updateAngle(dt);
  });

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
  entities.push(asteroid);
  return asteroid;
};

function Ship() {
  Velocity.call(this);
  Angle.call(this);

  this.update = Delta(function (dt) {
    this.updatePosition(dt);

    if (keyIsDown(TURN_RIGHT)) {
      this.angle += 3 * dt;
    }
    if (keyIsDown(TURN_LEFT)) {
      this.angle -= 3 * dt;
    }
    if (keyIsDown(THRUST)) {
      let force = createVector(100, 0)
        .rotate(this.angle)
        .mult(dt);
      this.vel.add(force);
    }
  });

  this.draw = function () {
    Relative(this.pos.x, this.pos.y, this.angle, this.shape);
  };

  this.shape = function () {
    fill("blue");
    triangle(20, 0, -10, -10, -10, 10);

    if (keyIsDown(THRUST)) {
      fill("yellow");
      triangle(-20, 0, -10, -5, -10, 5);
    }
  };
}

Ship.Spawn = function () {
  let ship = new Ship();
  ship.pos = createVector(width / 2, height / 2);
  entities.push(ship);
  return ship;
};

function Bullet() {
  Velocity.call(this);

  this.update = Delta(function (dt) {
    this.updatePosition(dt);
  });

  this.draw = function () {
    Relative(this.pos.x, this.pos.y, 0, this.shape);
  };

  this.shape = function () {
    fill("yellow");
    ellipse(0, 0, 10, 10);
  };
}

Bullet.Spawn = function (ship) {
  let bullet = new Bullet();
  bullet.pos = ship.pos.copy();
  bullet.vel = createVector(150, 0).rotate(ship.angle);
  entities.push(bullet);
  return bullet;
};

// main

const entities = [];
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
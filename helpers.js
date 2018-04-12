// imitates toroidal space
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

function pushRelative(x, y, angle) {
  push();
  translate(x, y);
  rotate(angle);
}

// expects arr1 and arr2 to contain objects
// that have 'pos' and 'radius' properties
function getCollisions(arr1, arr2) {
  const collisions = [];

  for (let a1 of arr1) {
    for (let a2 of arr2) {
      let current_dist = dist(a1.pos.x, a1.pos.y, a2.pos.x, a2.pos.y);
      let collision_dist = a1.radius() + a2.radius();
      if (current_dist < collision_dist) {
        collisions.push([a1, a2]);
      }
    }
  }

  return collisions;
}

// returns time in seconds since the beginning
function time() {
  return millis() / 1000;
}

// returns time in seconds since last call
let last_update;
function deltaTime() {
  let current_update = time();
  if (last_update === undefined) {
    last_update = current_update;
  }
  let dt = current_update - last_update;
  last_update = current_update;
  return dt;
}
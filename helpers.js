// replaces a function that takes current time
// into a function that takes delta time
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

// executes the function in another p5 coordinate system
function Relative(x, y, angle, f) {
  push();
  translate(x, y);
  rotate(angle);
  let result = f.call(this);
  pop();
  return result;
}
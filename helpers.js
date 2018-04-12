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
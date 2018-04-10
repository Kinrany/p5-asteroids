function Impulse(screenWrapOffset = 0) {
  this.pos = createVector(0, 0);
  this.vel = createVector(0, 0);

  this.updatePosition = function (dt) {
    this.pos.add(this.vel.copy().mult(dt));
    WrapAroundTheScreen.call(this, screenWrapOffset);
  }
}

function AngularVelocity() {
  Angle.call(this);

  this.ang_vel = 0;

  this.updateAngle = function (dt) {
    this.angle += this.ang_vel * dt;
  }
}
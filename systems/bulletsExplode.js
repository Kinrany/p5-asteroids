function bulletsExplode() {
  const collisions = getCollisions(Bullet.bullets, Asteroid.asteroids);
  const bullets_to_remove = collisions.map(c => c[0]);
  const explosions = bullets_to_remove.map(a => Explosion.Spawn(a.pos.x, a.pos.y));
  Bullet.bullets = Bullet.bullets.filter(b => !bullets_to_remove.includes(b));
}
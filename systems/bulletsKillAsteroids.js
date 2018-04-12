function bulletsKillAsteroids() {
  const collisions = getCollisions(Bullet.bullets, Asteroid.asteroids);

  const bullets_to_remove = collisions.map(c => c[0]);
  const asteroids_to_remove = collisions.map(c => c[1]);

  Bullet.bullets = Bullet.bullets.filter(b => !bullets_to_remove.includes(b));
  Asteroid.asteroids = Asteroid.asteroids.filter(a => !asteroids_to_remove.includes(a));
}
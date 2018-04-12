function explosionsKillAsteroids() {
  const collisions = getCollisions(Explosion.explosions, Asteroid.asteroids);
  const asteroids_to_remove = collisions.map(c => c[1]);
  Asteroid.asteroids = Asteroid.asteroids.filter(a => !asteroids_to_remove.includes(a));
}
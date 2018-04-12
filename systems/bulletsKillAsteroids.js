function bulletsKillAsteroids(bullets, asteroids) {

  const collisions = getCollisions(bullets, asteroids);

  const bullets_to_remove = collisions.map(c => c[0]);
  const asteroids_to_remove = collisions.map(c => c[1]);

  return {
    bullets: bullets.filter(b => !bullets_to_remove.includes(b)),
    asteroids: asteroids.filter(a => !asteroids_to_remove.includes(a))
  }
}
export function filterPlanets(planets) {
  return planets.filter(p => p.terrain.includes('mountains')
    && !isNaN(p.waterSurfacePercent) && parseInt(p.waterSurfacePercent) > 0);
}

export function computeTotalDiameter(planets) {
  return planets.map(p => p.diameter).reduce((total, current) => total + parseInt(current), 0);
}

export function displayPlanetsDiameterSummary(filmId, planets) {
  console.log(`\nIn Film #${filmId} there are ${planets.length} planets that have mountains and a water surface (> 0).`);

  if (planets.length) {
    for (const planet of planets) {
      console.log(` - ${planet.name}, diameter: ${planet.diameter}`);
    }
  
    console.log(`Total diameter: ${computeTotalDiameter(planets)}`);
  }
}
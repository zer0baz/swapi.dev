// Films
import { FilmsService } from './films/films.service.js';

// Planets
import { displayPlanetsDiameterSummary, filterPlanets } from './planets/planets.helper.js';
import { PlanetsService } from './planets/planets.service.js';

// Utils
import { getFilmIdFromArguments } from './utils/arguments.helper.js';

const filmsService = new FilmsService();
const planetsService = new PlanetsService();

async function main() {
  const filmId = getFilmIdFromArguments();
  const filmData = await filmsService.getFilm(filmId);
  
  const planets = await planetsService.getPlanetsByUrl(filmData.planets);
  const filteredPlanets = filterPlanets(planets);

  displayPlanetsDiameterSummary(filmId, filteredPlanets);
}

main();
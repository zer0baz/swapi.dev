// Models
import { Planet } from './planet.model.js';

// Utils
import { ErrorManager } from '../utils/error.manager.js';

export class PlanetsService {
  async getPlanetsByUrl(planetUrls) {
    const promisedPlanets = await Promise.all(planetUrls.map(u => this.getPlanetByUrl(u)));
    return promisedPlanets;
  }

  async getPlanetByUrl(planetUrl) {
    const planetData = await fetch(planetUrl);

    if (!planetData.ok) {
      ErrorManager.throwSwappiError(`Something went wrong while getting the planet.\nHttp status ${planetData.status}`);
    }

    return new Planet(await planetData.json());
  }
}
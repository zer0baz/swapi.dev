// Models
import { Film } from './film.model.js';

// Utils
import { ErrorManager } from '../utils/error.manager.js';

import { SWAPI_URL } from '../global.js';

export class FilmsService {
  constructor() {
    this.baseRoute = `${SWAPI_URL}/films`;
  }

  async getFilm(filmId) {
    const filmData = await fetch(`${this.baseRoute}/${filmId}`);

    if (!filmData.ok) {
      ErrorManager.throwSwappiError(`Something went wrong while getting the film.\nHttp status ${filmData.status}`);
    }

    return new Film(await filmData.json());
  }
}
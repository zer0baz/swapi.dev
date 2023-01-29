export class Planet {
  constructor(planet) {
    this.name = planet.name;
    this.diameter = planet.diameter;
    this.waterSurfacePercent = planet.surface_water;
    this.terrain = planet.terrain;
  }
}
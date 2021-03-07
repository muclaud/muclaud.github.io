import { Component } from "../helpers/components.js";


export class PlanetsList extends Component {
    constructor(planets) {
        super ({elementType: "div", className: "card"})
        let planetsContent = "";
        planets.forEach((planet) => {
            planetsContent += `
            <div class="card-body">
              <h5 class="Name: ${planet.name}</h5>
              <p class="card-text">Population: ${planet.population}</p>
              <p class="card-text">Diameter: ${planet.diameter}</p>
              <p class="card-text">Climat: ${planet.climat}</p>
              <p class="card-text">Terrain: ${planet.terrain}</p>
              <a href="${planet.url}" class="btn btn-primary">Detailes</a>
            </div>`
        });
        this.updateContent(planetsContent)
    }
}
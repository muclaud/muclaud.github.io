import { Component } from "../helpers/components.js";


export class PlanetsList extends Component {
    constructor(planets) {
        super ({elementType: "div", className: "card"})
        let planetsContent = "";
        planets.forEach((planet) => {
            planetsContent += `
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${planet.name}</h5>
                        <p class="card-text">Population: ${planet.population}</p>
                        <p class="card-text">Diameter: ${planet.diameter}</p>
                        <p class="card-text">Climate: ${planet.climate}</p>
                        <p class="card-text">Terrain: ${planet.terrain}</p>
                    </div>
                    <div class="card-footer">    
                        <a href="${planet.url}" class="btn btn-primary">    Detailes    </a>
                    </div>
                </div>
            </div>`
        });
        this.updateContent(planetsContent)
    }
}
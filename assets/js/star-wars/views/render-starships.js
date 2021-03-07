import { Component } from "../helpers/components.js";


export class StarshipsList extends Component {
    constructor(starships) {
        super ({elementType: "div", className: "card"})
        let starshipsContent = "";
        starships.forEach((starship) => {
            starshipsContent += `
            <div class="card-body">
              <h5 class="Name: ${starship.name}</h5>
              <p class="card-text">Passengers: ${starship.passengers}</p>
              <p class="card-text">Crew: ${starship.crew}</p>
              <p class="card-text">Length: ${starship.length}</p>
              <p class="card-text">Manufacturer: ${starship.manufacturer}</p>
              <a href="${starship.url}" class="btn btn-primary">Detailes</a>
            </div>`
        });
        this.updateContent(starshipsContent)
    }
}
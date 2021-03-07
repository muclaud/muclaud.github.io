import { Component } from "../helpers/components.js";


export class SpeciesList extends Component {
    constructor(species) {
        super ({elementType: "div", className: "card"})
        let speciesContent = "";
        species.forEach((specie) => {
            speciesContent += `
            <div class="card-body">
              <h5 class="Name: ${specie.name}</h5>
              <p class="card-text">Skin color: ${specie.skin_color}</p>
              <p class="card-text">Average height: ${specie.average_height}</p>
              <p class="card-text">Average lifespan: ${specie.average_lifespan}</p>
              <p class="card-text">Designation: ${specie.designation}</p>
              <a href="${specie.url}" class="btn btn-primary">Detailes</a>
            </div>`
        });
        this.updateContent(speciesContent)
    }
}
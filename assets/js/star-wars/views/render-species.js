import { Component } from "../helpers/components.js";


export class SpeciesList extends Component {
    constructor(species) {
        super ({elementType: "div", className: "card"})
        let speciesContent = "";
        species.forEach((specie) => {
            speciesContent += `
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${specie.name}</h5>
                        <p class="card-text">Skin color: ${specie.skin_colors}</p>
                        <p class="card-text">Average height: ${specie.average_height}</p>
                        <p class="card-text">Average lifespan: ${specie.average_lifespan}</p>
                        <p class="card-text">Designation: ${specie.designation}</p>
                    </div>
                    <div class="card-footer"> 
                        <a href="${specie.url}" class="btn btn-primary">    Detailes    </a>
                    </div>
                </div>
            </div>`
        });
        this.updateContent(speciesContent)
    }
}
import { Component } from "../helpers/components.js";

export class StarshipsList extends Component {
  constructor(starships) {
    super({ elementType: "div", className: "card" });
    let starshipsContent = "";
    starships.forEach((starship) => {
      starshipsContent += `
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${starship.name}</h5>
                        <p class="card-text">Passengers: ${starship.passengers}</p>
                        <p class="card-text">Crew: ${starship.crew}</p>
                        <p class="card-text">Length: ${starship.length}</p>
                        <p class="card-text">Manufacturer: ${starship.manufacturer}</p>
                    </div>
                </div>
            </div>`;
    });
    this.updateContent(starshipsContent);
  }
}

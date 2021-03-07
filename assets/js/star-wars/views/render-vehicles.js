import { Component } from "../helpers/components.js";


export class VehiclesList extends Component {
    constructor(vehicles) {
        super ({elementType: "div", className: "card"})
        let vehiclesContent = "";
        vehicles.forEach((vehicle) => {
            vehiclesContent += `
            <div class="card-body">
              <h5 class="Name: ${vehicle.name}</h5>
              <p class="card-text">Passengers: ${vehicle.passengers}</p>
              <p class="card-text">Crew: ${vehicle.crew}</p>
              <p class="card-text">Length: ${vehicle.length}</p>
              <p class="card-text">Manufacturer: ${vehicle.manufacturer}</p>
              <a href="${vehicle.url}" class="btn btn-primary">Detailes</a>
            </div>`
        });
        this.updateContent(vehiclesContent)
    }
}
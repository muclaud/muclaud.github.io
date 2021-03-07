import { Component } from "../helpers/components.js";

export class PeopleList extends Component {
    constructor(people) {
        super ({elementType: "div", className: "card"})
        let peopleContent = "";
        people.forEach((person) => {
            peopleContent += `
            <div class="card-body">
              <h5 class="Name: ${person.name}</h5>
              <p class="card-text">Gender: ${person.gender}</p>
              <p class="card-text">Height: ${person.height}</p>
              <p class="card-text">Mass: ${person.mass}</p>
              <p class="card-text">Skin color: ${person.skin_color}</p>
              <a href="${person.url}" class="btn btn-primary">Detailes</a>
            </div>`
        });
        this.updateContent(peopleContent)
    }
}